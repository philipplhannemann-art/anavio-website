import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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
                  Bis zu 10 Minuten weniger pro Patient f&uuml;r Routinefragen.
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D35] text-center mb-14">
              So sieht Ihr Dashboard aus
            </h2>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#EDF2F2] shadow-lg overflow-hidden">
              {/* Dashboard Header */}
              <div className="px-8 py-5 border-b border-[#EDF2F2] flex items-center justify-between flex-wrap gap-4">
                <span className="text-xl font-bold text-[#0A3D35]">
                  anavio
                </span>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#E6F5F0] text-[#27AE60]">
                    3 abgeschlossen
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#FEF4E6] text-[#F5A623]">
                    1 auff&auml;llig
                  </span>
                </div>
              </div>

              {/* Patient Info */}
              <div className="px-8 pt-6 pb-4">
                <p className="text-lg font-semibold text-[#0A3D35]">
                  Maria M., 45 J. — Termin: 14:30 Uhr
                </p>
              </div>

              {/* Dashboard Content */}
              <div className="px-8 pb-8 space-y-5">
                {/* Leitsymptom */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7D77] mb-1">
                    Leitsymptom
                  </p>
                  <p className="text-[#0A3D35] font-medium">
                    Kopfschmerz — temporal bds., dr&uuml;ckend, 6/10, seit 3
                    Tagen, morgens betont
                  </p>
                </div>

                {/* Begleitsymptome */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7D77] mb-1">
                    Begleitsymptome
                  </p>
                  <p className="text-[#0A3D35]">
                    <span className="text-[#27AE60] font-medium">
                      &#10003; Nackenverspannung
                    </span>
                    {", "}
                    <span className="text-[#27AE60] font-medium">
                      &#10003; Lichtempfindlichkeit
                    </span>
                    {" | "}
                    <span className="text-[#6B7D77]">&#10007; Fieber</span>
                    {", "}
                    <span className="text-[#6B7D77]">&#10007; Erbrechen</span>
                  </p>
                </div>

                {/* Red Flags */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7D77] mb-1">
                    Red Flags
                  </p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#E6F5F0] text-[#27AE60]">
                    Keine Red Flags identifiziert
                  </span>
                </div>

                {/* Medikation */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7D77] mb-1">
                    Medikation
                  </p>
                  <p className="text-[#0A3D35]">
                    L-Thyroxin 75&micro;g, Ibuprofen 400mg b.B. (4x/Woche seit
                    3 Wochen)
                  </p>
                </div>

                {/* Hinweis */}
                <div className="rounded-xl border-l-4 border-[#F5A623] bg-[#FEF9EE] px-5 py-4">
                  <p className="text-sm font-semibold text-[#F5A623] mb-1">
                    Hinweis
                  </p>
                  <p className="text-sm text-[#0A3D35]">
                    H&auml;ufige Analgetika-Einnahme &rarr;
                    Medikamenten&uuml;bergebrauchskopfschmerz DD erw&auml;gen
                  </p>
                </div>

                {/* Klinische Muster */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7D77] mb-1">
                    Klinische Muster
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-lg bg-[#E6F5F0] text-sm text-[#0A3D35] font-medium">
                      Spannungskopfschmerz (G44.2)
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-[#E6F5F0] text-sm text-[#0A3D35] font-medium">
                      Migr&auml;ne o. Aura (G43.0)
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-[#E6F5F0] text-sm text-[#0A3D35] font-medium">
                      MOH (G44.4)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-[#6B7D77] mt-8 text-lg">
              Alle Informationen auf einen Blick — in unter 30 Sekunden
              erfassbar.
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
