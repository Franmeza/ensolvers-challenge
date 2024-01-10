import React, { useEffect } from "react";
import { useNotes } from "../context/NotesContext";
import NoteCard from "../components/NoteCard";

function NotesList({ openModal }) {
  const { notes, getNotes } = useNotes();

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} openModal={openModal} />
      ))}
    </div>
  );
}

export default NotesList;
