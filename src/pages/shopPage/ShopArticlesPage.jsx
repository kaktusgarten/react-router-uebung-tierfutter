import { Outlet, Link, NavLink } from "react-router";

export default function ArticlesPage() {
  return (
    <>
      <div className="pb-5">
        <h1 className="text-5xl">Articles Page</h1>
      </div>
      <div className="py-4 mb-5">
        <nav>
          <NavLink to="/articles" className="border p-2 mr-4">
            Info
          </NavLink>
          <NavLink to="/articles/overview" className="border p-2 mr-4">
            Übersicht
          </NavLink>
        </nav>
      </div>

      <Outlet></Outlet>
    </>
  );
}
