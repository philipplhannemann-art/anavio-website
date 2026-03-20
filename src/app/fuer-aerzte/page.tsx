import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Digitale Anamnese f\u00fcr \u00c4rzte \u2013 Dashboard, Red Flags & Zeitersparnis",
  description:
    "In 30 Sekunden den vollst\u00e4ndigen Patienten\u00fcberblick. Strukturierte Anamnese mit Red-Flag-Erkennung, Differentialdiagnostik und Leitlinien-Hinweisen. F\u00fcr Haus\u00e4rzte, Fach\u00e4rzte und Zahn\u00e4rzte.",
  alternates: {
    canonical: "https://www.anavio.de/fuer-aerzte",
  },
  openGraph: {
    title: "Digitale Anamnese f\u00fcr \u00c4rzte \u2013 anavio",
    description:
      "In 30 Sekunden den vollst\u00e4ndigen Patienten\u00fcberblick. Strukturiert, priorisiert, leitlinienbasiert.",
    url: "https://www.anavio.de/fuer-aerzte",
  },
};

export default function FuerAerzte() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="bg-[#F7FAFA] pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#0C8A72] mb-4">
              {`F\u00DCR \u00C4RZTE`}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A3D35] leading-tight max-w-3xl mx-auto">
              In 30 Sekunden den vollst&auml;ndigen Patienten&uuml;berblick
            </h1>
            <p className="mt-6 text-lg text-[#6B7D77] max-w-2xl mx-auto leading-relaxed">
              Statt 5–10 Minuten m&uuml;ndlicher Anamnese starten Sie
              vorbereitet in jedes Gespr&auml;ch. Strukturiert, priorisiert,
              leitlinienbasiert.
            </p>
            <a
              href="/#demo"
              className="inline-block mt-8 px-8 py-4 bg-[#0C8A72] text-white font-semibold rounded-xl hover:bg-[#0A7A65] transition-colors"
            >
              Demo anfragen
            </a>
          </div>
        </section>

        {/* ── Was Sie erwartet ── */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D35] text-center mb-14">
              Was anavio f&uuml;r Ihren Praxisalltag bedeutet
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Zeitersparnis */}
              <div className="bg-white rounded-2xl border border-[#EDF2F2] p-8 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#E6F5F0] flex items-center justify-center mb-5">
                  <svg
                    className="w-6 h-6 text-[#0C8A72]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0A3D35] mb-3">
                  Zeitersparnis
                </h3>
                <p className="text-[#6B7D77] leading-relaxed">
                  Bis zu 15 Minuten weniger pro Patient f&uuml;r Routinefragen.
                  Mehr Zeit f&uuml;r die eigentliche Untersuchung.
                </p>
              </div>

              {/* Bessere Vorbereitung */}
              <div className="bg-white rounded-2xl border border-[#EDF2F2] p-8 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#E6F5F0] flex items-center justify-center mb-5">
                  <svg
                    className="w-6 h-6 text-[#0C8A72]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0A3D35] mb-3">
                  Bessere Vorbereitung
                </h3>
                <p className="text-[#6B7D77] leading-relaxed">
                  Strukturierte &Uuml;bersicht mit Leitsymptom,
                  Begleitsymptomen, Medikation und Vorgeschichte — bevor der
                  Patient den Raum betritt.
                </p>
              </div>

              {/* Red-Flag-Erkennung */}
              <div className="bg-white rounded-2xl border border-[#EDF2F2] p-8 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#E6F5F0] flex items-center justify-center mb-5">
                  <svg
                    className="w-6 h-6 text-[#0C8A72]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0A3D35] mb-3">
                  Red-Flag-Erkennung
                </h3>
                <p className="text-[#6B7D77] leading-relaxed">
                  Kritische Symptomkonstellationen werden automatisch markiert.
                  Sie verpassen keine Warnzeichen.
                </p>
              </div>

              {/* Weniger Fehlzuweisungen */}
              <div className="bg-white rounded-2xl border border-[#EDF2F2] p-8 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#E6F5F0] flex items-center justify-center mb-5">
                  <svg
                    className="w-6 h-6 text-[#0C8A72]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0A3D35] mb-3">
                  Weniger Fehlzuweisungen
                </h3>
                <p className="text-[#6B7D77] leading-relaxed">
                  Gezielte Nachfragen im Fragebogen helfen, Patienten besser zu
                  triagieren und Fehlzuweisungen zu reduzieren.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Dashboard-Vorschau ── */}
        <section className="bg-[#F7FAFA] py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D35] text-center mb-4">
              So sieht Ihr Dashboard aus
            </h2>
            <p className="text-center text-[#6B7D77] text-lg mb-14 max-w-2xl mx-auto">
              Ein realistisches Beispiel &mdash; so w&uuml;rde anavio einen komplexen Patienten f&uuml;r Sie aufbereiten.
            </p>

            <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-[#EDF2F2] shadow-xl overflow-hidden">
              {/* Dashboard Header */}
              <div className="px-6 sm:px-8 py-5 border-b border-[#EDF2F2] flex items-center justify-between flex-wrap gap-4 bg-white">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0C8A72]">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m-7 4h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-[#0A3D35]">anavio</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#E6F5F0] text-[#27AE60]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#27AE60]" />
                    3 abgeschlossen
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#FEF2F0] text-[#E84C3D]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E84C3D] animate-pulse" />
                    1 dringend
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#FEF4E6] text-[#F5A623]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
                    2 wartend
                  </span>
                </div>
              </div>

              {/* Patient Header */}
              <div className="px-6 sm:px-8 pt-6 pb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#EDF2F2]">
                <div>
                  <p className="text-xl font-bold text-[#0A3D35]">
                    Hans K., 58 J.
                  </p>
                  <p className="text-sm text-[#6B7D77] mt-0.5">Termin: 09:15 Uhr &middot; Anamnese abgeschlossen um 08:52 Uhr</p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#FEF2F0] text-[#E84C3D] border border-[#E84C3D]/20">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  DRINGEND &mdash; Red Flags erkannt
                </span>
              </div>

              {/* Dashboard Content */}
              <div className="px-6 sm:px-8 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                  {/* LEFT COLUMN */}
                  <div className="space-y-5">
                    {/* Medizinische Zusammenfassung */}
                    <div>
                      <p className="text-[11px] font-bold tracking-widest uppercase text-[#0C8A72] mb-2">
                        Medizinische Zusammenfassung
                      </p>
                      <div className="bg-[#F7FAFA] rounded-xl border border-[#EDF2F2] p-4">
                        <p className="text-sm text-[#0A3D35] leading-relaxed">
                          58-j&auml;hriger Patient mit <span className="font-semibold">retrosternalem Druckgef&uuml;hl</span> seit gestern Abend,
                          Ausstrahlung in den linken Arm, <span className="font-semibold">Belastungsdyspnoe</span> beim Treppensteigen.
                          Zus&auml;tzlich einseitige Beinschwellung links (warm, ger&ouml;tet) seit Langstreckenflug vor 7 Tagen.
                          VE: Diabetes mellitus Typ 2, arterielle Hypertonie. Nikotinabusus ca. 30 pack years.
                        </p>
                      </div>
                    </div>

                    {/* Red Flags */}
                    <div>
                      <p className="text-[11px] font-bold tracking-widest uppercase text-[#E84C3D] mb-2">
                        Red Flags &mdash; Bitte klinisch priorisieren
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-3 bg-[#FEF2F0] border border-[#E84C3D]/15 rounded-xl px-4 py-3">
                          <svg className="w-5 h-5 text-[#E84C3D] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <p className="text-sm font-semibold text-[#0A3D35]">Thoraxschmerz mit Ausstrahlung</p>
                            <p className="text-xs text-[#6B7D77] mt-0.5">Akutes koronares Geschehen nicht ausschlie&szlig;bar</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 bg-[#FEF2F0] border border-[#E84C3D]/15 rounded-xl px-4 py-3">
                          <svg className="w-5 h-5 text-[#E84C3D] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <p className="text-sm font-semibold text-[#0A3D35]">Einseitige Beinschwellung + Dyspnoe</p>
                            <p className="text-xs text-[#6B7D77] mt-0.5">Thromboembolisches Ereignis zu erw&auml;gen (Wells-Score erh&ouml;ht)</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Relevante Negativbefunde */}
                    <div>
                      <p className="text-[11px] font-bold tracking-widest uppercase text-[#0C8A72] mb-2">
                        Relevante Negativbefunde
                      </p>
                      <div className="bg-[#F7FAFA] rounded-xl border border-[#EDF2F2] p-4">
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                          {[
                            "Kein Fieber",
                            "Keine Synkope",
                            "Kein H&auml;moptyse",
                            "Kein Ruheschmerz Bein",
                            "Keine Orthopnoe",
                            "Kein pl&ouml;tzlicher Beginn",
                          ].map((item, i) => (
                            <span key={i} className="flex items-center gap-1.5 text-xs text-[#6B7D77]">
                              <svg className="w-3.5 h-3.5 text-[#27AE60] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                              </svg>
                              <span dangerouslySetInnerHTML={{ __html: item }} />
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Medikation */}
                    <div>
                      <p className="text-[11px] font-bold tracking-widest uppercase text-[#0C8A72] mb-2">
                        Aktuelle Medikation
                      </p>
                      <div className="bg-[#F7FAFA] rounded-xl border border-[#EDF2F2] p-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-[#0A3D35] font-medium">Metformin 1000mg</span>
                          <span className="text-xs text-[#6B7D77]">2&times;/Tag</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-[#0A3D35] font-medium">Ramipril 5mg</span>
                          <span className="text-xs text-[#6B7D77]">1&times;/Tag morgens</span>
                        </div>
                        <div className="border-t border-[#EDF2F2] pt-2 mt-1">
                          <div className="flex items-start gap-2 bg-[#FEF9F0] border border-[#F5D89A] rounded-lg px-3 py-2">
                            <svg className="w-4 h-4 text-[#F5A623] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-xs text-[#0A3D35]">
                              <span className="font-semibold">Hinweis:</span> Bei V.a. ACS Metformin-Pausierung erw&auml;gen (Kontrastmittel-Gabe m&ouml;glich)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT COLUMN */}
                  <div className="space-y-5">
                    {/* Klinische Muster */}
                    <div>
                      <p className="text-[11px] font-bold tracking-widest uppercase text-[#0C8A72] mb-2">
                        Klinische Muster &mdash; Symptomkonstellation zeigt &Uuml;bereinstimmung mit
                      </p>
                      <div className="bg-[#F7FAFA] rounded-xl border border-[#EDF2F2] p-4 space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-2 text-sm font-semibold text-[#0A3D35]">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#E84C3D]" />
                            Akutes Koronarsyndrom
                          </span>
                          <span className="text-xs text-[#6B7D77] font-mono bg-white px-2 py-0.5 rounded border border-[#EDF2F2]">I21.9</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-2 text-sm font-semibold text-[#0A3D35]">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#E84C3D]" />
                            Lungenarterienembolie
                          </span>
                          <span className="text-xs text-[#6B7D77] font-mono bg-white px-2 py-0.5 rounded border border-[#EDF2F2]">I26.9</span>
                        </div>
                        <div className="h-px bg-[#EDF2F2]" />
                        <p className="text-[10px] font-bold tracking-widest uppercase text-[#6B7D77]">
                          Weitere zu erw&auml;gende Muster
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-2 text-sm text-[#F5A623]">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#F5A623]" />
                            Tiefe Beinvenenthrombose
                          </span>
                          <span className="text-xs text-[#6B7D77] font-mono bg-white px-2 py-0.5 rounded border border-[#EDF2F2]">I80.2</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-2 text-sm text-[#6B7D77]">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#6B7D77]" />
                            Instabile Angina pectoris
                          </span>
                          <span className="text-xs text-[#6B7D77] font-mono bg-white px-2 py-0.5 rounded border border-[#EDF2F2]">I20.0</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-2 text-sm text-[#6B7D77]">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#6B7D77]" />
                            Herzinsuffizienz, akut dekompensiert
                          </span>
                          <span className="text-xs text-[#6B7D77] font-mono bg-white px-2 py-0.5 rounded border border-[#EDF2F2]">I50.9</span>
                        </div>
                      </div>
                    </div>

                    {/* Risikoprofil */}
                    <div>
                      <p className="text-[11px] font-bold tracking-widest uppercase text-[#0C8A72] mb-2">
                        Kardiovaskul&auml;res Risikoprofil
                      </p>
                      <div className="bg-[#F7FAFA] rounded-xl border border-[#EDF2F2] p-4">
                        <div className="flex flex-wrap gap-2">
                          {["DM Typ 2", "Art. Hypertonie", "Nikotinabusus 30 py", "M\u00e4nnlich >55 J.", "Immobilisation (Flug)"].map((r) => (
                            <span key={r} className="inline-flex items-center gap-1 text-xs font-medium text-[#E84C3D] border border-[#E84C3D]/20 bg-[#FEF2F0] rounded-full px-3 py-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#E84C3D]" />
                              {r}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Noch zu klärende Fragen */}
                    <div>
                      <p className="text-[11px] font-bold tracking-widest uppercase text-[#0C8A72] mb-2">
                        Noch zu kl&auml;rende Fragen
                      </p>
                      <div className="bg-[#F7FAFA] rounded-xl border border-[#EDF2F2] p-4">
                        <ul className="space-y-2">
                          {[
                            "Schmerzcharakter lageabh\u00e4ngig?",
                            "Belastungs-EKG in der Vorgeschichte?",
                            "Famili\u00e4re Belastung f\u00fcr KHK/TVT?",
                            "Thrombophilie-Screening bekannt?",
                            "Letzte HbA1c-Kontrolle?",
                          ].map((q) => (
                            <li key={q} className="flex items-start gap-2 text-sm text-[#0A3D35]">
                              <svg className="w-4 h-4 text-[#0C8A72] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01" />
                              </svg>
                              {q}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Leitlinienrelevante Diagnostik */}
                    <div>
                      <p className="text-[11px] font-bold tracking-widest uppercase text-[#0C8A72] mb-2">
                        Gem&auml;&szlig; Leitlinie zu erw&auml;gende Diagnostik
                      </p>
                      <div className="bg-[#F7FAFA] rounded-xl border border-[#EDF2F2] p-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {[
                            "12-Kanal-EKG",
                            "Troponin T/I (hs)",
                            "D-Dimere",
                            "Kompressionssonographie",
                            "CT-Angiographie Thorax",
                            "BNP / NT-proBNP",
                            "BZ + HbA1c",
                            "Kreatinin (vor KM)",
                          ].map((d) => (
                            <span key={d} className="flex items-center gap-2 text-sm text-[#0A3D35]">
                              <svg className="w-4 h-4 text-[#0C8A72] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                              </svg>
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Disclaimer bar */}
                <div className="mt-6 bg-[#F7FAFA] rounded-xl border border-[#EDF2F2] px-4 py-3 text-center">
                  <p className="text-xs text-[#6B7D77]">
                    anavio informiert &mdash; die klinische Entscheidung liegt beim Arzt. Alle Angaben ohne Gew&auml;hr. Kein Ersatz f&uuml;r eine &auml;rztliche Untersuchung.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-center text-[#6B7D77] mt-10 text-lg">
              Alle Informationen auf einen Blick &mdash; in unter 30 Sekunden erfassbar.
            </p>
          </div>
        </section>

        {/* ── Fachrichtungen ── */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D35] text-center mb-14">
              F&uuml;r diese Fachrichtungen entwickelt
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Haus\u00e4rzte",
                  desc: "Breitestes Spektrum, h\u00f6chster Zeitdruck. Anavio deckt die Top-5-Besuchsgr\u00fcnde ab.",
                },
                {
                  title: "Zahn\u00e4rzte",
                  desc: "H\u00f6chste Standardisierbarkeit. Risikofaktoren und Medikation vorab erfasst.",
                },
                {
                  title: "Orthop\u00e4den",
                  desc: "Schmerzlokalisation, Bewegungseinschr\u00e4nkungen, bisherige Therapien \u2014 strukturiert erfasst.",
                },
                {
                  title: "HNO-\u00c4rzte",
                  desc: "Gezielte Differenzierung bei Schwindel, H\u00f6rverlust, Tinnitus durch adaptive Nachfragen.",
                },
                {
                  title: "Kinder\u00e4rzte",
                  desc: "Eltern-Proxy-Anamnese, Impfstatus, altersadaptierte Frageb\u00f6gen.",
                },
                {
                  title: "Bereitschaftspraxen",
                  desc: "Kein Vorwissen \u00fcber den Patienten? Vorab-Anamnese direkt nach Terminbuchung.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border-l-4 border-[#0C8A72] pl-6 py-4"
                >
                  <h3 className="text-lg font-bold text-[#0A3D35] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#6B7D77] leading-relaxed">{item.desc}</p>
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
                &bdquo;Der Arzt bleibt der Entscheider.&ldquo;
              </p>
              <p className="mt-6 text-lg text-[#6B7D77] leading-relaxed">
                anavio liefert strukturierte Informationen — keine Diagnosen,
                keine Therapieempfehlungen. Sie entscheiden, wie Sie die
                Informationen nutzen.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="bg-[#1A2332] py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              &Uuml;berzeugt? Testen Sie anavio in Ihrer Praxis.
            </h2>
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
