import { Link } from "react-router-dom";
import { useNotes } from "../context/NotesContext";
import { useState } from "react";

function NavBar() {
  const { openModal, filterNotes, getNotes } = useNotes();
  const [activeCategory, setActiveCategory] = useState(null);

  const categoryStyles = {
    Business: "bg-teal-500 rounded-md px-2 py-1 text-white",
    Technologies: "bg-teal-500 rounded-md px-2 py-1 text-white",
    Documentation: "bg-teal-500 rounded-md px-2 py-1 text-white",
    Challenge: "bg-teal-500 rounded-md px-2 py-1 text-white",
  };

  const handleFilterNotes = (category) => {
    filterNotes(category);
    setActiveCategory(category);
  };

  return (
    <nav className="bg-white my-3 flex justify-between py-5 px-10 rounded-lg ">
      <Link to="/">
        <h1 onClick={getNotes} className="text-2xl font-bold cursor-pointer">
          Notes APP
        </h1>
      </Link>

      <ul className="flex items-center gap-x-2 cursor-pointer">
        {Object.keys(categoryStyles).map((category) => (
          <li
            key={category}
            onClick={() => handleFilterNotes(category)}
            className={
              activeCategory === category ? categoryStyles[category] : null
            }
          >
            {category}
          </li>
        ))}
      </ul>
      <div
        className="flex font-bold cursor-pointer items-center"
        onClick={openModal}
      >
        Create Note
      </div>
    </nav>
  );
}

export default NavBar;
