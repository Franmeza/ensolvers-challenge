import { Router } from "express";
import {
  createNotes,
  getNotes,
  getNote,
  updateNote,
  deleteNote,
  archiveToggle,
} from "../controllers/notes.controllers.js";

const noteRoutes = Router();

noteRoutes.post("/notes", createNotes);
noteRoutes.get("/notes", getNotes);
noteRoutes.get("/notes/:id", getNote);
noteRoutes.put("/notes/:id", updateNote);
noteRoutes.delete("/notes/:id", deleteNote);
noteRoutes.patch("/notes/:id", archiveToggle);

export default noteRoutes;
