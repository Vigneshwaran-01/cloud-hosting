import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./Component/Hero";
import ReviewsSection from "./Component/ReviewsSection";
import GPUCloud from "./Component/GPUCloud";
import ContactOptions from "./Component/ContactOptions";
import Cards, { BentoGridDemo } from "./Component/Cards";
import Features from "./Component/Cards";
import SupportSection from "./Component/SupportSection";
import AICloudFeatures from "./Component/Feature1";
import Footer from "./Component/Footer";
import NvidiaGpuSection from "./Component/Feacture2";
import HostingBanner from "./Component/HostingBanner";
import Navbar from "./Component/Navbar";

export default function Home() {
  return (
    <> 
    <Navbar />
     <HeroSection />
     <ReviewsSection />
     <GPUCloud />
     <ContactOptions />
      {/* <Cards /> */}
      <Features />
      <SupportSection />
      <AICloudFeatures />
      <NvidiaGpuSection />
      {/* <BentoGridDemo /> */}
      <HostingBanner />
      <Footer />
      </>
  
  );
}
