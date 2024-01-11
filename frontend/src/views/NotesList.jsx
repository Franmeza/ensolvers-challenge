import React, { useEffect, useState, useMemo } from "react";
import { useNotes } from "../context/NotesContext";
import NoteCard from "../components/NoteCard";

function NotesList({ openModal }) {
  const { notes, getNotes } = useNotes();
  const [filter, setFilter] = useState("all-notes");

  useEffect(() => {
    getNotes();
  }, []);

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredNotes = useMemo(() => {
    if (filter === "all-notes") {
      return notes;
    } else if (filter === "actives") {
      return notes.filter((note) => !note.archived);
    } else if (filter === "archived") {
      return notes.filter((note) => note.archived);
    }

    return notes;
  }, [filter, notes]);

  return (
    <div>
      <select
        className="my-3 rounded-md px-2 py-1"
        name="selectFilter"
        onChange={handleChange}
      >
        <option value="all-notes">All notes</option>
        <option value="actives">Actives</option>
        <option value="archived">Archived</option>
      </select>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
        {filteredNotes.map((note) => (
          <NoteCard key={note.id} note={note} openModal={openModal} />
        ))}
      </div>
    </div>
  );
}

export default NotesList;
