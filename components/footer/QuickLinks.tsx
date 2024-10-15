import { footerLinks } from "@/constants";

const QuickLinks = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:border-t-[1px] border-[#FFFFFF1C] w-full lg:w-2/4 lg:justify-between pl-5 lg:pl-24 py-8 lg:py-12">
      <h1 className="text-white text-lg lg:text-2xl font-medium mb-4 lg:mb-0">
        Quick Links
      </h1>

      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
        {footerLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            className="text-white text-sm lg:text-base"
          >
            {link.title}
          </a>
        ))}
      </div>
    </section>
  );
};

export default QuickLinks;
