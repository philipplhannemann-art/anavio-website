export default function Problem() {
  const stats = [
    {
      value: "7\u201310 Min",
      color: "#E84C3D",
      description: "pro Patient werden mit Standardfragen verbracht",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      value: "62%",
      color: "#F5A623",
      description: "der Patienten vergessen relevante Symptome zu nennen",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
      ),
    },
    {
      value: "30%",
      color: "#0C8A72",
      description: "Fehlzuweisungen k\u00f6nnten vermieden werden",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      ),
    },
  ];

  const processSteps = [
    { number: 1, title: "Telefon", time: "3\u20135", minutes: 4 },
    { number: 2, title: "Empfang", time: "5\u201310", minutes: 7.5 },
    { number: 3, title: "MFA-Triage", time: "2\u20133", minutes: 2.5 },
    { number: 4, title: "Arztgespr\u00e4ch", time: "7\u201310", minutes: 8.5 },
    { number: 5, title: "Doku", time: "2\u20135", minutes: 3.5 },
  ];

  const totalMinutes = processSteps.reduce((sum, s) => sum + s.minutes, 0);

  return (
    <section id="problem" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#0C8A72]">
            DAS PROBLEM
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#0A3D35]">
            Die Anamnese kostet wertvolle Zeit
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-[#6B7D77]">
            Der aktuelle Prozess in deutschen Arztpraxen ist manuell,
            fehleranf&auml;llig und ineffizient.
          </p>
        </div>

        {/* Stat Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-2xl border border-[#EDF2F2] bg-white p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5"
                style={{ backgroundColor: `${stat.color}10`, color: stat.color }}
              >
                {stat.icon}
              </div>
              <p
                className="text-3xl sm:text-4xl font-bold"
                style={{ color: stat.color }}
              >
                {stat.value}
              </p>
              <p className="mt-3 text-[#6B7D77]">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Current Process — Horizontal Timeline */}
        <div className="mt-24">
          <h3 className="mb-10 sm:mb-14 text-center text-xl sm:text-2xl font-bold text-[#0A3D35]">
            Der aktuelle Ablauf in der Praxis
          </h3>

          {/* Gantt-style staggered bar chart */}
          <div className="max-w-4xl mx-auto overflow-hidden">
            <div className="space-y-2.5 sm:space-y-3">
              {processSteps.map((step, index) => {
                const offsetMinutes = processSteps.slice(0, index).reduce((sum, s) => sum + s.minutes, 0);
                const offsetPct = (offsetMinutes / totalMinutes) * 100;
                const widthPct = (step.minutes / totalMinutes) * 100;
                const barColor =
                  step.number === 4 ? "#E84C3D" :
                  step.number === 2 ? "#F5A623" :
                  "#6B7D77";

                return (
                  <div key={step.number} className="flex items-center gap-2 sm:gap-4">
                    {/* Label */}
                    <div className="w-20 sm:w-32 md:w-44 shrink-0 text-right">
                      <span className="text-xs sm:text-sm font-semibold text-[#0A3D35]">{step.title}</span>
                    </div>

                    {/* Gantt bar row */}
                    <div className="flex-1 min-w-0">
                      <div className="h-8 sm:h-10 rounded-lg bg-[#EDF2F2] overflow-hidden flex">
                        {offsetPct > 0 && (
                          <div
                            className="h-full flex-shrink-0"
                            style={{
                              width: `${offsetPct}%`,
                              background: "repeating-linear-gradient(90deg, #E2E8E8 0px, #E2E8E8 4px, #EDF2F2 4px, #EDF2F2 8px)",
                            }}
                          />
                        )}
                        <div
                          className="h-full flex items-center justify-center"
                          style={{
                            width: `${widthPct}%`,
                            minWidth: "48px",
                            backgroundColor: barColor,
                            borderRadius: index === 0 ? "0.5rem" : "0 0.5rem 0.5rem 0",
                          }}
                        >
                          <span className="text-[10px] sm:text-xs font-bold text-white whitespace-nowrap">
                            {step.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Ohne anavio — Total */}
            <div className="mt-8 sm:mt-10 mb-2">
              <p className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#E84C3D] ml-22 sm:ml-36 md:ml-48 mb-2">Ohne anavio</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="w-20 sm:w-32 md:w-44 shrink-0 text-right">
                <span className="text-xs sm:text-sm font-bold text-[#E84C3D]">Gesamt</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="h-10 sm:h-12 rounded-lg bg-[#E84C3D] flex items-center px-3 sm:px-4">
                  <span className="text-sm sm:text-lg font-bold text-white whitespace-nowrap">
                    19&ndash;33 Min / Patient
                  </span>
                </div>
              </div>
            </div>

            {/* Mit anavio — Comparison */}
            <div className="mt-5 sm:mt-6 mb-2">
              <p className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#0C8A72] ml-22 sm:ml-36 md:ml-48 mb-2">Mit anavio</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="w-20 sm:w-32 md:w-44 shrink-0 text-right">
                <span className="text-xs sm:text-sm font-bold text-[#0C8A72]">Gesamt</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="h-10 sm:h-12 rounded-lg bg-[#EDF2F2] overflow-hidden flex">
                  <div className="h-full flex items-center px-3 sm:px-4 rounded-lg" style={{ width: "55%", minWidth: "100px", backgroundColor: "#0C8A72" }}>
                    <span className="text-sm sm:text-lg font-bold text-white whitespace-nowrap">
                      8&ndash;18 Min
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Savings callout — offset to show the delta */}
            <div className="mt-5 sm:mt-6 flex items-center gap-2 sm:gap-4">
              <div className="w-20 sm:w-32 md:w-44 shrink-0 text-right">
                <span className="text-xs sm:text-sm font-bold text-[#0C8A72]">Ersparnis</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="h-10 sm:h-12 rounded-lg bg-[#EDF2F2] overflow-hidden flex">
                  {/* Grey offset matching the "Mit anavio" bar width */}
                  <div className="h-full flex-shrink-0" style={{ width: "55%" }} />
                  {/* Delta bar from where green ends to where red ends */}
                  <div className="h-full flex-1 rounded-r-lg bg-[#E6F5F0] border-2 border-dashed border-[#0C8A72]/30 flex items-center justify-center px-2 sm:px-4">
                    <span className="text-xs sm:text-lg font-bold text-[#0C8A72] whitespace-nowrap">
                      Bis zu 15 Min
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 text-center">
              <p className="text-[#6B7D77] text-xs sm:text-sm">
                Strukturierte Vorab-Anamnese ersetzt <span className="font-semibold text-[#E84C3D]">20 Minuten Routinefragen</span> &mdash;
                mehr Zeit f&uuml;r die eigentliche Behandlung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
