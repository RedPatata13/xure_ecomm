import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcrypt';
import { ensureTableExists, insertUser, getUserByEmailOrPhone, getUserById } from './db/db.js';
import 'dotenv/config';

const app = express();
if(!process.env.JWT_SECRET) console.log("JWT_SECRET Not Loaded");
const JWT_SECRET = process.env.JWT_SECRET ?? "dev_secret";

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

ensureTableExists(); // run once on startup, not on every request

app.get('/api/health', (req, res) => {
    res.status(200).json({ message: 'server healthy' })
});

app.post('/api/login', async (req, res) => {
    const { emailOrPhoneNumber, password } = req.body;

    if (!emailOrPhoneNumber || !password) {
        return res.status(400).json({ message: "Email/phone and password are required" });
    }

    const user = getUserByEmailOrPhone(emailOrPhoneNumber);
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
        { id: user.id, email: user.email },
        JWT_SECRET,
        { expiresIn: "7d" }
    );

    res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.status(200).json({ 
        user: { 
            username: user.username,
            email: user.email,
            phoneNumber: user.phoneNumber,
            dateCreated: user.dateCreated,
            dateUpdated: user.dateUpdated
        } 
    });
});

app.post('/api/signup', async (req, res) => {
    const { username, email, phoneNumber, password } = req.body;

    if (!username || !password || (!email && !phoneNumber)) {
        return res.status(400).json({ message: "Username, password, and either email or phone are required" });
    }

    const existing = email 
        ? getUserByEmailOrPhone(email) 
        : getUserByEmailOrPhone(phoneNumber);
    if (existing) {
        return res.status(409).json({ message: "Account already exists" });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    insertUser(username, email, phoneNumber, passwordHash);

    res.status(201).json({ message: "Account created" });
});

app.get('/api/me', (req, res) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Not authenticated" });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { id: string };
        const user = getUserById(decoded.id);

        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        res.status(200).json({
            user: {
                username: user.username,
                email: user.email,
                phoneNumber: user.phoneNumber,
                dateCreated: user.dateCreated,
                dateUpdated: user.dateUpdated
            }
        });
    } catch {
        res.status(401).json({ message: "Invalid token" });
    }
});


app.post('/api/logout', (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: false,
        sameSite: "strict"
    });
    res.status(200).json({ message: "Logged out" });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));