export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#F7FAFA] py-24 lg:py-32">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#E6F5F0] opacity-60 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-[#E6F5F0] opacity-40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* ─── Top: Text Content ─────────────────── */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Label */}
          <p className="animate-fade-in-up text-xs font-semibold uppercase tracking-widest text-[#0C8A72]">
            DIGITALE ANAMNESE F&Uuml;R DIE PRIM&Auml;RVERSORGUNG
          </p>

          {/* Headline */}
          <h1 className="animate-fade-in-up delay-100 mt-6 text-3xl sm:text-5xl font-bold leading-tight text-[#0A3D35] md:text-6xl lg:text-7xl">
            Bessere Anamnese.
            <br />
            Mehr Zeit f&uuml;r Patienten.
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-up delay-200 mt-6 text-base sm:text-xl leading-relaxed text-[#6B7D77] max-w-2xl mx-auto">
            Die digitale Anamnese f&uuml;r Ihre Praxis.
            Patienten erfassen ihre Symptome strukturiert &ndash; vorab von
            zu Hause oder vor Ort in der Praxis. Sie starten vorbereitet.
          </p>

          {/* Buttons */}
          <div className="animate-fade-in-up delay-300 mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#demo"
              className="inline-flex items-center rounded-full bg-[#0C8A72] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg shadow-[#0C8A72]/20 transition-all hover:bg-[#0A3D35] hover:shadow-xl"
            >
              Demo anfragen
            </a>
            <a
              href="#patientendemo"
              className="inline-flex items-center rounded-full border-2 border-[#0C8A72] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-[#0C8A72] transition-all hover:bg-[#0C8A72] hover:text-white"
            >
              Mehr erfahren
            </a>
          </div>

          {/* Stat Badges */}
          <div className="animate-fade-in-up delay-400 mt-10 sm:mt-14 flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12">
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-[#0C8A72]">6+ Std</span>
              <span className="mt-1 text-sm text-[#6B7D77]">weniger Routine pro Arzt/Woche</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-[#0C8A72]">100%</span>
              <span className="mt-1 text-sm text-[#6B7D77]">DSGVO-konform</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-[#0C8A72] inline-flex items-center gap-2">
                <span className="inline-flex h-5 w-7 flex-col overflow-hidden rounded-sm shadow-sm">
                  <span className="h-1/3 w-full bg-black" />
                  <span className="h-1/3 w-full bg-red-600" />
                  <span className="h-1/3 w-full bg-yellow-400" />
                </span>
                DE
              </span>
              <span className="mt-1 text-sm text-[#6B7D77]">Hosting in Deutschland</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-[#0C8A72]">20+</span>
              <span className="mt-1 text-sm text-[#6B7D77]">Sprachen verf&uuml;gbar</span>
            </div>
          </div>
        </div>

        {/* ─── Bottom: Two Mini Cards Side by Side ───────── */}
        <div className="animate-fade-in-up delay-500 mt-14 sm:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-6xl mx-auto">

          {/* ── Mini Patient Chat ── */}
          <div className="rounded-2xl border border-[#EDF2F2] bg-white p-5 shadow-xl">
            {/* Header */}
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#E6F5F0]">
                <svg className="w-3.5 h-3.5 text-[#0C8A72]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <span className="text-sm font-semibold text-[#0A3D35]">Patienten-Gespr&auml;ch</span>
              <span className="ml-auto text-xs text-[#6B7D77] bg-[#F7FAFA] px-2.5 py-1 rounded-full">Thomas M., 52 J.</span>
            </div>
            <div className="h-px bg-[#EDF2F2] mb-4" />

            {/* Chat messages */}
            <div className="space-y-3">
              <div className="flex justify-end">
                <div className="max-w-[85%] bg-[#0C8A72] text-white text-xs leading-relaxed px-3.5 py-2.5 rounded-2xl rounded-br-sm">
                  Ich habe seit ungef&auml;hr zwei Wochen Schmerzen im unteren R&uuml;cken, vor allem morgens beim Aufstehen.
                </div>
              </div>
              <div className="flex justify-start">
                <div className="max-w-[85%]">
                  <span className="text-[9px] font-semibold text-[#0C8A72] uppercase tracking-wide ml-1 mb-1 block">anavio</span>
                  <div className="bg-[#F7FAFA] text-[#0A3D35] text-xs leading-relaxed px-3.5 py-2.5 rounded-2xl rounded-bl-sm">
                    Strahlen die Schmerzen irgendwohin aus &mdash; zum Beispiel ins Bein, ins Ges&auml;&szlig; oder in die Leiste?
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="max-w-[85%] bg-[#0C8A72] text-white text-xs leading-relaxed px-3.5 py-2.5 rounded-2xl rounded-br-sm">
                  Ja, manchmal zieht es ins linke Bein bis zum Knie. Vor allem wenn ich lange sitze.
                </div>
              </div>
              <div className="flex justify-start">
                <div className="max-w-[85%]">
                  <span className="text-[9px] font-semibold text-[#0C8A72] uppercase tracking-wide ml-1 mb-1 block">anavio</span>
                  <div className="bg-[#F7FAFA] text-[#0A3D35] text-xs leading-relaxed px-3.5 py-2.5 rounded-2xl rounded-bl-sm">
                    Haben Sie Taubheitsgef&uuml;hle, Kribbeln im Bein oder Schwierigkeiten beim Wasserlassen bemerkt?
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="max-w-[85%] bg-[#0C8A72] text-white text-xs leading-relaxed px-3.5 py-2.5 rounded-2xl rounded-br-sm">
                  Nein, nichts davon. Ich sitze beruflich bestimmt 8&ndash;9 Stunden am Tag am Schreibtisch.
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="mt-4 flex items-center gap-2">
              <div className="flex-1 bg-[#F7FAFA] border border-[#EDF2F2] rounded-xl px-3.5 py-2 text-xs text-[#6B7D77]">
                Beschreiben Sie Ihre Beschwerden...
              </div>
              <div className="bg-[#0C8A72] text-white text-xs font-medium px-4 py-2 rounded-xl">
                Senden
              </div>
            </div>
          </div>

          {/* ── Mini Doctor View ── */}
          <div className="rounded-2xl border border-[#EDF2F2] bg-white p-5 shadow-xl">
            {/* Header */}
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#0C8A72]/10">
                <svg className="w-3.5 h-3.5 text-[#0C8A72]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              <span className="text-sm font-semibold text-[#0A3D35]">Arzt-Ansicht</span>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#27AE60] animate-pulse" />
                <span className="text-[10px] text-[#6B7D77]">Live-Aktualisierung</span>
              </div>
            </div>
            <div className="h-px bg-[#EDF2F2] mb-4" />

            {/* Zusammenfassung */}
            <div className="mb-3.5">
              <span className="text-[9px] font-bold tracking-widest uppercase text-[#0C8A72]">Medizinische Zusammenfassung</span>
              <p className="mt-1.5 text-[11px] text-[#0A3D35] leading-relaxed">
                52-j. Patient, <span className="font-semibold">lumbale R&uuml;ckenschmerzen</span> seit 2 Wochen,
                morgendliche Betonung mit Besserung im Tagesverlauf. Pseudoradikul&auml;re{" "}
                <span className="font-semibold">Ausstrahlung li. Bein</span> bis Knie, belastungsabh&auml;ngig.
                Sitzende T&auml;tigkeit (8&ndash;9h/Tag). Keine neurol. Defizite.
              </p>
            </div>

            {/* Red Flags — keine */}
            <div className="mb-3.5">
              <span className="text-[9px] font-bold tracking-widest uppercase text-[#27AE60]">Red Flags</span>
              <div className="mt-1.5">
                <div className="flex items-center gap-2 bg-[#E6F5F0] border border-[#27AE60]/20 rounded-lg px-3 py-2">
                  <svg className="w-3.5 h-3.5 text-[#27AE60] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-[10px] text-[#0A3D35]">
                    <span className="font-semibold">Keine Red Flags identifiziert</span> &mdash; keine Cauda-equina-Symptomatik, kein Fieber, kein Gewichtsverlust
                  </p>
                </div>
              </div>
            </div>

            {/* Klinische Muster */}
            <div className="mb-3.5">
              <span className="text-[9px] font-bold tracking-widest uppercase text-[#0C8A72]">&Uuml;bereinstimmende klinische Muster</span>
              <div className="mt-1.5 space-y-1">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="flex items-center gap-1.5 font-medium text-[#0A3D35]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0C8A72]" />
                    Lumbales Schmerzsyndrom
                  </span>
                  <span className="text-[10px] text-[#6B7D77] font-mono">M54.5</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="flex items-center gap-1.5 font-medium text-[#0A3D35]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
                    Lumboischialgie
                  </span>
                  <span className="text-[10px] text-[#6B7D77] font-mono">M54.4</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="flex items-center gap-1.5 text-[#6B7D77]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6B7D77]" />
                    Bandscheibenprotrusion
                  </span>
                  <span className="text-[10px] text-[#6B7D77] font-mono">M51.1</span>
                </div>
              </div>
            </div>

            {/* Risikofaktoren */}
            <div className="mb-3.5">
              <span className="text-[9px] font-bold tracking-widest uppercase text-[#0C8A72]">Risikofaktoren</span>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {["Sitzende T\u00e4tigkeit", "Bewegungsmangel", "Alter >50"].map((r) => (
                  <span key={r} className="inline-block text-[9px] font-medium text-[#F5A623] border border-[#F5A623]/20 bg-[#FEF9F0] rounded-full px-2 py-0.5">
                    {r}
                  </span>
                ))}
              </div>
            </div>

            {/* Diagnostik */}
            <div className="mb-3">
              <span className="text-[9px] font-bold tracking-widest uppercase text-[#0C8A72]">Zu erw&auml;gende Diagnostik</span>
              <div className="mt-1.5 grid grid-cols-2 gap-1">
                {[
                  "Las\u00e8gue-Test",
                  "Neurol. Basisuntersuchung",
                  "Beinl\u00e4ngen-/Beckenstand",
                  "ggf. R\u00f6ntgen LWS",
                ].map((d) => (
                  <span key={d} className="flex items-center gap-1.5 text-[10px] text-[#0A3D35]">
                    <svg className="w-3 h-3 text-[#0C8A72] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    {d}
                  </span>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-[#F7FAFA] rounded-lg px-3 py-2 mt-1">
              <p className="text-[9px] text-[#6B7D77] text-center leading-relaxed">
                anavio informiert &mdash; die klinische Entscheidung liegt beim Arzt.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom status bar */}
        <div className="animate-fade-in-up delay-500 mt-6 flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
          <span className="rounded-full bg-white border border-[#EDF2F2] px-3.5 py-1.5 text-[11px] font-medium text-[#0A3D35] shadow-sm">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0C8A72] mr-1.5 align-middle" />
            4 abgeschlossen
          </span>
          <span className="rounded-full bg-white border border-[#EDF2F2] px-3.5 py-1.5 text-[11px] font-medium text-[#0C8A72] shadow-sm">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0C8A72] mr-1.5 align-middle animate-pulse" />
            1 aktuell
          </span>
          <span className="rounded-full bg-white border border-[#EDF2F2] px-3.5 py-1.5 text-[11px] font-medium text-[#6B7D77] shadow-sm">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#6B7D77] mr-1.5 align-middle" />
            2 wartend
          </span>
        </div>
      </div>
    </section>
  );
}
