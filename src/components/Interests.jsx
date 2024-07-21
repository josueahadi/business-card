import React from "react";

export default function Interests() {
  return (
    <div className="flex items-center justify-between bg-[#21222A] px-5 py-8">
      <div className="flex items-center gap-1">
        <img className="w-7" src="src/assets/react-icon-small.png" alt="logo" />
        <h3 className="font-bold text-center text-[#61DAFB] text-xl">
          ReactFacts
        </h3>
      </div>
      <h4 className="text-[#DEEBF8] text-base font-semibold">
        React Course - Project 1
      </h4>
    </div>
  );
}
