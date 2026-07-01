import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";
import {
  ensureTableExists,
  insertUser,
  getUserByEmailOrPhone,
  getUserById,
} from "./db/db.js";
import "dotenv/config";

const app = express();
if (!process.env.JWT_SECRET) console.log("JWT_SECRET Not Loaded");
const JWT_SECRET = process.env.JWT_SECRET ?? "dev_secret";

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

ensureTableExists();

app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "server healthy" });
});

app.post("/api/login", async (req, res) => {
	const { emailOrPhoneNumber, password } = req.body;

	console.log("=== LOGIN REQUEST ===");
	console.log("Body:", req.body);

	const user = getUserByEmailOrPhone(emailOrPhoneNumber);
	console.log("User found:", !!user);

	if (!user) {
		console.log("Login failed: user not found");
		return res.status(401).json({ message: "Invalid credentials" });
	}

	const valid = await bcrypt.compare(password, user.passwordHash);
	console.log("Password valid:", valid);

	if (!valid) {
		console.log("Login failed: invalid password");
		return res.status(401).json({ message: "Invalid credentials" });
	}

	const token = jwt.sign(
		{ id: user.id, email: user.email },
		JWT_SECRET,
		{ expiresIn: "7d" }
	);

	console.log("JWT created:", token.slice(0, 20) + "...");

	res.cookie("token", token, {
		httpOnly: true,
		secure: false,
		sameSite: "strict",
		maxAge: 7 * 24 * 60 * 60 * 1000,
	});

	console.log("Cookie set.");

	res.status(200).json({
		user: {
			username: user.username,
			email: user.email,
			phoneNumber: user.phoneNumber,
			dateCreated: user.dateCreated,
			dateUpdated: user.dateUpdated,
		},
	});
});

app.post("/api/signup", async (req, res) => {
  const { username, email, phoneNum, password } = req.body;

  if (!username || !password || (!email && !phoneNum)) {
    return res.status(400).json({
      message: "Username, password, and either email or phone are required",
    });
  }

  const existing = email
    ? getUserByEmailOrPhone(email)
    : getUserByEmailOrPhone(phoneNum);
  if (existing) {
    return res.status(409).json({ message: "Account already exists" });
  }

  const passwordHash = await bcrypt.hash(password, 10);
  insertUser(username, email, phoneNum, passwordHash);

  res.status(201).json({ message: "Account created" });
});

app.get("/api/me", (req, res) => {
  console.log("=== /api/me ===");
	console.log("Cookies:", req.cookies);
  const token = req.cookies.token;

  if (!token) {
    console.log("Token not found");
    return res.status(401).json({ message: "Not authenticated" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string };
    const user = getUserById(decoded.id);

    if (!user) {
      console.log("User not found");
      return res.status(401).json({ message: "User not found" });
    }

    console.log("Returning user:", user.username);
    res.status(200).json({
      user: {
        username: user.username,
        email: user.email,
        phoneNumber: user.phoneNumber,
        dateCreated: user.dateCreated,
        dateUpdated: user.dateUpdated,
      },
    });
  } catch (err) {
    console.log("JWT verification failed:", err);
    res.status(401).json({ message: "Invalid token" });
  }
});

app.post("/api/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  });
  res.status(200).json({ message: "Logged out" });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
