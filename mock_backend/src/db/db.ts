import { DatabaseSync } from "node:sqlite";
import { randomUUID } from "node:crypto";
import type { User } from "../types/user.js";

const db = new DatabaseSync('local.db');

export function ensureTableExists() {
    db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id TEXT PRIMARY KEY,
            username TEXT NOT NULL,
            email TEXT UNIQUE,
            phoneNumber TEXT UNIQUE,
            passwordHash TEXT NOT NULL,
            dateCreated TEXT NOT NULL,
            dateUpdated TEXT NOT NULL
        );
    `);
}

export function insertUser(username: string, email: string | undefined, phoneNumber: string | undefined, passwordHash: string) {
    const now = new Date().toISOString();
    const stmt = db.prepare(`
        INSERT INTO users (id, username, email, phoneNumber, passwordHash, dateCreated, dateUpdated)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `)
    return stmt.run(randomUUID(), username, email ?? null, phoneNumber ?? null, passwordHash, now, now)
}

export function getUserByEmailOrPhone(emailOrPhoneNumber: string): User | undefined {
    const stmt = db.prepare(`
        SELECT * FROM users
        WHERE email = ? OR phoneNumber = ?
    `)
    return stmt.get(emailOrPhoneNumber, emailOrPhoneNumber) as User | undefined
}

export function getUserById(id: string): User | undefined {
    const stmt = db.prepare(`SELECT * FROM users WHERE id = ?`)
    return stmt.get(id) as User | undefined
}