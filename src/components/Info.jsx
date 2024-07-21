import React from "react";

export default function Info() {
  return (
    <div className="rounded-xl overflow-hidden">
      <div className="w-full h-[317px]">
        <img
          className="w-full h-full object-cover object-center"
          src="src/assets/profile-photo.jpeg"
          alt="logo"
        />
      </div>
      <div className="text-center">
        <h3 className="text-white font-bold text-2xl pt-4 ">Habib Josue</h3>
        <h4 className="text-[#F3BF99] text-xs font-normal pt-1">
          Frontend Developer
        </h4>
        <a className="text-[10px] text-[#F5F5F5] pt-6" href="">
          habibjosue.tech
        </a>
      </div>
      <div>
        <a href="">Email</a>
        <a href="">LinkedIn</a>
      </div>
    </div>
  );
}
