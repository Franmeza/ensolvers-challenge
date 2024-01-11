import { Router } from "express";
import {
  createNotes,
  getNotes,
  getNote,
  updateNote,
  deleteNote,
  archiveToggle,
  updateNoteCategory,
} from "../controllers/notes.controllers.js";

const noteRoutes = Router();

noteRoutes.post("/", createNotes);
noteRoutes.get("/", getNotes);
noteRoutes.get("/:id", getNote);
noteRoutes.put("/:id", updateNote);
noteRoutes.patch("/category/:id", updateNoteCategory);
noteRoutes.delete("/:id", deleteNote);
noteRoutes.patch("/:id", archiveToggle);

export default noteRoutes;
