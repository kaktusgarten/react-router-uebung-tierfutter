import { NavLink } from "react-router";
export default function Nav() {
  return (
    <>
      <nav className="sticky top-0  p-5 flex gap-7 bg-white text-black border-b border-b-black">
        <div className="container m-auto">
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
        </div>
      </nav>
    </>
  );
}
