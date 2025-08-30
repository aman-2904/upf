import Footer from "@/components/Global/Footer";
import Headers from "@/components/Global/Headers";

import CTASection from "@/components/Home/CTASection";
import HeroSection from "@/components/Home/HeroSection";
import ServicesSection from "@/components/Home/ServicesSection";
import StatsSection from "@/components/Home/StatsSection";
import WhyChoose from "@/components/Home/WhyChoose";

export default function Home() {
  return (
    <>
    
    <Headers/>
    <HeroSection/>
    <ServicesSection/>
    <WhyChoose/>
    <StatsSection/>
    <CTASection/>
    <Footer/>
    </>
  );
}
