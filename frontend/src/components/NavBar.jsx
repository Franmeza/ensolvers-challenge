import { Link } from "react-router-dom";
import { useNotes } from "../context/NotesContext";

function NavBar() {
  const { openModal } = useNotes();

  return (
    <nav className="bg-white my-3 flex justify-between py-5 px-10 rounded-lg ">
      <Link to="/">
        <h1 className="text-2xl font-bold cursor-pointer"> Notes APP</h1>
      </Link>

      <ul className="flex items-center gap-x-2 cursor-pointer">
        <li>
          <Link to="/"> Business</Link>
        </li>
        <li>
          <Link
            to="/notes/archived"
            className="bg-indigo-500 px-4 py-1 rounded-md "
          >
            Technologies
          </Link>
        </li>
        <li>
          <Link
            to="/notes/active"
            className="bg-indigo-500 px-4 py-1 rounded-md "
          >
            Documentation
          </Link>
        </li>
        <li>
          <Link
            to="/notes/active"
            className="bg-indigo-500 px-4 py-1 rounded-md "
          >
            Challenge
          </Link>
        </li>
      </ul>
      <div onClick={() => openModal()}>Create Note</div>
    </nav>
  );
}

export default NavBar;
