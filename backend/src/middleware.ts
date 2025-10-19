import type { NextFunction, Request, Response } from 'express';
import { User } from './db.js';
import jwt from 'jsonwebtoken';
import { ca } from 'zod/locales';

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers['authorization'];
    if (!header) {
        return res.status(401).json({ error: "Authorization header missing" });
    }
    const token = header.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: "Token missing" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        // @ts-ignore
        req.userId = decoded.userId;
        next();
        if (!decoded) {
            return res.status(403).json({ error: "You are not logged in" });
        }
    }catch (error) {
        return res.status(403).json({ error: "Invalid token" });
    }
}