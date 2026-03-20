import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Multilingual from "@/components/Multilingual";
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
        <Multilingual />
        <PatientDemo />
        <Features />
        <Security />
        <CTA />

        {/* Quellenangaben */}
        <section className="bg-white py-10 border-t border-[#EDF2F2]">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#6B7D77] mb-4">
              Quellenangaben
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-1.5">
              <p className="text-xs text-[#6B7D77]">
                <sup className="font-semibold">1</sup> Irving et al., BMJ Open 2017 &mdash; Systematic review of consultation length in 67 countries
              </p>
              <p className="text-xs text-[#6B7D77]">
                <sup className="font-semibold">2</sup> Levy et al., JAMA Network Open 2018 &mdash; Patient nondisclosure of medically relevant information
              </p>
              <p className="text-xs text-[#6B7D77]">
                <sup className="font-semibold">3</sup> Gillum &amp; Meigs, JAMIA 2020 &mdash; Documentation error analysis
              </p>
              <p className="text-xs text-[#6B7D77]">
                <sup className="font-semibold">4</sup> NPR / Robert Wood Johnson Foundation / Harvard T.H. Chan School of Public Health
              </p>
              <p className="text-xs text-[#6B7D77]">
                <sup className="font-semibold">5</sup> Tai-Seale et al., Health Affairs 2017 &mdash; Desktop Medicine in primary care
              </p>
              <p className="text-xs text-[#6B7D77]">
                <sup className="font-semibold">6</sup> Marburger Bund Monitor 2024 &mdash; Befragung von 9.600+ &Auml;rzten
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
