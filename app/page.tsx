import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Hope from "@/components/Hope";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Trust from "@/components/Trust";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Hope />
      <Benefits />
      <Services />
      <Process />
      <Team />
      <Trust />
      <CTA />
      <Footer />
    </>
  );
}
