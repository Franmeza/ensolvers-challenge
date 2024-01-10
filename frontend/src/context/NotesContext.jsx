import { createContext, useContext, useState } from "react";
import { getNotesRequest, createNoteRequest } from "../api/notes";

const NoteContext = createContext();

export const useNotes = () => {
  const context = useContext(NoteContext);
  return context;
};

export function NoteProvider({ children }) {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    try {
      const res = await getNotesRequest();
      setNotes(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createNote = async (note) => {
    try {
      const res = await createNoteRequest(note);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <NoteContext.Provider value={{ notes, getNotes, createNote }}>
      {children}
    </NoteContext.Provider>
  );
}
