import React, { useEffect } from "react";
import { useNotes } from "../context/NotesContext";
import NoteCard from "../components/NoteCard";

function NotesList() {
  const { notes, getNotes } = useNotes();

  useEffect(() => {
    getNotes();
  }, []);
  console.log(notes);
  return (
    <div>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NotesList;
