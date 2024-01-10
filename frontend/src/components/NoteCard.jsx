import React from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line, RiEditBoxLine } from "react-icons/ri";

function NoteCard({ note }) {
  return (
    <div className=" max-w-sm w-full p-5 rounded-md border border-gray-400 bg-white">
      <h1 className="text-2xl font-bold">{note.title}</h1>

      <div className="my-3 text-gray-500 ">{note.description}</div>
      <div className="flex justify-between">
        <div className="flex gap-x-2 items-center">
          <button>
            <RiDeleteBin6Line />
          </button>

          <Link to={`/notes/${note.id}`}>
            <RiEditBoxLine />
          </Link>
        </div>
        <select name="" id="">
          <option value="">Select Category</option>
          <option value="">Business</option>
          <option value="">Technologies</option>
          <option value="">Documentation</option>
          <option value="">Challenge</option>
        </select>
      </div>

      {/* <details className="dropdown dropdown-end z-[1]">
        <ul className="p-2 shadow menu dropdown-content z-[10] bg-base-100 rounded-box w-52">
          <li>
            <button name="miCuenta">Mi Cuenta</button>
          </li>

          <li>
            <button name="logout">Cerrar Sesión</button>
          </li>
        </ul>
      </details> */}
    </div>
  );
}

export default NoteCard;
