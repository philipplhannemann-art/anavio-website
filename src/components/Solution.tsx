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
      title: "anavio-Link",
      description:
        "Automatischer Link per SMS/E-Mail zur Vorab-Anamnese.",
    },
    {
      number: 3,
      title: "Digitale Anamnese",
      description:
        "Adaptiver Fragebogen: intelligente Nachfragen basierend auf Antworten.",
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
            Patienten erfassen ihre Symptome digital &ndash; der Arzt beginnt
            direkt mit gezielter Untersuchung.
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

        {/* Comparison Banner */}
        <div className="mt-20 overflow-hidden rounded-2xl border border-[#EDF2F2] shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Before */}
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

            {/* After */}
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

          {/* Time Savings */}
          <div className="border-t border-[#EDF2F2] bg-white px-8 py-6 text-center">
            <p className="text-xl font-bold text-[#0C8A72]">
              Zeitersparnis: bis zu 15 Minuten pro Patient
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
