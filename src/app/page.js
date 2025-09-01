import Footer from "@/components/Global/Footer";
import Headers from "@/components/Global/Headers";
import About from "@/components/Home/About";

import CTASection from "@/components/Home/CTASection";
import DeltaPartner from "@/components/Home/DeltaPartner";
import Extra from "@/components/Home/Extra";
import Extra1 from "@/components/Home/Extra1";
import HeroSection from "@/components/Home/HeroSection";
import Services from "@/components/Home/Services";

import ServicesSection from "@/components/Home/ServicesSection";
import Solutions from "@/components/Home/Solutions";
import StatsSection from "@/components/Home/StatsSection";
import Testimonials from "@/components/Home/Testemonials";
import WhyChoose from "@/components/Home/WhyChoose";

export default function Home() {
  return (
    <>

      <Headers />
      <section id="home">
        <HeroSection />
      </section>
      <About />
           <Solutions />
      <Services />
      <DeltaPartner />
 
      <Testimonials />
      <Footer />
    </>
  );
}
