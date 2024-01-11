import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { useNotes } from "../context/NotesContext";
import { RiCloseLine } from "react-icons/ri";
import { useEffect } from "react";
import Swal from "sweetalert2";

Modal.setAppElement("#root");

function NotesForm() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const { createNote, closeModal, modalIsOpen, updateNote, editData } =
    useNotes();

  useEffect(() => {
    if (editData) {
      setValue("title", editData.title);
      setValue("description", editData.description);
      // Puedes agregar más campos según sea necesario
    } else {
      setValue("title", "");
      setValue("description", "");
    }
  }, [editData, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    if (editData) {
      const res = await updateNote(editData.id, {
        ...data,
      });
      Swal.fire({
        icon: "success",
        title: "Congratulations!",
        text: res,
        confirmButtonColor: "#6366f1",
      });
    } else {
      const res = await createNote(data);
      Swal.fire({
        icon: "success",
        title: "Congratulations!",
        text: res,
        confirmButtonColor: "#6366f1",
      });
      reset();
    }
    closeModal();
  });
  return (
    <Modal
      className=" bg-white rounded"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Modal Form"
    >
      <div className="max-w-lg w-full flex flex-col rounded-md">
        <div className="flex justify-between p-5 bg-teal-500">
          <h1 className="text-2xl font-bold">Add Note</h1>
          <div onClick={closeModal} className="cursor-pointer">
            <RiCloseLine size={30} />
          </div>
        </div>
        <div className=" max-w-md  w-full p-5">
          <form onSubmit={onSubmit}>
            <label htmlFor="note-title" className="font-bold">
              Note Title
            </label>
            <input
              className=" w-full my-2 rounded-md py-2 px-2 border border-gray-400"
              type="text"
              {...register("title", {
                required: {
                  value: true,
                  message: "Please enter note title",
                },
              })}
              autoFocus
            />
            {errors.title && (
              <p className="text-red-500 ">{errors.title.message}</p>
            )}
            <label htmlFor="note-description" className="font-bold">
              Note Description
            </label>

            <textarea
              cols="30"
              rows="6"
              className="w-full my-2 rounded-md py-2 px-2 border border-gray-400 "
              type="text"
              {...register("description", {
                required: {
                  value: true,
                  message: "Please enter note description",
                },
              })}
            ></textarea>
            {errors.description && (
              <p className="text-red-500 ">{errors.description.message}</p>
            )}
            <div>
              {editData ? (
                <button
                  type="submit"
                  className="bg-indigo-500 px-3 py-2 rounded-md"
                >
                  Edit
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-indigo-500 px-3 py-2 rounded-md"
                >
                  Add
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}

export default NotesForm;
