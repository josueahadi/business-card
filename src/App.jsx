import React from "react";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";

export default function App() {
  return (
    <div className="w-full h-screen mx-auto bg-[#23252C] flex items-center justify-center">
      <main className="w-[317px] h-[780px] mx-auto bg-[#1A1B21] rounded-xl">
        <Info />
        <About />
        <Interests />
      </main>
    </div>
  );
}
