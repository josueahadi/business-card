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
        <h3 className="text-white font-bold text-2xl pt-6 ">Habib Josue</h3>
        <h4 className="text-[#F3BF99] text-sm font-normal pt-1">
          Frontend Developer
        </h4>
        <a className="text-[11px] text-[#F5F5F5] pt-6" href="">
          habibjosue.tech
        </a>
      </div>
      <div className="flex justify-center gap-6 py-6">
        <a
          className="text-[#374151] font-medium text-sm bg-white w-28 py-2 space-x-2 rounded-md text-center"
          href=""
        >
          <i class="fa-solid fa-envelope"></i>
          <span>Email</span>
        </a>
        <a
          className="text-white font-medium text-sm bg-[#5093E2] w-28 py-2 space-x-2 rounded-md text-center"
          href=""
        >
          <i class="fa-brands fa-linkedin"></i>
          <span>Linkedin</span>
        </a>
      </div>
    </div>
  );
}
