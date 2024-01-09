import express from "express";
import morgan from "morgan";
import noteRoutes from "./routes/notes.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api", noteRoutes);
export default app;
