import Card from "../ui/Card";

const Section4 = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12 md:py-16 lg:py-28">
      <div className="text-center md:text-left mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-4">Lorem Ipsum</h1>
        <p className="text-lg md:text-xl font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
          velit nulla. In hac habitasse platea dictumst. Fusce non venenatis
          velit. Proin luctus malesuada mauris vitae mattis. Pellentesque
          iaculis elit lorem, et varius ipsum dictum.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mt-16">
        <Card
          index={"01"}
          title={"Lorem ipsum dolor sit amet, consectetur"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue."
          }
          className="hover:bg-[#002A3A] hover:text-white"
        />
        <Card
          index={"02"}
          title={"Lorem ipsum dolor sit amet, consectetur"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue."
          }
          className="hover:bg-[#002A3A] hover:text-white"
        />
        <Card
          index={"03"}
          title={"Lorem ipsum dolor sit amet, consectetur"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue."
          }
          className="hover:bg-[#002A3A] hover:text-white"
        />
      </div>
    </section>
  );
};

export default Section4;
