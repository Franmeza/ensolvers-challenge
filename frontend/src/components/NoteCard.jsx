import React, { useState } from "react";
import { RiDeleteBin6Line, RiEditBoxLine } from "react-icons/ri";
import { useNotes } from "../context/NotesContext";
import { RiArchiveLine } from "react-icons/ri";

function NoteCard({ note }) {
  const { deleteNote, openModalToEdit, archivedToggle } = useNotes();

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
        <select name="" id="">
          <option value="">Select Category</option>
          <option value="">Business</option>
          <option value="">Technologies</option>
          <option value="">Documentation</option>
          <option value="">Challenge</option>
        </select>
      </div>
    </div>
  );
}

export default NoteCard;
