import Footer from "@/components/Global/Footer";
import Headers from "@/components/Global/Headers";

import CTASection from "@/components/Home/CTASection";
import Extra from "@/components/Home/Extra";
import HeroSection from "@/components/Home/HeroSection";

import ServicesSection from "@/components/Home/ServicesSection";
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
      <section id="services">
        <ServicesSection />
      </section>
      <section id="about">
        <WhyChoose />
      </section>
      <Extra />
     
      <section id="stats">
        <StatsSection />
      </section>
      <Testimonials />
      <section id="contact">
        <CTASection />
      </section>
      <Footer />
    </>
  );
}
