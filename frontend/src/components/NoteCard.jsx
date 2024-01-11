import React, { useState } from "react";
import { RiDeleteBin6Line, RiEditBoxLine } from "react-icons/ri";
import { useNotes } from "../context/NotesContext";
import { RiArchiveLine } from "react-icons/ri";

function NoteCard({ note }) {
  const { deleteNote, openModalToEdit, archivedToggle, updateNoteCategory } =
    useNotes();

  const handleChange = (e) => {
    updateNoteCategory(note.id, e.target.value);
  };
  return (
    <div className=" max-w-sm w-full p-5 rounded-md border border-gray-400 bg-white">
      <h1 className="text-2xl font-bold">{note.title}</h1>

      <div className="my-3 text-gray-500 ">{note.description}</div>
      <div className="flex justify-between">
        <div className="flex gap-x-2 items-center">
          <button onClick={() => deleteNote(note.id)}>
            <RiDeleteBin6Line />
          </button>

          <button onClick={() => openModalToEdit(note)}>
            <RiEditBoxLine />
          </button>
          <button>
            <RiArchiveLine
              onClick={() => archivedToggle(note.id, !note.archived)}
            />
          </button>
        </div>
        <select value={note.category} name="" id="" onChange={handleChange}>
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
