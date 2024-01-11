import { Route, Routes } from "react-router-dom";
import NotesList from "./views/NotesList";
import NavBar from "./components/NavBar";
import { NoteProvider } from "./context/NotesContext";
import React from "react";
import NotesForm from "./views/NotesForm";

function App() {
  return (
    <>
      <NoteProvider>
        <main className="container mx-auto">
          <NavBar />
          <Routes>
            <Route path="/" element={<NotesList />} />
            {/* <Route path="/add-note" element={<NotesForm />} /> */}
          </Routes>
        </main>
        <NotesForm />
      </NoteProvider>
    </>
  );
}

export default App;
