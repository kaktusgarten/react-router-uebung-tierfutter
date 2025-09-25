import { NavLink } from "react-router";
export default function Nav() {
  return (
    <>
      <nav className="border p-5 flex gap-7 bg-gray-500 text-white">
        <ul className="flex gap-5">
          <li>
            <NavLink to="/" className="p-1">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="p-1">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/articles" className="p-1">
              Articles
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin" className="p-1">
              Admin
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
