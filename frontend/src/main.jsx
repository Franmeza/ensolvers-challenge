import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { NoteProvider } from "./context/NotesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NoteProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </NoteProvider>
);
