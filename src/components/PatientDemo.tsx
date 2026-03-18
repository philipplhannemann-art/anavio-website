export default function PatientDemo() {
  return (
    <section id="patientendemo" className="bg-[#F7FAFA] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#0C8A72] mb-3">
            SO FUNKTIONIERT ES
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A3D35] mb-4">
            Einfach für Patienten. Wertvoll für Ärzte.
          </h2>
          <p className="text-lg text-[#6B7D77] max-w-3xl mx-auto leading-relaxed">
            Patienten beschreiben ihre Beschwerden in eigenen Worten — anavio stellt intelligente
            Nachfragen und bereitet alles strukturiert für Sie auf.
          </p>
        </div>

        {/* Two Separate Cards Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

          {/* ——— CARD 1: Patient Chat ——— */}
          <div className="rounded-2xl shadow-xl border border-[#EDF2F2] overflow-hidden bg-white flex flex-col">
            {/* Header Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#EDF2F2] bg-white">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#E6F5F0]">
                  <svg className="w-3.5 h-3.5 text-[#0C8A72]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-[#0A3D35]">
                  Patienten-Gespräch
                </span>
              </div>
              <span className="text-xs text-[#6B7D77] font-medium bg-[#F7FAFA] px-2.5 py-1 rounded-full">Lisa, 34 J.</span>
            </div>

            {/* Chat Area */}
            <div className="flex-1 px-5 py-5 space-y-5 overflow-y-auto">
              {/* Patient message 1 */}
              <div className="flex justify-end">
                <div className="max-w-[80%] bg-[#0C8A72] text-white text-sm leading-relaxed px-4 py-3 rounded-2xl rounded-br-md shadow-sm">
                  Ich habe seit ein paar Tagen starke Kopfschmerzen, vor allem morgens.
                </div>
              </div>

              {/* anavio reply 1 */}
              <div className="flex justify-start">
                <div className="max-w-[80%]">
                  <span className="text-[10px] font-semibold text-[#0C8A72] uppercase tracking-wide ml-1 mb-1 block">
                    anavio
                  </span>
                  <div className="bg-[#F7FAFA] text-[#0A3D35] text-sm leading-relaxed px-4 py-3 rounded-2xl rounded-bl-md shadow-sm">
                    Das tut mir leid! Damit ich das besser einordnen kann: Wo genau spüren Sie die
                    Kopfschmerzen — eher an den Schläfen, im Stirnbereich, oder am ganzen Kopf?
                  </div>
                </div>
              </div>

              {/* Patient message 2 */}
              <div className="flex justify-end">
                <div className="max-w-[80%] bg-[#0C8A72] text-white text-sm leading-relaxed px-4 py-3 rounded-2xl rounded-br-md shadow-sm">
                  Meistens an beiden Schläfen, so ein drückender Schmerz.
                </div>
              </div>

              {/* anavio reply 2 */}
              <div className="flex justify-start">
                <div className="max-w-[80%]">
                  <span className="text-[10px] font-semibold text-[#0C8A72] uppercase tracking-wide ml-1 mb-1 block">
                    anavio
                  </span>
                  <div className="bg-[#F7FAFA] text-[#0A3D35] text-sm leading-relaxed px-4 py-3 rounded-2xl rounded-bl-md shadow-sm">
                    Verstanden — ein drückender Schmerz an beiden Schläfen. Auf einer Skala von 1 bis
                    10, wie stark würden Sie die Schmerzen einschätzen?
                  </div>
                </div>
              </div>

              {/* Patient message 3 */}
              <div className="flex justify-end">
                <div className="max-w-[80%] bg-[#0C8A72] text-white text-sm leading-relaxed px-4 py-3 rounded-2xl rounded-br-md shadow-sm">
                  So eine 6 würde ich sagen. Und mir ist dabei auch leicht übel manchmal.
                </div>
              </div>

              {/* anavio reply 3 */}
              <div className="flex justify-start">
                <div className="max-w-[80%]">
                  <span className="text-[10px] font-semibold text-[#0C8A72] uppercase tracking-wide ml-1 mb-1 block">
                    anavio
                  </span>
                  <div className="bg-[#F7FAFA] text-[#0A3D35] text-sm leading-relaxed px-4 py-3 rounded-2xl rounded-bl-md shadow-sm">
                    Danke für die Info! Nehmen Sie aktuell Medikamente gegen die Schmerzen oder andere
                    Medikamente regelmäßig?
                  </div>
                </div>
              </div>

              {/* Patient message 4 */}
              <div className="flex justify-end">
                <div className="max-w-[80%] bg-[#0C8A72] text-white text-sm leading-relaxed px-4 py-3 rounded-2xl rounded-br-md shadow-sm">
                  Ja, Ibuprofen 400, so 3-4 mal die Woche seit ein paar Wochen.
                </div>
              </div>

              {/* anavio reply 4 */}
              <div className="flex justify-start">
                <div className="max-w-[80%]">
                  <span className="text-[10px] font-semibold text-[#0C8A72] uppercase tracking-wide ml-1 mb-1 block">
                    anavio
                  </span>
                  <div className="bg-[#F7FAFA] text-[#0A3D35] text-sm leading-relaxed px-4 py-3 rounded-2xl rounded-bl-md shadow-sm">
                    Haben Sie in letzter Zeit vermehrt Stress, Schlafprobleme oder arbeiten Sie viel am
                    Bildschirm?
                  </div>
                </div>
              </div>

              {/* Patient message 5 */}
              <div className="flex justify-end">
                <div className="max-w-[80%] bg-[#0C8A72] text-white text-sm leading-relaxed px-4 py-3 rounded-2xl rounded-br-md shadow-sm">
                  Ja, auf jeden Fall. Viel Stress auf der Arbeit und ich sitze 8 Stunden am PC. Schlafe
                  auch schlecht gerade.
                </div>
              </div>
            </div>

            {/* Mock Input Field */}
            <div className="px-5 py-4 border-t border-[#EDF2F2]">
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-[#F7FAFA] border border-[#EDF2F2] rounded-xl px-4 py-2.5 text-sm text-[#6B7D77]">
                  Beschreiben Sie Ihre Beschwerden...
                </div>
                <div className="bg-[#0C8A72] text-white text-sm font-medium px-5 py-2.5 rounded-xl cursor-default select-none whitespace-nowrap">
                  Senden
                </div>
              </div>
            </div>
          </div>

          {/* ——— CARD 2: Doctor View ——— */}
          <div className="rounded-2xl shadow-xl border border-[#EDF2F2] overflow-hidden bg-[#FBFCFC] flex flex-col">
            {/* Header Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#EDF2F2] bg-white">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#0C8A72]/10">
                  <svg className="w-3.5 h-3.5 text-[#0C8A72]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-[#0A3D35]">Arzt-Ansicht</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#27AE60] animate-pulse" />
                <span className="text-xs text-[#6B7D77] font-medium">Live-Aktualisierung</span>
              </div>
            </div>

            {/* Structured Summary */}
            <div className="flex-1 px-5 py-5 space-y-5 overflow-y-auto">

              {/* MEDIZINISCHE ZUSAMMENFASSUNG */}
              <div>
                <p className="text-[11px] font-bold tracking-widest uppercase text-[#0C8A72] mb-2">
                  Medizinische Zusammenfassung
                </p>
                <div className="bg-white rounded-xl border border-[#EDF2F2] px-4 py-3.5">
                  <p className="text-sm text-[#0A3D35] leading-relaxed">
                    34-jährige Patientin stellt sich vor mit <span className="font-semibold">Kopfschmerzen seit mehreren Tagen</span>,
                    bilateral temporal, drückender Charakter, Intensität <span className="font-semibold">6/10</span>, morgendliche Betonung.
                    Begleitsymptom: intermittierende Übelkeit. Patientin berichtet erhöhten beruflichen Stress,
                    prolongierte Bildschirmarbeit (ca. 8h/Tag) und Schlafstörungen.
                  </p>
                </div>
              </div>

              {/* RED FLAGS */}
              <div>
                <p className="text-[11px] font-bold tracking-widest uppercase text-[#E84C3D] mb-2">
                  Red Flags — Bitte klinisch priorisieren
                </p>
                <div className="bg-white rounded-xl border border-[#EDF2F2] px-4 py-3">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-[#27AE60]">
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Keine Red Flags identifiziert
                  </span>
                  <p className="text-xs text-[#6B7D77] mt-1.5 ml-6">
                    Kein Donnerschlag-Kopfschmerz, kein Fieber, keine Bewusstseinstrübung, keine neurologischen Ausfälle erfragt.
                  </p>
                </div>
              </div>

              {/* RELEVANTE NEGATIVBEFUNDE */}
              <div>
                <p className="text-[11px] font-bold tracking-widest uppercase text-[#0C8A72] mb-2">
                  Relevante Negativbefunde
                </p>
                <div className="bg-white rounded-xl border border-[#EDF2F2] px-4 py-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      "Kein Sehverlust",
                      "Kein Fieber",
                      "Keine Nackensteifigkeit",
                      "Kein Schwindel",
                      "Keine Lichtempfindlichkeit",
                      "Keine neurologischen Ausfälle",
                    ].map((item) => (
                      <span key={item} className="flex items-center gap-2 text-xs text-[#6B7D77]">
                        <svg className="w-3.5 h-3.5 text-[#27AE60] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                        </svg>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* MEDIKATION */}
              <div>
                <p className="text-[11px] font-bold tracking-widest uppercase text-[#0C8A72] mb-2">
                  Aktuelle Medikation
                </p>
                <div className="bg-white rounded-xl border border-[#EDF2F2] px-4 py-3.5 space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-[#0A3D35] font-medium">
                      Ibuprofen 400mg b.B.
                    </p>
                    <span className="text-xs text-[#6B7D77]">3–4×/Woche, seit Wochen</span>
                  </div>
                  <div className="flex items-start gap-2.5 bg-[#FEF9F0] border border-[#F5D89A] rounded-lg px-3.5 py-2.5">
                    <svg
                      className="w-4 h-4 text-[#F5A623] mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-xs text-[#0A3D35] leading-relaxed">
                      <span className="font-semibold">Hinweis:</span> Häufige Analgetika-Einnahme (&gt;10 Tage/Monat) —
                      Medikamenten&shy;übergebrauchs&shy;kopfschmerz differentialdiagnostisch zu erwägen
                    </p>
                  </div>
                </div>
              </div>

              {/* KLINISCHE MUSTER */}
              <div>
                <p className="text-[11px] font-bold tracking-widest uppercase text-[#0C8A72] mb-2">
                  Klinische Muster — Symptomkonstellation zeigt Übereinstimmung mit
                </p>
                <div className="bg-white rounded-xl border border-[#EDF2F2] px-4 py-3.5 space-y-2.5">
                  {/* Primary pattern */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-[#0A3D35]">
                      <span className="w-2 h-2 rounded-full bg-[#0C8A72]" />
                      Spannungskopfschmerz
                    </span>
                    <span className="text-xs text-[#6B7D77] font-mono">G44.2</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-[#0A3D35]">
                      <span className="w-2 h-2 rounded-full bg-[#0C8A72]" />
                      Migräne ohne Aura
                    </span>
                    <span className="text-xs text-[#6B7D77] font-mono">G43.0</span>
                  </div>

                  <div className="border-t border-[#EDF2F2] pt-2.5 mt-1">
                    <p className="text-[10px] font-bold tracking-widest uppercase text-[#6B7D77] mb-2">
                      Weitere zu erwägende Muster
                    </p>
                    <div className="flex items-start justify-between gap-2">
                      <span className="inline-flex items-start gap-2 text-sm text-[#F5A623] min-w-0 break-words">
                        <span className="w-2 h-2 rounded-full bg-[#F5A623] shrink-0 mt-1.5" />
                        Medikamenten&shy;übergebrauchs&shy;kopfschmerz
                      </span>
                      <span className="text-xs text-[#6B7D77] font-mono shrink-0">G44.4</span>
                    </div>
                    <div className="flex items-center justify-between mt-1.5">
                      <span className="inline-flex items-center gap-2 text-sm text-[#6B7D77]">
                        <span className="w-2 h-2 rounded-full bg-[#6B7D77]" />
                        Zervikogener Kopfschmerz
                      </span>
                      <span className="text-xs text-[#6B7D77] font-mono">G44.8</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* NOCH ZU KLÄRENDE FRAGEN */}
              <div>
                <p className="text-[11px] font-bold tracking-widest uppercase text-[#0C8A72] mb-2">
                  Noch zu klärende Fragen
                </p>
                <div className="bg-white rounded-xl border border-[#EDF2F2] px-4 py-3.5">
                  <ul className="space-y-2">
                    {[
                      "Familienanamnese für Migräne?",
                      "Vorherige Bildgebung (cMRT/CCT)?",
                      "Auslöser identifiziert (Nahrungsmittel, Zyklus)?",
                      "Veränderung durch Lageänderung oder Valsalva?",
                      "Sehstörungen oder Aura-Phänomene?",
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

              {/* LEITLINIENRELEVANTE DIAGNOSTIK */}
              <div>
                <p className="text-[11px] font-bold tracking-widest uppercase text-[#0C8A72] mb-2">
                  Gemäß Leitlinie zu erwägende Diagnostik
                </p>
                <div className="bg-white rounded-xl border border-[#EDF2F2] px-4 py-3.5">
                  <ul className="space-y-2">
                    {[
                      "Neurologische Basisuntersuchung",
                      "RR-Messung (ggf. Langzeit-RR bei morgendlicher Betonung)",
                      "Kopfschmerztagebuch (ICHD-3-Kriterien)",
                      "Visus-Prüfung / Augenhintergrund",
                      "ggf. cMRT zum Ausschluss struktureller Pathologie",
                    ].map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-[#0A3D35]">
                        <svg className="w-4 h-4 text-[#0C8A72] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* DISCLAIMER */}
              <div className="bg-[#F7FAFA] rounded-lg border border-[#EDF2F2] px-3.5 py-2.5">
                <p className="text-[11px] text-[#6B7D77] leading-relaxed text-center">
                  anavio informiert — die klinische Entscheidung liegt beim Arzt.
                  Alle Angaben ohne Gewähr. Kein Ersatz für eine ärztliche Untersuchung.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="text-center text-[#6B7D77] italic mt-10 text-base">
          Der Patient beschreibt seine Beschwerden ganz natürlich — anavio bereitet alles strukturiert für Sie auf.
        </p>
      </div>
    </section>
  );
}
