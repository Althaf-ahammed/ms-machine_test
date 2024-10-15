import { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface SliderProps {
  images: {
    id: string;
    date: string;
    text: string;
    imageUrl: StaticImageData;
  }[];
  currentIndex: number;
}

const Slider: FC<SliderProps> = ({ images, currentIndex }) => {
  const visibleImages = images.slice(currentIndex, currentIndex + 3);

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-16 mb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {visibleImages.map((image) => (
          <div key={image.id} className="relative w-full h-full">
            <Image
              src={image.imageUrl}
              alt={image.date}
              className="relative rounded-lg object-cover"
              style={{ height: "100%", width: "100%" }}
            />

            <div className="absolute bottom-0 mt-4 pl-5">
              <h2 className="text-white text-base font-normal">{image.date}</h2>

              <p className="text-white text-xl md:text-3xl font-medium mt-2">
                {image.text}
              </p>

              <a className="text-white underline cursor-pointer my-4">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
