import { useEffect } from "react";
import { useNotes } from "../context/NotesContext";
import NoteCard from "../components/NoteCard";

function ArchivedNotes() {
  const { notes, getNotes } = useNotes();

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
      {notes
        .filter((note) => note.archived === true)
        .map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
    </div>
  );
}

export default ArchivedNotes;
