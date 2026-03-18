import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import Security from "@/components/Security";
import PatientDemo from "@/components/PatientDemo";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <PatientDemo />
        <Features />
        <Security />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
