export default function Problem() {
  const stats = [
    {
      value: "7\u201310 Min",
      color: "#E84C3D",
      description: "pro Patient werden mit Standardfragen verbracht",
    },
    {
      value: "62%",
      color: "#F5A623",
      description: "der Patienten vergessen relevante Symptome zu nennen",
    },
    {
      value: "30%",
      color: "#0C8A72",
      description: "Fehlzuweisungen k\u00f6nnten vermieden werden",
    },
  ];

  const processSteps = [
    { number: 1, title: "Telefon", time: "3\u20135 Min" },
    { number: 2, title: "Empfang", time: "5\u201310 Min" },
    { number: 3, title: "MFA-Triage", time: "2\u20133 Min" },
    { number: 4, title: "Arztgespr\u00e4ch", time: "7\u201310 Min" },
    { number: 5, title: "Dokumentation", time: "2\u20135 Min" },
  ];

  return (
    <section id="problem" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#0C8A72]">
            DAS PROBLEM
          </p>
          <h2 className="mt-3 text-4xl font-bold text-[#0A3D35]">
            Die Anamnese kostet wertvolle Zeit
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#6B7D77]">
            Der aktuelle Prozess in deutschen Arztpraxen ist manuell,
            fehleranf&auml;llig und ineffizient.
          </p>
        </div>

        {/* Stat Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-2xl border border-[#EDF2F2] bg-white p-8 shadow-sm"
            >
              <p
                className="text-4xl font-bold"
                style={{ color: stat.color }}
              >
                {stat.value}
              </p>
              <p className="mt-3 text-[#6B7D77]">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Current Process Flow */}
        <div className="mt-20">
          <h3 className="mb-10 text-center text-lg font-semibold text-[#0A3D35]">
            Der aktuelle Ablauf in der Praxis
          </h3>

          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-0">
            {processSteps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                {/* Step Card */}
                <div className="flex w-40 flex-col items-center rounded-xl border border-[#EDF2F2] bg-white px-4 py-5 shadow-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EDF2F2] text-sm font-semibold text-[#0A3D35]">
                    {step.number}
                  </span>
                  <p className="mt-2 text-sm font-semibold text-[#0A3D35]">
                    {step.title}
                  </p>
                  <p className="mt-1 text-xs text-[#6B7D77]">{step.time}</p>
                </div>

                {/* Arrow between steps */}
                {index < processSteps.length - 1 && (
                  <>
                    <svg
                      className="mx-2 hidden h-5 w-8 text-[#6B7D77] md:block"
                      viewBox="0 0 32 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 10h28m0 0l-6-6m6 6l-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      className="mx-auto h-8 w-5 text-[#6B7D77] md:hidden"
                      viewBox="0 0 20 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 0v28m0 0l-6-6m6 6l6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Total Duration */}
          <div className="mt-10 flex flex-col items-center">
            <div className="h-1 w-16 rounded-full bg-[#E84C3D]" />
            <p className="mt-4 text-lg font-bold text-[#0A3D35]">
              Gesamtdauer: 19&ndash;33 Minuten pro Patient
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
