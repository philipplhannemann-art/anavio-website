export default function PatientDemo() {
  return (
    <section id="patientendemo" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#0C8A72] mb-3">
            SO FUNKTIONIERT ES
          </p>
          <h2 className="text-4xl font-bold text-[#0A3D35] mb-4">
            Einfach für Patienten. Wertvoll für Ärzte.
          </h2>
          <p className="text-lg text-[#6B7D77] max-w-3xl mx-auto leading-relaxed">
            Patienten beschreiben ihre Beschwerden in eigenen Worten — anavio stellt intelligente
            Nachfragen und bereitet alles strukturiert für Sie auf.
          </p>
        </div>

        {/* Split-Screen Mockup Card */}
        <div className="rounded-2xl shadow-xl border border-[#EDF2F2] overflow-hidden lg:grid lg:grid-cols-2">
          {/* ——— LEFT HALF: Patient Chat ——— */}
          <div className="bg-white flex flex-col">
            {/* Header Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#EDF2F2]">
              <div className="flex items-center gap-2.5">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#0C8A72]" />
                <span className="text-sm font-semibold text-[#0A3D35]">
                  Patienten-Gespräch
                </span>
              </div>
              <span className="text-xs text-[#6B7D77] font-medium">Lisa, 34 J.</span>
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
                    Medikamente regelmässig?
                  </div>
                </div>
              </div>

              {/* Patient message 4 */}
              <div className="flex justify-end">
                <div className="max-w-[80%] bg-[#0C8A72] text-white text-sm leading-relaxed px-4 py-3 rounded-2xl rounded-br-md shadow-sm">
                  Ja, Ibuprofen 400, so 3-4 mal die Woche seit ein paar Wochen.
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

          {/* ——— RIGHT HALF: Doctor View ——— */}
          <div className="bg-[#F7FAFA] flex flex-col border-t lg:border-t-0 lg:border-l border-[#EDF2F2]">
            {/* Header Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#EDF2F2]">
              <div className="flex items-center gap-2.5">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#0C8A72]" />
                <span className="text-sm font-semibold text-[#0A3D35]">Arzt-Ansicht</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#27AE60] animate-pulse" />
                <span className="text-xs text-[#6B7D77] font-medium">Wird live aktualisiert</span>
              </div>
            </div>

            {/* Structured Summary */}
            <div className="flex-1 px-5 py-5 space-y-6 overflow-y-auto">
              {/* ANAMNESE */}
              <div>
                <p className="text-[11px] font-bold tracking-widest uppercase text-[#0C8A72] mb-2">
                  Anamnese
                </p>
                <div className="bg-white rounded-xl border border-[#EDF2F2] px-4 py-3.5">
                  <p className="text-sm text-[#0A3D35] leading-relaxed">
                    34-jährige Patientin stellt sich vor mit Kopfschmerzen seit mehreren Tagen,
                    bilateral temporal, drückender Charakter, Intensität 6/10, morgendliche Betonung.
                    Begleitsymptom: intermittierende Übelkeit.
                  </p>
                </div>
              </div>

              {/* RED FLAGS */}
              <div>
                <p className="text-[11px] font-bold tracking-widest uppercase text-[#E84C3D] mb-2">
                  Red Flags
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
                </div>
              </div>

              {/* MEDIKATION */}
              <div>
                <p className="text-[11px] font-bold tracking-widest uppercase text-[#0C8A72] mb-2">
                  Medikation
                </p>
                <div className="bg-white rounded-xl border border-[#EDF2F2] px-4 py-3.5 space-y-3">
                  <p className="text-sm text-[#0A3D35] leading-relaxed">
                    Ibuprofen 400mg b.B. (3-4x/Woche seit mehreren Wochen)
                  </p>
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
                      <span className="font-semibold">Häufige Analgetika-Einnahme</span> —
                      Medikamentenübergebrauchskopfschmerz differentialdiagnostisch zu erwägen
                    </p>
                  </div>
                </div>
              </div>

              {/* KLINISCHE MUSTER */}
              <div>
                <p className="text-[11px] font-bold tracking-widest uppercase text-[#0C8A72] mb-2">
                  Klinische Muster
                </p>
                <div className="bg-white rounded-xl border border-[#EDF2F2] px-4 py-3.5">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block text-xs font-medium text-[#0C8A72] border border-[#0C8A72]/30 bg-[#E6F5F0] rounded-full px-3 py-1.5">
                      Spannungskopfschmerz (G44.2)
                    </span>
                    <span className="inline-block text-xs font-medium text-[#0C8A72] border border-[#0C8A72]/30 bg-[#E6F5F0] rounded-full px-3 py-1.5">
                      Migräne o. Aura (G43.0)
                    </span>
                    <span className="inline-block text-xs font-medium text-[#F5A623] border border-[#F5A623]/30 bg-[#FEF9F0] rounded-full px-3 py-1.5">
                      MOH (G44.4)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="text-center text-[#6B7D77] italic mt-10 text-base">
          Der Patient beschreibt seine Beschwerden ganz natürlich — anavio erledigt den Rest.
        </p>
      </div>
    </section>
  );
}
