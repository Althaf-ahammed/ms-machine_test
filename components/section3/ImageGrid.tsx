import { images } from "@/constants";
import Image from "next/image";

const ImageGrid = () => {
  return (
    <section className="container mx-auto p-6">
      <div className="columns-1 sm:columns-2 lg:columns-2 gap-4 space-y-4">
        {images.map((image) => (
          <>
            <div key={image.id} className="relative mb-4 break-inside-avoid">
              <div className="mb-4">
                <Image
                  src={image.imageUrl}
                  alt="image"
                  className="rounded-lg w-full h-auto"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h2 className="text-white lg:text-3xl text-lg font-medium">{image.title}</h2>
                <p className="text-white font-light lg:text-lg  text-sm mt-2">{image.text}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default ImageGrid;
