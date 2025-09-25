import { Link, NavLink, Outlet } from "react-router";
import { useNavigate } from "react-router";

export default function AdminLayout() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-black">
        <div className="container border m-auto p-5 bg-white">
          <header>
            <div className="pb-5">
              <h1 className="text-3xl mb-5">
                ADMIN PAGE - Alles was der Admin braucht!
              </h1>
            </div>
          </header>

          <nav className="flex gap-1">
            <NavLink to="/admin" className="p-1">
              Admin Home
            </NavLink>
            <NavLink to="/admin/settings" className="p-1">
              Settings
            </NavLink>
            <NavLink to="/admin/dashboard" className="p-1">
              Dashboard
            </NavLink>

            <NavLink to="/" className="p-1 ml-6">
              Logout
            </NavLink>
            <button
              onClick={() => navigate(-1)}
              className="ml-7 text-sm text-blue-600 hover:underline"
            >
              ← Go Back
            </button>
          </nav>

          <main className="border p-5">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
