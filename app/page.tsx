import Hero from "@/components/Hero";
import Hope from "@/components/Hope";
import Support from "@/components/Support";
import Benefits from "@/components/Benefits";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
// import Services from "@/components/Services";
import Team from "@/components/Team";
import Trust from "@/components/Trust";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Hope />
      <Support />
      <Benefits />
      {/* <Services /> */}
      <Process />
      <Team />
      <Trust />
      <CTA />
      <Footer />
    </>
  );
}
