import { createContext, useContext, useState } from "react";
import {
  getNotesRequest,
  createNoteRequest,
  deleteNoteRequest,
  updateNoteRequest,
  updateNoteCategoryRequest,
  getNoteRequest,
  archiveToggleRequest,
} from "../api/notes";

const NoteContext = createContext();

export const useNotes = () => {
  const context = useContext(NoteContext);
  return context;
};

export function NoteProvider({ children }) {
  const [notes, setNotes] = useState([]);
  const [editData, setEditData] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const getNotes = async () => {
    try {
      const res = await getNotesRequest();
      setNotes(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getNote = async (id) => {
    console.log(id);
    try {
      const res = await getNoteRequest(id);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const createNote = async (note) => {
    try {
      const res = await createNoteRequest(note);
      setNotes([...notes, res.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNote = async (id) => {
    try {
      const res = await deleteNoteRequest(id);
      if (res.status === 200) {
        setNotes(notes.filter((note) => note.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateNote = async (id, note) => {
    try {
      await updateNoteRequest(id, note);
      await getNotes();
    } catch (error) {
      console.log(error);
    }
  };

  const updateNoteCategory = async (id, category) => {
    console.log(category);
    try {
      await updateNoteCategoryRequest(id, category);
      await getNotes();
    } catch (error) {
      console.log(error);
    }
  };

  const archivedToggle = async (id, archived) => {
    try {
      const res = await archiveToggleRequest(id, archived);
      await getNotes();
    } catch (error) {
      console.log(error);
    }
  };
  const openModal = () => {
    setModalIsOpen(true);
    setEditData(null);
  };

  const openModalToEdit = (note) => {
    setEditData(note);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        getNotes,
        createNote,
        deleteNote,
        updateNote,
        openModal,
        closeModal,
        modalIsOpen,
        getNote,
        openModalToEdit,
        editData,
        archivedToggle,
        updateNoteCategory,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}
