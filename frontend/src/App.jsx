import { Route, Routes } from "react-router-dom";
import NotesList from "./views/NotesList";
import NavBar from "./components/NavBar";
import { NoteProvider } from "./context/NotesContext";

function App() {
  return (
    <>
      <NoteProvider>
        <main className="container mx-auto">
          <NavBar />
          <Routes>
            <Route path="/" element={<NotesList />} />
          </Routes>
        </main>
      </NoteProvider>
    </>
  );
}

export default App;
