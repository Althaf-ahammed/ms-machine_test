import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/Hero";
import Insights from "@/components/insights/Insights";
import Section2 from "@/components/section2/Section2";
import Section3 from "@/components/section3/Section3";
import Section4 from "@/components/section4/Section4";
import Section5 from "@/components/section5/Section5";
import Statistics from "@/components/Statistics";
import Vacancies from "@/components/vacancies/Vacancies";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <Section2 />
      <Section3 />
      <Statistics />
      <Section4 />
      <Section5 />
      <Insights />
      <Vacancies />
      <Footer />
    </div>
  );
}
