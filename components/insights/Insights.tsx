"use client";
import { useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import Slider from "./Slider";
import { sliderImages } from "@/constants";

const Insights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliderImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === sliderImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="px-4 md:px-28 py-12 md:py-24">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-light text-2xl md:text-5xl">Latest Insights</h1>

        <div className="flex">
          <button
            className="rounded-full bg-[#F2F2F2] lg:p-4 p-2 mr-2"
            onClick={handlePrev}
          >
            <FaCaretLeft />
          </button>

          <button
            className="rounded-full bg-[#F2F2F2] lg:p-4 p-2"
            onClick={handleNext}
          >
            <FaCaretRight />
          </button>
        </div>
      </div>

      <Slider images={sliderImages} currentIndex={currentIndex} />
    </section>
  );
};

export default Insights;
