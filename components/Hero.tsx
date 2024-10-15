import Image from "next/image";
import hero from "../public/assets/images/hero.png";

const Hero = () => {
  return (
    <section className="relative w-full h-full">
      <Image src={hero} alt="hero" height={771} width={1500} />

      <div className="absolute lg:bottom-[120px] bottom-2 lg:pl-24 pl-4 lg:w-2/3">
        <h1 className="text-white font-medium lg:text-5xl text-3xl">Lorem ipsum dolor sit amet</h1>
        <p className="text-white text-xs lg:text-lg lg:mt-9 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
          velit nulla. In hac habitasse platea dictumst. Fusce non venenatis
          velit. Proin luctus malesuada mauris vitae mattis. Pellentesque
          iaculis elit lorem, et varius ipsum dictum. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac
          habitasse platea dictumst.
        </p>
      </div>
    </section>
  );
};

export default Hero;
