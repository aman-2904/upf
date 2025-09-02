
import About from "@/components/Home/About";


import DeltaPartner from "@/components/Home/DeltaPartner";

import HeroSection from "@/components/Home/HeroSection";
import Services from "@/components/Home/Services";


import Solutions from "@/components/Home/Solutions";

import Testimonials from "@/components/Home/Testemonials";


export default function Home() {
  return (
    <>


      <section id="home">
        <HeroSection />
      </section>
      <About />
           <Solutions />
      <Services />
      <DeltaPartner />
 
      <Testimonials />

    </>
  );
}
