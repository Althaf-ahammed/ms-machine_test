import Image from "next/image";
import vacancies from "@/public/assets/images/vacancies.png";

const Vacancies = () => {
  return (
    <section className="relative">
      <Image src={vacancies} alt="vacancies" className="w-full h-auto" />
      <div className="absolute bottom-1/3 flex flex-col lg:flex-row text-white justify-between lg:mx-24 mx-4 space-y-6 lg:space-y-0">
        <div className="lg:mr-72">
          <h1 className="text-3xl lg:text-5xl font-medium mb-4 lg:mb-10">
            Let’s work Together
          </h1>

          <p className="text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur. Mattis cursus nulla ornare
            tristique euismod arcu tristique nisl id nibh. Viverra feugiat
            viverra. Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>

        <button className="bg-white hover:bg-gray-700 hover:text-white text-black font-bold text-sm lg:text-base rounded h-12 lg:h-20 w-full lg:w-60">
          View vacancies
        </button>
      </div>
    </section>
  );
};

export default Vacancies;
