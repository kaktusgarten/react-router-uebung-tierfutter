import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function MainLayout() {
  return (
    <>
      <Nav></Nav>

      <div className="flex flex-col justify-between min-h-[100vh]">
        <Header></Header>

        <main className="m-auto container p-5 flex-1 bg-white">
          <Outlet></Outlet>
        </main>

        <Footer></Footer>
      </div>
    </>
  );
}
