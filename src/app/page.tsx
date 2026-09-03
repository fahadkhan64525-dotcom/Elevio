import Hero from "@/components/hero/Hero";
import About from "@/components/layout/About";
import CinematicScroll from "@/components/cinematic/CinematicScroll";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import Showcase from "@/components/showcase/Showcase";
import Services from "@/components/services/Services";
import DesignProcess from "@/components/process/DesignProcess";
import BeforeAfter from "@/components/comparison/BeforeAfter";
import WhyElevio from "@/components/why/WhyElevio";
import Testimonials from "@/components/testimonials/Testimonials";
import PortfolioCTA from "@/components/cta/PortfolioCTA";
import Contact from "@/components/contact/Contact";
import MapSection from "@/components/map/MapSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <CinematicScroll />
      <PortfolioGrid />
      <Showcase />
      <Services />
      <DesignProcess />
      <BeforeAfter />
      <WhyElevio />
      <Testimonials />
      <PortfolioCTA />
      <Contact />
      <MapSection />
    </>
  );
}
