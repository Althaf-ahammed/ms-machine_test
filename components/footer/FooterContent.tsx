import Image from "next/image";
import footer1 from "@/public/assets/icons/footer1.png";
import footer2 from "@/public/assets/icons/footer2.png";
import footer3 from "@/public/assets/icons/footer3.png";

const FooterContent = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full lg:border-t-[1px] border-[#FFFFFF1C] text-white">
      <div className="pt-8 lg:pt-28 px-5 lg:px-20 lg:border-r-[1px] border-[#FFFFFF1C]">
        <div className="flex py-3 lg:py-5 pl-3 lg:pl-10 pr-5 lg:pr-24 mb-5 bg-[#FFFFFF08]">
          <Image src={footer1} alt="footer" />

          <p className="ml-4">Lorem ipsum dolor sit amet</p>
        </div>

        <div className="flex py-3 lg:py-5 pl-3 lg:pl-10 pr-5 lg:pr-24 mb-5 bg-[#FFFFFF08]">
          <Image src={footer2} alt="footer" />

          <p className="ml-4">Lorem ipsum dolor sit amet</p>
        </div>

        <div className="flex py-3 lg:py-5 pl-3 lg:pl-10 pr-5 lg:pr-24 bg-[#FFFFFF08]">
          <Image src={footer3} alt="footer" />

          <p className="ml-4">Lorem ipsum dolor sit amet</p>
        </div>
      </div>

      <div className="pt-8 lg:pt-28 px-5 lg:px-20 lg:border-r-[1px] border-[#FFFFFF1C] pb-8 lg:pb-12">
        <div className="py-3 lg:py-5 pl-3 lg:pl-10 pr-8 lg:pr-28 mb-5 bg-[#FFFFFF08]">
          <p>Lorem</p>
        </div>

        <div className="py-3 lg:py-5 pl-3 lg:pl-10 pr-8 lg:pr-28 mb-5 bg-[#FFFFFF08]">
          <p>Ipsum</p>
        </div>

        <div className="py-3 lg:py-5 pl-3 lg:pl-10 pr-8 lg:pr-28 mb-5 bg-[#FFFFFF08]">
          <p>Consectetur</p>
        </div>

        <div className="py-3 lg:py-5 pl-3 lg:pl-10 pr-8 lg:pr-28 bg-[#FFFFFF08]">
          <p>Efficitur</p>
        </div>
      </div>

      <div className="pt-8 lg:pt-28 px-5 lg:px-20">
        <h1 className="text-xl lg:text-2xl font-medium mb-4 lg:mb-8">
          Contact Us
        </h1>

        <p className="text-sm lg:text-base font-normal mb-4 lg:mb-5">
          Lorem Ipsum, Iso lorem, Iso Lorem Posum
        </p>
        <p className="text-sm lg:text-base font-normal mb-4 lg:mb-5">
          +91 00000 00000
        </p>

        <p className="text-sm lg:text-base font-normal mb-4 lg:mb-5">
          info@demo.com
        </p>

        <p className="text-sm lg:text-base font-normal mb-4 lg:mb-5">
          Follow us on
        </p>
      </div>
    </section>
  );
};

export default FooterContent;
