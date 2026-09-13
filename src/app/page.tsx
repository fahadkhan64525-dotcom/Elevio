import Hero from "@/components/hero/Hero";
import About from "@/components/layout/About";
import Team from "@/components/team/Team";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import Services from "@/components/services/Services";
import DesignProcess from "@/components/process/DesignProcess";
import BeforeAfter from "@/components/comparison/BeforeAfter";
import WhyElevio from "@/components/why/WhyElevio";
import Testimonials from "@/components/testimonials/Testimonials";
import ExecutedProjects from "@/components/clients/ExecutedProjects";
import PortfolioCTA from "@/components/cta/PortfolioCTA";
import Contact from "@/components/contact/Contact";
import MapSection from "@/components/map/MapSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Team />
      <About />
      <Services />
      <PortfolioGrid />
      <DesignProcess />
      <BeforeAfter />
      <WhyElevio />
      <Testimonials />
      <ExecutedProjects />
      <PortfolioCTA />
      <Contact />
      <MapSection />
    </>
  );
}
