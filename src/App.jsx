import React from "react";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="w-full h-screen mx-auto bg-[#23252C] flex items-center justify-center">
      <main className="w-[317px] h-[780px] mx-auto bg-[#1A1B21] rounded-xl flex flex-col">
        <Info />
        <About />
        <Interests />
        <div className="flex-grow"></div>
        <Footer />
      </main>
    </div>
  );
}
