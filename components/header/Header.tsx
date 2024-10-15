import React from "react";
import logo from "@/public/assets/icons/logo-icon.png";
import NavBar from "./NavBar";
import Image from "next/image";

const Header = () => {
  return (
    <header className="absolute z-10 top-0 w-full flex items-center justify-between lg:px-20 lg:py-10 px-2 py-2 ">
      <div>
        <Image src={logo} alt="Logo" width={130} height={40} />
      </div>
      <nav>
        <NavBar />
      </nav>
      <div>
        <button className="bg-white hover:bg-gray-700 hover:text-white text-black font-bold lg:py-2 lg:px-4 py-1 px-2 text-sm lg:text-base rounded  ">
          Contact us
        </button>
      </div>
    </header>
  );
};

export default Header;
