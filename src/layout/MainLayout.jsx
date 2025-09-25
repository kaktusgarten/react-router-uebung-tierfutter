import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function MainLayout() {
  return (
    <>
      <div className="">
        <div className="bg-white  m-auto container flex flex-col justify-between min-h-[100vh]">
          <Nav></Nav>

          <Header></Header>

          <main className=" p-5 flex-1">
            <Outlet></Outlet>
          </main>

          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
