import Image from "next/image";
import BgImage from "@/public/assets/images/sec_4BG.png";
import cardImage from "@/public/assets/images/sec_5CardImage.png";
import { FaPlay } from "react-icons/fa";

const Section5 = () => {
  return (
    <section className="relative">
      <Image className="hidden lg:block" src={BgImage} alt="image" />
      <div className="lg:absolute bottom-24 md:flex justify-between lg:mx-24 mx-4 text-center lg:text-left">
        <div className="lg:py-5 lg:pr-32 w-full md:w-3/4">
          <h1 className="font-medium text-5xl mb-12">
            Lorem Ipsumdolor sit consectetur
          </h1>

          <p className="text-xl font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis velit nulla. In hac habitasse platea dictumst. Fusce non
            venenatis velit. Proin luctus malesuada mauris vitae mattis.
            Pellentesque iaculis elit lorem, et varius ipsum dictum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Donec mattis velit
            nulla. In hac habitasse platea dictumst. Fusce non venenatis velit.
            Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis
            elit lorem, et varius ipsum dictum.
          </p>
        </div>

        <div className="relative bg-white rounded-xl w-full md:w-2/4">
          <h2 className="py-5 pl-10 text-3xl font-medium">Lorem Ipsum?</h2>

          <Image className="rounded-lg px-2 pb-2" src={cardImage} alt="image" />

          <div className="absolute bottom-4 px-10">
            <h1 className="font-medium text-3xl">Lorem Ipsum</h1>

            <p className="font-normal text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis velit nulla. In hac habitasse platea dictumst. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>

            <button className="absolute -right-5 bottom-60 rounded-full bg-white lg:p-4 p-2">
              <FaPlay />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
