import { Route, Routes } from "react-router-dom";
import NotesList from "./views/NotesList";
import NavBar from "./components/NavBar";
import { NoteProvider } from "./context/NotesContext";
import NotesForm from "./views/NotesForm";
import React, { useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { RiCloseLine } from "react-icons/ri";
import { useNotes } from "./context/NotesContext";

Modal.setAppElement("#root");

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { register, handleSubmit, setValue } = useForm();
  const { createNote } = useNotes();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const onSubmit = handleSubmit((data) => {
    createNote(data);
    closeModal();
  });
  return (
    <>
      <NoteProvider>
        <main className="container mx-auto">
          <NavBar openModal={openModal} />
          <Routes>
            <Route path="/" element={<NotesList />} />
            <Route path="/add-note" element={<NotesForm />} />
          </Routes>
        </main>

        <Modal
          className=" bg-white rounded"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Formulario Modal"
        >
          <div className="max-w-lg w-full flex flex-col rounded-md">
            <div className="flex justify-between p-5 bg-teal-500">
              <h1 className="text-2xl font-bold">Add Note</h1>
              <div onClick={closeModal} className="cursor-pointer">
                <RiCloseLine size={30} />
              </div>
            </div>
            <div className="p-5">
              <form onSubmit={onSubmit}>
                <label htmlFor="">Note Title</label>
                <input
                  className=" w-full my-2 rounded-md py-2 px-2 border border-gray-400"
                  type="text"
                  {...register("title")}
                  autoFocus
                />
                <label htmlFor="">Note Description</label>

                <textarea
                  cols="30"
                  rows="6"
                  className="w-full my-2 rounded-md py-2 px-2 border border-gray-400 "
                  type="text"
                  {...register("description")}
                ></textarea>
                <div>
                  <button
                    type="submit"
                    className="bg-indigo-500 px-3 py-2 rounded-md"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      </NoteProvider>
    </>
  );
}

export default App;
