import React, { useState } from "react";
import { RiDeleteBin6Line, RiEditBoxLine } from "react-icons/ri";
import { useNotes } from "../context/NotesContext";
import { RiArchiveLine } from "react-icons/ri";

function NoteCard({ note }) {
  const { deleteNote, openModalToEdit, archivedToggle, updateNoteCategory } =
    useNotes();

  const categoryColors = {
    Business: "bg-yellow-200",
    Technologies: "bg-green-300",
    Documentation: "bg-blue-300",
    Challenge: "bg-purple-300",
  };

  const handleChange = (e) => {
    updateNoteCategory(note.id, e.target.value);
  };

  return (
    <div
      className={`max-w-sm w-full p-5 rounded-md border border-gray-400 ${
        categoryColors[note.category]
      }`}
    >
      <h1 className="text-2xl font-bold">{note.title}</h1>
      <div className="my-3 text-gray-500">{note.description}</div>
      <div className="flex justify-between">
        <div className="flex gap-x-2 items-center cursor-pointer">
          <div onClick={() => deleteNote(note.id)}>
            <RiDeleteBin6Line />
          </div>
          <div onClick={() => openModalToEdit(note)}>
            <RiEditBoxLine />
          </div>
          <div onClick={() => archivedToggle(note.id, !note.archived)}>
            <RiArchiveLine />
          </div>
        </div>
        <select
          className="rounded-md px-2 py-1 bg-gray-100"
          value={note.category}
          name=""
          id=""
          onChange={handleChange}
        >
          <option value=" ">Select Category</option>
          <option value="Business">Business</option>
          <option value="Technologies">Technologies</option>
          <option value="Documentation">Documentation</option>
          <option value="Challenge">Challenge</option>
        </select>
      </div>
    </div>
  );
}

export default NoteCard;
