import React, { useEffect, useState } from "react";
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
        {filter === "all-notes" &&
          notes.map((note) => (
            <NoteCard key={note.id} note={note} openModal={openModal} />
          ))}
        {filter === "actives" &&
          notes
            .filter((note) => note.archived === false)
            .map((note) => <NoteCard key={note.id} note={note} />)}
        {filter === "archived" &&
          notes
            .filter((note) => note.archived === true)
            .map((note) => <NoteCard key={note.id} note={note} />)}
      </div>
    </div>
  );
}

export default NotesList;
