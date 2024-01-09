import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <Link to="/">
        <h1 className="text-2xl font-bold"> Notes APP</h1>
      </Link>
      <ul className="flex gap-x-2">
        <li>
          <Link to="/" className="bg-indigo-500 px-4 py-1 rounded-md">
            Notes
          </Link>
        </li>
        <li>
          <Link to="/add-note">Create Note</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
