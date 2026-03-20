export default function Solution() {
  const steps = [
    {
      number: 1,
      title: "Terminbuchung",
      description:
        "Online oder telefonisch. Besuchsgrund wird erfasst.",
    },
    {
      number: 2,
      title: "anavio-Link oder Tablet",
      description:
        "Geplanter Termin? Automatischer Link per SMS/E-Mail. Akutbesuch? QR-Code oder Tablet direkt im Wartezimmer.",
    },
    {
      number: 3,
      title: "Digitale Anamnese",
      description:
        "Adaptiver Fragebogen \u2014 von zu Hause vor dem Termin oder vor Ort in der Praxis. Intelligente Nachfragen basierend auf Antworten.",
    },
    {
      number: 4,
      title: "Arzt-Dashboard",
      description:
        "Strukturierte \u00dcbersicht mit Red Flags und Leitlinien-Hinweisen.",
    },
    {
      number: 5,
      title: "Behandlung",
      description:
        "Arzt startet direkt mit gezielter Untersuchung. Kein Zeitverlust.",
    },
  ];

  return (
    <section id="solution" className="bg-[#F7FAFA] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#0C8A72]">
            DIE L&Ouml;SUNG
          </p>
          <h2 className="mt-3 text-4xl font-bold text-[#0A3D35]">
            Mit anavio starten Sie vorbereitet
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#6B7D77]">
            Patienten erfassen ihre Symptome digital &ndash; vorab von zu Hause
            oder vor Ort in der Praxis. Der Arzt beginnt direkt mit gezielter Untersuchung.
          </p>
        </div>

        {/* New Process Steps */}
        <div className="relative mx-auto mt-20 max-w-3xl">
          {/* Vertical connecting line */}
          <div className="absolute left-6 top-6 bottom-6 hidden w-0.5 bg-[#10A88A]/30 md:block" />

          <div className="space-y-10">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6">
                {/* Number Circle */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0C8A72] text-lg font-bold text-white shadow-md">
                  {step.number}
                </div>

                {/* Content */}
                <div className="pt-1">
                  <h3 className="text-lg font-bold text-[#0A3D35]">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-[#6B7D77]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Konservative Hochrechnung — ZUERST */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h3 className="text-center text-xl sm:text-2xl font-bold text-[#0A3D35] mb-3">
            Konservativ gerechnet &ndash; schon bei nur 90 Sekunden
          </h3>
          <p className="text-center text-[#6B7D77] mb-10 max-w-xl mx-auto">
            Selbst wenn anavio Ihnen pro Patient nur 90 Sekunden Anamnese-Zeit spart, summiert sich das schnell:
          </p>

          <div className="rounded-2xl border border-[#EDF2F2] bg-white shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F7FAFA] flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-[#6B7D77]">1</span>
                </div>
                <div className="flex-1 flex items-center justify-between flex-wrap gap-2">
                  <span className="text-[#6B7D77]">Ersparnis pro Patient</span>
                  <span className="text-lg font-bold text-[#0A3D35]">90 Sekunden</span>
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
                  <span className="text-xl font-bold text-[#0C8A72]">1 Stunde 15 Min</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E6F5F0] flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-[#0C8A72]">=</span>
                </div>
                <div className="flex-1 flex items-center justify-between flex-wrap gap-2">
                  <span className="text-[#0A3D35] font-medium">Pro Woche</span>
                  <span className="text-xl font-bold text-[#0C8A72]">6+ Stunden</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0C8A72] flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-white">=</span>
                </div>
                <div className="flex-1 flex items-center justify-between flex-wrap gap-2">
                  <span className="text-[#0A3D35] font-semibold">Pro Jahr</span>
                  <span className="text-2xl font-bold text-[#0C8A72]">&uuml;ber 300 Stunden</span>
                </div>
              </div>
            </div>

            <div className="bg-[#F7FAFA] border-t border-[#EDF2F2] px-6 sm:px-8 py-4 text-center">
              <p className="text-sm text-[#6B7D77]">
                Konservativ gerechnet mit nur 90 Sekunden &ndash; die tats&auml;chliche Ersparnis liegt deutlich h&ouml;her.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Banner — darunter als Untermauerung */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-[#EDF2F2] shadow-sm max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-[#EDF2F2] p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7D77]">
                VORHER
              </p>
              <p className="mt-3 text-2xl font-bold text-[#6B7D77]">
                19&ndash;33 Min
              </p>
              <p className="mt-2 text-sm text-[#6B7D77]">
                unstrukturiert, fehleranf&auml;llig
              </p>
            </div>
            <div className="bg-[#0C8A72] p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
                NACHHER
              </p>
              <p className="mt-3 text-2xl font-bold text-white">
                8&ndash;18 Min
              </p>
              <p className="mt-2 text-sm text-white/80">
                strukturiert, leitlinienbasiert
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
