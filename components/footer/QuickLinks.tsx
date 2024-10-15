import { footerLinks } from "@/constants";

const QuickLinks = () => {
  return (
    <section className="flex border-t-[1px] border-[#FFFFFF1C] w-2/4 justify-between pl-24 py-12 ">
      <h1 className="text-white text-2xl font-medium">Qucik Links</h1>
      {footerLinks.map((link) => (
        <a key={link.id} href={link.url} className="text-white ">
          {link.title}
        </a>
      ))}
    </section>
  );
};

export default QuickLinks;
