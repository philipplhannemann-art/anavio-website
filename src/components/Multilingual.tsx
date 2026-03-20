export default function Multilingual() {
  const languages = [
    "T\u00fcrkisch", "Arabisch", "Russisch", "Polnisch", "Ukrainisch",
    "Rum\u00e4nisch", "Englisch", "Franz\u00f6sisch", "Spanisch", "Italienisch",
    "Kroatisch", "Serbisch", "Persisch", "Vietnamesisch", "Portugiesisch",
    "Griechisch", "Bulgarisch", "Albanisch", "Kurdisch", "Dari",
  ];

  return (
    <section id="mehrsprachig" className="bg-[#0A3D35] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Message */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#3ECBB0] mb-3">
              MEHRSPRACHIG
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Keine Sprachbarriere mehr
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Patienten durchlaufen die Anamnese in ihrer Muttersprache &mdash;
              Sie erhalten den vollst&auml;ndigen medizinischen Bericht auf Deutsch.
              Strukturiert, pr&auml;zise und ohne Dolmetscher.
            </p>
            <ul className="space-y-3">
              {[
                "Patient w\u00e4hlt seine Sprache \u2014 anavio \u00fcbersetzt medizinisch korrekt",
                "Keine Missverst\u00e4ndnisse bei Symptombeschreibungen",
                "Vollst\u00e4ndige Anamnese auch bei nicht-deutschsprachigen Patienten",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/80">
                  <svg className="w-5 h-5 text-[#3ECBB0] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Language grid + flow */}
          <div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#3ECBB0] mb-4">
                Unterst&uuml;tzte Sprachen
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/80 font-medium border border-white/5"
                  >
                    {lang}
                  </span>
                ))}
              </div>

              {/* Flow indicator */}
              <div className="border-t border-white/10 pt-5">
                <div className="flex items-center gap-3">
                  <div className="flex-1 rounded-lg bg-white/10 px-4 py-3 text-center">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-white/50 mb-1">Patient</p>
                    <p className="text-sm text-white font-medium">Eigene Sprache</p>
                  </div>
                  <svg className="w-5 h-5 text-[#3ECBB0] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <div className="flex-1 rounded-lg bg-[#0C8A72] px-4 py-3 text-center">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-white/70 mb-1">Arzt</p>
                    <p className="text-sm text-white font-medium">Bericht auf Deutsch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
