import { Route, Routes } from "react-router-dom";
import NotesPage from "./views/NotesPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<NotesPage />} />
      </Routes>
    </>
  );
}

export default App;
