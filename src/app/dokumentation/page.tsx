import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Automatische Dokumentation f\u00fcr Arztpraxen \u2013 ICD-10, EBM & Arztbrief",
  description:
    "Von der Anamnese zur fertigen Dokumentation in 30\u201390 Sekunden. Automatische ICD-10-Kodierung, EBM-Erkennung, Arztbrief-Generierung und PVS-Integration. Bis zu 7.000\u201315.000\u20ac Umsatzpotenzial durch vollst\u00e4ndige Kodierung.",
  alternates: {
    canonical: "https://www.anavio.de/dokumentation",
  },
  openGraph: {
    title: "Automatische Dokumentation f\u00fcr Arztpraxen \u2013 anavio",
    description:
      "Dokumentation in 30\u201390 Sekunden statt 4\u20138 Minuten. ICD-10, EBM und Arztbrief automatisch.",
    url: "https://www.anavio.de/dokumentation",
  },
};

export default function Dokumentation() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="bg-[#F7FAFA] pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#0C8A72] mb-4">
              DOKUMENTATION
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A3D35] leading-tight max-w-3xl mx-auto">
              Von der Anamnese zur fertigen Dokumentation
            </h1>
            <p className="mt-6 text-lg text-[#6B7D77] max-w-2xl mx-auto leading-relaxed">
              anavio hat bereits alle Patienteninformationen aus der
              Vorab-Anamnese. Erg&auml;nzen Sie per Klick und kurzer Sprach-Notiz
              &ndash; die Dokumentation erledigt sich von selbst.
            </p>
            <a
              href="/#demo"
              className="inline-block mt-8 px-8 py-4 bg-[#0C8A72] text-white font-semibold rounded-xl hover:bg-[#0A7A65] transition-colors"
            >
              Demo anfragen
            </a>
          </div>
        </section>

        {/* ── Das Problem ── */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D35] text-center mb-6">
              Die Dokumentationslast in Zahlen
            </h2>
            <p className="text-center text-[#6B7D77] text-lg mb-14 max-w-2xl mx-auto">
              Dokumentation ist der gr&ouml;&szlig;te Zeitfresser im Praxisalltag &ndash;
              und eine der Hauptursachen f&uuml;r Burnout.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  value: "2\u20133h",
                  label: "pro Tag f\u00fcr Dokumentation",
                  source: "ZiPP 2023",
                  color: "#E84C3D",
                },
                {
                  value: "78%",
                  label: "der \u00c4rzte durch Doku-Last belastet",
                  source: "MB-Monitor 2022",
                  color: "#F5A623",
                },
                {
                  value: "45%",
                  label: "dokumentieren nach Feierabend",
                  source: "Hartmannbund 2023",
                  color: "#2C5F7C",
                },
                {
                  value: "7\u201315K\u20ac",
                  label: "Umsatzverlust/Jahr durch Unterkodierung",
                  source: "ZiPP 2023",
                  color: "#0C8A72",
                },
              ].map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-2xl border border-[#EDF2F2] bg-white p-6 shadow-sm text-center"
                >
                  <p
                    className="text-3xl font-bold mb-2"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-sm text-[#6B7D77] mb-2">{stat.label}</p>
                  <p className="text-[10px] text-[#6B7D77]/60">{stat.source}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── So funktioniert's ── */}
        <section className="bg-[#F7FAFA] py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D35] text-center mb-4">
              Dokumentation, die sich von selbst schreibt
            </h2>
            <p className="text-center text-[#6B7D77] text-lg mb-14 max-w-2xl mx-auto">
              Die Anamnese liefert die Basis. Sie erg&auml;nzen nur noch,
              was der Patient nicht selbst berichten kann.
            </p>

            {/* Flow Steps */}
            <div className="relative mx-auto max-w-3xl">
              <div className="absolute left-6 top-6 bottom-6 hidden w-0.5 bg-[#10A88A]/30 md:block" />

              <div className="space-y-10">
                {[
                  {
                    number: 1,
                    title: "Anamnese-Daten vorhanden",
                    description:
                      "Die Vorab-Anamnese hat bereits Symptome, Medikation, Vorgeschichte und Begleitsymptome strukturiert erfasst \u2014 vor dem Termin oder vor Ort im Wartezimmer.",
                    badge: "Automatisch",
                    badgeColor: "#27AE60",
                  },
                  {
                    number: 2,
                    title: "Behandlung mit Dashboard",
                    description:
                      "W\u00e4hrend der Untersuchung: Befunde per Klick \u00fcber Organsystem-Templates erfassen. Checkbox statt Freitext \u2014 schnell und vollst\u00e4ndig.",
                    badge: "1\u20132 Min",
                    badgeColor: "#0C8A72",
                  },
                  {
                    number: 3,
                    title: "Kurze Erg\u00e4nzung per Sprache",
                    description:
                      "Nach dem Termin: 20\u201330 Sekunden Voice-Notiz mit Ihren Beobachtungen und Therapieentscheidungen. anavio transkribiert und integriert automatisch.",
                    badge: "20\u201330 Sek",
                    badgeColor: "#F5A623",
                  },
                  {
                    number: 4,
                    title: "Fertige Dokumentation",
                    description:
                      "anavio generiert den vollst\u00e4ndigen Verlaufseintrag, schl\u00e4gt ICD-10-Codes und EBM-Ziffern vor und erstellt bei Bedarf den Arztbrief. Sie pr\u00fcfen und geben frei.",
                    badge: "Automatisch",
                    badgeColor: "#27AE60",
                  },
                  {
                    number: 5,
                    title: "\u00dcbertragung ans PVS",
                    description:
                      "Verlaufseintrag, Diagnosen und Leistungsziffern werden nahtlos an Ihr PVS \u00fcbertragen \u2014 \u00fcber GDT-Schnittstelle oder PDF-Export.",
                    badge: "1 Klick",
                    badgeColor: "#2C5F7C",
                  },
                ].map((step) => (
                  <div key={step.number} className="flex gap-6">
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0C8A72] text-lg font-bold text-white shadow-md">
                      {step.number}
                    </div>
                    <div className="pt-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-lg font-bold text-[#0A3D35]">
                          {step.title}
                        </h3>
                        <span
                          className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                          style={{
                            color: step.badgeColor,
                            backgroundColor: `${step.badgeColor}15`,
                          }}
                        >
                          {step.badge}
                        </span>
                      </div>
                      <p className="mt-1 text-[#6B7D77]">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Time comparison */}
            <div className="mt-20 overflow-hidden rounded-2xl border border-[#EDF2F2] shadow-sm max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-[#EDF2F2] p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7D77]">
                    OHNE ANAVIO
                  </p>
                  <p className="mt-3 text-2xl font-bold text-[#6B7D77]">
                    4&ndash;8 Min / Patient<sup className="text-xs ml-1">*</sup>
                  </p>
                  <p className="mt-2 text-sm text-[#6B7D77]">
                    Manuelle Dokumentation, Kodierung &amp; Nacharbeit
                  </p>
                </div>
                <div className="bg-[#0C8A72] p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
                    MIT ANAVIO
                  </p>
                  <p className="mt-3 text-2xl font-bold text-white">
                    30&ndash;90 Sek / Patient
                  </p>
                  <p className="mt-2 text-sm text-white/80">
                    Pr&uuml;fen und Freigeben statt Schreiben
                  </p>
                </div>
              </div>
              <div className="border-t border-[#EDF2F2] bg-white px-6 py-4">
                <p className="text-[11px] text-[#6B7D77] leading-relaxed">
                  <span className="font-semibold">* Rechnung:</span> Deutsche Haus&auml;rzte verbringen 2&ndash;3h/Tag mit Dokumentation bei 40&ndash;60 Patienten (ZiPP 2023/2024) = 3&ndash;4,5 Min/Patient.
                  Dazu kommen durchschnittlich 1,4h Nacharbeit nach Feierabend (Sinsky et al., Ann. Int. Med. 2016) sowie Kodierung und Arztbriefe.
                </p>
              </div>
            </div>

            {/* Konservative Hochrechnung Doku */}
            <div className="mt-14 max-w-3xl mx-auto">
              <h3 className="text-center text-xl sm:text-2xl font-bold text-[#0A3D35] mb-3">
                Selbst bei nur 2 Minuten Ersparnis pro Patient
              </h3>
              <p className="text-center text-[#6B7D77] mb-10 max-w-xl mx-auto">
                Wenn anavio Ihnen pro Patient nur 2 Minuten Dokumentationszeit spart &ndash; rechnen Sie selbst:
              </p>

              <div className="rounded-2xl border border-[#EDF2F2] bg-white shadow-sm overflow-hidden">
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#F7FAFA] flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-[#6B7D77]">1</span>
                    </div>
                    <div className="flex-1 flex items-center justify-between flex-wrap gap-2">
                      <span className="text-[#6B7D77]">Doku-Ersparnis pro Patient</span>
                      <span className="text-lg font-bold text-[#0A3D35]">2 Minuten</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#F7FAFA] flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-[#6B7D77]">&times;</span>
                    </div>
                    <div className="flex-1 flex items-center justify-between flex-wrap gap-2">
                      <span className="text-[#6B7D77]">Patienten pro Tag</span>
                      <span className="text-lg font-bold text-[#0A3D35]">50 Patienten</span>
                    </div>
                  </div>

                  <div className="h-px bg-[#EDF2F2]" />

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#E6F5F0] flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-[#0C8A72]">=</span>
                    </div>
                    <div className="flex-1 flex items-center justify-between flex-wrap gap-2">
                      <span className="text-[#0A3D35] font-medium">Pro Tag</span>
                      <span className="text-xl font-bold text-[#0C8A72]">1 Stunde 40 Min</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#E6F5F0] flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-[#0C8A72]">=</span>
                    </div>
                    <div className="flex-1 flex items-center justify-between flex-wrap gap-2">
                      <span className="text-[#0A3D35] font-medium">Pro Woche</span>
                      <span className="text-xl font-bold text-[#0C8A72]">8+ Stunden</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#0C8A72] flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-white">=</span>
                    </div>
                    <div className="flex-1 flex items-center justify-between flex-wrap gap-2">
                      <span className="text-[#0A3D35] font-semibold">Pro Jahr</span>
                      <span className="text-2xl font-bold text-[#0C8A72]">&uuml;ber 400 Stunden</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F7FAFA] border-t border-[#EDF2F2] px-6 sm:px-8 py-4 text-center">
                  <p className="text-sm text-[#6B7D77]">
                    Das entspricht <span className="font-semibold text-[#0C8A72]">einem vollen Arbeitstag pro Woche</span> &ndash;
                    der nicht mehr f&uuml;r Dokumentation draufgeht.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D35] text-center mb-14">
              Was anavio automatisch f&uuml;r Sie erledigt
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Verlaufseintrag",
                  desc: "Aus Anamnese-Daten, Klick-Befunden und Voice-Notiz wird ein vollst\u00e4ndiger, medizinisch korrekter Verlaufseintrag generiert.",
                  icon: (
                    <svg className="w-6 h-6 text-[#0C8A72]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                },
                {
                  title: "ICD-10-Kodierung",
                  desc: "Automatische Diagnosevorschl\u00e4ge basierend auf der Symptomkonstellation. Haupt- und Nebendiagnosen werden erkannt.",
                  icon: (
                    <svg className="w-6 h-6 text-[#0C8A72]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  ),
                },
                {
                  title: "EBM-Erkennung",
                  desc: "Erbrachte Leistungen werden automatisch erkannt und vorgemerkt. Keine vergessenen Abrechnungsziffern mehr.",
                  icon: (
                    <svg className="w-6 h-6 text-[#0C8A72]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  title: "Arztbrief",
                  desc: "Bei \u00dcberweisung oder Entlassung: Automatisch generierter Arztbrief mit allen relevanten Informationen. Template-basiert und individualisiert.",
                  icon: (
                    <svg className="w-6 h-6 text-[#0C8A72]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                },
                {
                  title: "Voice-Notiz",
                  desc: "Kurze Erg\u00e4nzung per Sprache nach dem Termin. anavio transkribiert und integriert Ihre Beobachtungen automatisch in den Verlaufseintrag.",
                  icon: (
                    <svg className="w-6 h-6 text-[#0C8A72]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  ),
                },
                {
                  title: "PVS-Integration",
                  desc: "Nahtlose \u00dcbertragung an Ihr Praxisverwaltungssystem via GDT-Schnittstelle. Kompatibel mit CGM, medatixx, Dampsoft u.a.",
                  icon: (
                    <svg className="w-6 h-6 text-[#0C8A72]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  ),
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-[#EDF2F2] bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#E6F5F0] flex items-center justify-center mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0A3D35] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#6B7D77] leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Kernprinzip ── */}
        <section className="bg-[#F7FAFA] py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="w-12 h-1 bg-[#0C8A72] mx-auto mb-8 rounded-full" />
              <p className="text-3xl md:text-4xl font-bold text-[#0A3D35] leading-snug">
                &bdquo;Keine Pajama Time mehr.&ldquo;
              </p>
              <p className="mt-6 text-lg text-[#6B7D77] leading-relaxed">
                45% der Haus&auml;rzte dokumentieren regelm&auml;&szlig;ig nach Feierabend.
                Mit anavio ist die Dokumentation fertig, bevor der n&auml;chste
                Patient den Raum betritt.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="bg-[#1A2332] py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Dokumentation in Sekunden statt Minuten.
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Testen Sie, wie anavio Ihren Dokumentationsaufwand auf ein Minimum reduziert.
            </p>
            <a
              href="/#demo"
              className="inline-block px-8 py-4 bg-[#0C8A72] text-white font-semibold rounded-xl hover:bg-[#10A88A] transition-colors"
            >
              Demo anfragen
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
