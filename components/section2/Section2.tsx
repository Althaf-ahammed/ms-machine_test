import Image from "next/image";
import React from "react";
import section2Image from "@/public/assets/images/sec_2.png";
import { FaPlay } from "react-icons/fa";
import SectionContent from "./SectionContent";

const Section2 = () => {
  return (
    <section>
      <div className=" relative lg:p-24 p-6">
        <Image src={section2Image} alt="video" />
        <div className="absolute lg:bottom-1/3 bottom-6 lg:pl-24 pl-2 lg:block">
          <button className="rounded-full bg-white lg:p-4 p-2">
            <FaPlay />
          </button>

          <h1 className="text-white lg:text-4xl text-lg my-2 lg:my-9">
            Lorem ipsum dolor sit amet.
          </h1>

          <p className="text-[#FFFFFFCC] lg:text-2xl text-sm">Sanchez Alexis</p>

          <p className="text-[#FFFFFFCC] lg:text-lg text-xs">
            CEO & Founder of Demo
          </p>
        </div>
      </div>

      <SectionContent />
    </section>
  );
};

export default Section2;
