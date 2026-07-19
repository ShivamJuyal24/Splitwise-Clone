import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import authRoutes from "./modules/auth/auth.routes"
import groupRoutes from "./modules/group/group.routes"
const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Health Check Route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Expense Tracker API is running",
  });
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/group", groupRoutes);

export default app;