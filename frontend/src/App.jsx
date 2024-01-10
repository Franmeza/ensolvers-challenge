import { Route, Routes } from "react-router-dom";
import NotesList from "./views/NotesList";
import NavBar from "./components/NavBar";
import { NoteProvider } from "./context/NotesContext";
import React from "react";
import NotesForm from "./views/NotesForm";
import ActiveNotes from "./views/ActiveNotes";
import ArchivedNotes from "./views/ArchivedNotes";

function App() {
  return (
    <>
      <NoteProvider>
        <main className="container mx-auto">
          <NavBar />
          <Routes>
            <Route path="/" element={<NotesList />} />
            {/* <Route path="/add-note" element={<NotesForm />} /> */}
            <Route path="/notes/active" element={<ActiveNotes />} />
            <Route path="/notes/archived" element={<ArchivedNotes />} />
          </Routes>
        </main>
        <NotesForm />
      </NoteProvider>
    </>
  );
}

export default App;
