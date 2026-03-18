export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#F7FAFA] py-24 lg:py-32">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#E6F5F0] opacity-60 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-[#E6F5F0] opacity-40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* ─── Top: Text Content ─────────────────── */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Label */}
          <p className="animate-fade-in-up text-xs font-semibold uppercase tracking-widest text-[#0C8A72]">
            DIGITALE ANAMNESE F&Uuml;R DIE PRIM&Auml;RVERSORGUNG
          </p>

          {/* Headline */}
          <h1 className="animate-fade-in-up delay-100 mt-6 text-5xl font-bold leading-tight text-[#0A3D35] md:text-6xl lg:text-7xl">
            Bessere Anamnese.
            <br />
            Mehr Zeit f&uuml;r Patienten.
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-up delay-200 mt-6 text-xl leading-relaxed text-[#6B7D77] max-w-2xl mx-auto">
            Die digitale Vorab-Anamnese f&uuml;r Haus- und Zahn&auml;rzte.
            Patienten erfassen ihre Symptome strukturiert vor dem Termin
            &ndash; Sie starten vorbereitet.
          </p>

          {/* Buttons */}
          <div className="animate-fade-in-up delay-300 mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#demo"
              className="inline-flex items-center rounded-full bg-[#0C8A72] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#0C8A72]/20 transition-all hover:bg-[#0A3D35] hover:shadow-xl"
            >
              Demo anfragen
            </a>
            <a
              href="#patientendemo"
              className="inline-flex items-center rounded-full border-2 border-[#0C8A72] px-8 py-4 text-base font-semibold text-[#0C8A72] transition-all hover:bg-[#0C8A72] hover:text-white"
            >
              Mehr erfahren
            </a>
          </div>

          {/* Stat Badges */}
          <div className="animate-fade-in-up delay-400 mt-14 flex flex-wrap justify-center gap-8 lg:gap-12">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-[#0C8A72]">15 Min</span>
              <span className="mt-1 text-sm text-[#6B7D77]">Zeitersparnis pro Patient</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-[#0C8A72]">100%</span>
              <span className="mt-1 text-sm text-[#6B7D77]">DSGVO-konform</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-[#0C8A72]">AES-256</span>
              <span className="mt-1 text-sm text-[#6B7D77]">Verschl&uuml;sselung</span>
            </div>
          </div>
        </div>

        {/* ─── Bottom: Two Mini Cards Side by Side ───────── */}
        <div className="animate-fade-in-up delay-500 mt-20 grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-6xl mx-auto">

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
              <span className="ml-auto text-xs text-[#6B7D77] bg-[#F7FAFA] px-2.5 py-1 rounded-full">Hans K., 58 J.</span>
            </div>
            <div className="h-px bg-[#EDF2F2] mb-4" />

            {/* Chat messages */}
            <div className="space-y-3">
              <div className="flex justify-end">
                <div className="max-w-[85%] bg-[#0C8A72] text-white text-xs leading-relaxed px-3.5 py-2.5 rounded-2xl rounded-br-sm">
                  Ich habe seit gestern Abend so ein Druckgef&uuml;hl auf der Brust und kriege schlecht Luft, besonders beim Treppensteigen.
                </div>
              </div>
              <div className="flex justify-start">
                <div className="max-w-[85%]">
                  <span className="text-[9px] font-semibold text-[#0C8A72] uppercase tracking-wide ml-1 mb-1 block">anavio</span>
                  <div className="bg-[#F7FAFA] text-[#0A3D35] text-xs leading-relaxed px-3.5 py-2.5 rounded-2xl rounded-bl-sm">
                    Das nehme ich ernst. Strahlt das Druckgef&uuml;hl irgendwohin aus &mdash; zum Beispiel in den Arm, den Kiefer oder den R&uuml;cken?
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="max-w-[85%] bg-[#0C8A72] text-white text-xs leading-relaxed px-3.5 py-2.5 rounded-2xl rounded-br-sm">
                  Ja, manchmal in den linken Arm. Und mein linkes Bein ist seit der Flugreise letzte Woche auch geschwollen und warm.
                </div>
              </div>
              <div className="flex justify-start">
                <div className="max-w-[85%]">
                  <span className="text-[9px] font-semibold text-[#0C8A72] uppercase tracking-wide ml-1 mb-1 block">anavio</span>
                  <div className="bg-[#F7FAFA] text-[#0A3D35] text-xs leading-relaxed px-3.5 py-2.5 rounded-2xl rounded-bl-sm">
                    Verstanden. Haben Sie Vorerkrankungen wie Bluthochdruck, Diabetes oder Herzprobleme? Nehmen Sie regelm&auml;&szlig;ig Medikamente?
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="max-w-[85%] bg-[#0C8A72] text-white text-xs leading-relaxed px-3.5 py-2.5 rounded-2xl rounded-br-sm">
                  Diabetes Typ 2 und Bluthochdruck. Ich nehme Metformin und Ramipril. Rauche auch seit 30 Jahren.
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
                58-j. Patient, <span className="font-semibold">retrosternales Druckgef&uuml;hl</span> seit gestern Abend mit Ausstrahlung in den li. Arm,
                <span className="font-semibold"> Belastungsdyspnoe</span> beim Treppensteigen. Zusätzlich einseitige Beinschwellung li. (warm) nach Langstreckenflug vor 7 Tagen.
                VE: DM Typ 2, art. Hypertonie. Nikotinabusus ca. 30 py.
              </p>
            </div>

            {/* Red Flags */}
            <div className="mb-3.5">
              <span className="text-[9px] font-bold tracking-widest uppercase text-[#E84C3D]">Red Flags &mdash; Bitte klinisch priorisieren</span>
              <div className="mt-1.5 space-y-1.5">
                <div className="flex items-start gap-2 bg-[#FEF2F0] border border-[#E84C3D]/20 rounded-lg px-3 py-2">
                  <svg className="w-3.5 h-3.5 text-[#E84C3D] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-[10px] text-[#0A3D35] leading-relaxed">
                    <span className="font-semibold">Thoraxschmerz mit Ausstrahlung</span> &mdash; akutes koronares Geschehen nicht ausschlie&szlig;bar
                  </p>
                </div>
                <div className="flex items-start gap-2 bg-[#FEF2F0] border border-[#E84C3D]/20 rounded-lg px-3 py-2">
                  <svg className="w-3.5 h-3.5 text-[#E84C3D] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-[10px] text-[#0A3D35] leading-relaxed">
                    <span className="font-semibold">Einseitige Beinschwellung + Dyspnoe</span> &mdash; thromboembolisches Ereignis zu erw&auml;gen (Wells-Score erh&ouml;ht)
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
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E84C3D]" />
                    Akutes Koronarsyndrom
                  </span>
                  <span className="text-[10px] text-[#6B7D77] font-mono">I21.9</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="flex items-center gap-1.5 font-medium text-[#0A3D35]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E84C3D]" />
                    Lungenarterienembolie
                  </span>
                  <span className="text-[10px] text-[#6B7D77] font-mono">I26.9</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="flex items-center gap-1.5 font-medium text-[#F5A623]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
                    Tiefe Beinvenenthrombose
                  </span>
                  <span className="text-[10px] text-[#6B7D77] font-mono">I80.2</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="flex items-center gap-1.5 text-[#6B7D77]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6B7D77]" />
                    Instabile Angina pectoris
                  </span>
                  <span className="text-[10px] text-[#6B7D77] font-mono">I20.0</span>
                </div>
              </div>
            </div>

            {/* Risikoprofil */}
            <div className="mb-3.5">
              <span className="text-[9px] font-bold tracking-widest uppercase text-[#0C8A72]">Kardiovaskul&auml;res Risikoprofil</span>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {["DM Typ 2", "Art. Hypertonie", "Nikotinabusus 30 py", "Männlich >55 J.", "Immobilisation (Flug)"].map((r) => (
                  <span key={r} className="inline-block text-[9px] font-medium text-[#E84C3D] border border-[#E84C3D]/20 bg-[#FEF2F0] rounded-full px-2 py-0.5">
                    {r}
                  </span>
                ))}
              </div>
            </div>

            {/* Leitlinienrelevante Diagnostik */}
            <div className="mb-3">
              <span className="text-[9px] font-bold tracking-widest uppercase text-[#0C8A72]">Gem&auml;&szlig; Leitlinie zu erw&auml;gende Diagnostik</span>
              <div className="mt-1.5 grid grid-cols-2 gap-1">
                {[
                  "12-Kanal-EKG",
                  "Troponin T/I (hs)",
                  "D-Dimere",
                  "Kompressionssonographie",
                  "CT-Angiographie Thorax",
                  "BNP / NT-proBNP",
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
        <div className="animate-fade-in-up delay-500 mt-6 flex items-center justify-center gap-4">
          <span className="rounded-full bg-white border border-[#EDF2F2] px-3.5 py-1.5 text-[11px] font-medium text-[#0A3D35] shadow-sm">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0C8A72] mr-1.5 align-middle" />
            3 abgeschlossen
          </span>
          <span className="rounded-full bg-white border border-[#EDF2F2] px-3.5 py-1.5 text-[11px] font-medium text-amber-600 shadow-sm">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5 align-middle" />
            1 auff&auml;llig
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
