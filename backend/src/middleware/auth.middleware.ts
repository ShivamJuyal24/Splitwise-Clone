import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";
import { findUserById } from "../modules/users/user.repository";

export const protect = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Authentication token missing",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = verifyToken(token);

    const user = await findUserById(decoded.userId);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    req.user = user;

    return next();
  } catch {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};