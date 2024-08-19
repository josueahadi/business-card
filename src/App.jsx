import React from "react";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="w-full md:h-screen md:w-[317px] mx-auto flex items-center justify-center">
      <main className="w-full md:h-[780px] bg-[#1A1B21] rounded-none md:rounded-xl flex flex-col">
        <Info />
        <About />
        <Interests />
        <div className="flex-grow pt-8 md:pt-0"></div>
        <Footer />
      </main>
    </div>
  );
}
