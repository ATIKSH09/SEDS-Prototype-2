import React from "react";

function Navbar() {
  return (
    <div
      className="flex md:justify-center sm:justify-center top-0 gap-x-5 fixed w-full bg-black p-3 pr-16 text-[#EEEEE6] justify-between
    items-center"
    >
      <div className="logo">
        <img
        className="w-[10vw]"
          src="https://seds-bphc.vercel.app/assets/images/seds_logo_w.png"
          alt="Logo"
        />
      </div>

      <div className="navs  flex gap-x-10 md:hidden font-android_7 font-custom text-3xl">
        <a className=" hover:font-extrabold" href="https://github.com/ATIKSH09">
          Hyperion
        </a>
        <a className=" hover:font-extrabold" href="https://github.com/ATIKSH09">
          Janus
        </a>
        <a className=" hover:font-extrabold" href="https://github.com/ATIKSH09">
          Artemis
        </a>
        <a className=" hover:font-extrabold" href="https://github.com/ATIKSH09">
          Archangel
        </a>
      </div>
    </div>
  );
}

export default Navbar;
