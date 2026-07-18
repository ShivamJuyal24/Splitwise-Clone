import jwt, { JwtPayload } from "jsonwebtoken";

interface TokenPayload extends JwtPayload {
  userId: string;
}

export const generateToken = (userId: string) => {
  return jwt.sign(
    { userId },
    process.env.JWT_SECRET!,
    {
      expiresIn: "7d",
    }
  );
};

export const verifyToken = (token: string): TokenPayload => {
  return jwt.verify(
    token,
    process.env.JWT_SECRET!
  ) as TokenPayload;
};