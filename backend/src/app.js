import express from "express";
import morgan from "morgan";
import noteRoutes from "./routes/notes.routes.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/notes", noteRoutes);
export default app;
