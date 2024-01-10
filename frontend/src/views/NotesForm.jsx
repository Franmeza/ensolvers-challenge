import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

Modal.setAppElement("#root");

function NotesForm() {
  const { register, handleSubmit, setValue } = useForm();
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const onSubmit = () => {};
  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Formulario Modal"
      >
        <div className="flex">
          <h1 className="text-2xl font-bold">Add Note</h1>
          <span>X</span>
        </div>
        <form onSubmit={onSubmit}>
          <label htmlFor="">Note Title</label>
          <input
            className="bg-zinc-700 w-full my-2 rounded-md py-2 px-2"
            type="text"
            {...register("title")}
            autoFocus
          />
          <label htmlFor="">Note Description</label>

          <textarea
            name=""
            id=""
            cols="30"
            rows="7"
            className="bg-zinc-700 w-full my-2 rounded-md py-2 px-2"
            type="text"
            {...register("description")}
          ></textarea>

          <button type="submit" className="bg-indigo-500 px-3 py-2 rounded-md">
            Create
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default NotesForm;
