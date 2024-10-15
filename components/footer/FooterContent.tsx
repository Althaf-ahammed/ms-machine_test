import Image from "next/image";
import footer1 from "@/public/assets/icons/footer1.png";
import footer2 from "@/public/assets/icons/footer2.png";
import footer3 from "@/public/assets/icons/footer3.png";

const FooterContent = () => {
  return (
    <section className="flex w-full border-t-[1px] border-[#FFFFFF1C] text-white">
      <div className="pt-28 px-20 border-r-[1px] border-[#FFFFFF1C]">
        <div className="flex py-5 pl-10 pr-24 mb-5 bg-[#FFFFFF08]">
          <Image src={footer1} alt="footer" />
          <p>Lorem ipsum dolor sit amet</p>
        </div>

        <div className="flex py-5 pl-10 pr-24 mb-5 bg-[#FFFFFF08]">
          <Image src={footer2} alt="footer" />
          <p>Lorem ipsum dolor sit amet</p>
        </div>

        <div className="flex py-5 pl-10 pr-24 bg-[#FFFFFF08]">
          <Image src={footer3} alt="footer" />
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>

      <div className="pt-28 px-20 border-r-[1px] border-[#FFFFFF1C] pb-12">
        <div className="flex py-5 pl-10 pr-28 mb-5 bg-[#FFFFFF08]">
          <p>Lorem</p>
        </div>

        <div className="flex py-5 pl-10 pr-28 mb-5 bg-[#FFFFFF08]">
          <p>Ipsum</p>
        </div>

        <div className="flex py-5 pl-10 pr-28 mb-5 bg-[#FFFFFF08]">
          <p>Consectetur</p>
        </div>

        <div className="flex py-5 pl-10 pr-28 bg-[#FFFFFF08]">
          <p>Efficitur</p>
        </div>
      </div>

      <div className="pt-28 px-20">
        <h1 className="text-2xl font-medium mb-8">Contact Us</h1>

        <p className="text-base font-normal mb-5">
          Lorem Ipsum, Iso lorem,Iso Lorem Posum
        </p>

        <p className="text-base font-normal mb-5">+91 00000 00000</p>

        <p className="text-base font-normal mb-5">info@demo.com</p>

        <p className="text-base font-normal mb-5">Follow us on</p>
      </div>
    </section>
  );
};

export default FooterContent;
