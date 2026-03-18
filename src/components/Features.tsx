export default function Features() {
  return (
    <section id="funktionen" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#0C8A72]">
            DREI EBENEN DER INFORMATION
          </p>
          <h2 className="mt-3 text-4xl font-bold text-[#0A3D35]">
            Mehr als nur ein Fragebogen
          </h2>
          <p className="mt-4 text-lg text-[#6B7D77]">
            anavio bereitet Patienteninformationen auf drei Ebenen auf – vom
            strukturierten Überblick bis zu leitlinienbasierten Hinweisen.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Card 1 – Strukturierte Zusammenfassung */}
          <div className="rounded-2xl border border-[#EDF2F2] bg-white p-8 transition hover:shadow-lg">
            {/* Icon */}
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E6F5F0]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="6"
                  y="3"
                  width="12"
                  height="18"
                  rx="2"
                  stroke="#0C8A72"
                  strokeWidth="2"
                />
                <path
                  d="M9 1h6v4H9z"
                  fill="#E6F5F0"
                  stroke="#0C8A72"
                  strokeWidth="2"
                  rx="1"
                />
                <line
                  x1="9"
                  y1="10"
                  x2="15"
                  y2="10"
                  stroke="#0C8A72"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="9"
                  y1="14"
                  x2="13"
                  y2="14"
                  stroke="#0C8A72"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Badge */}
            <span className="inline-block rounded-full bg-[#27AE60]/10 px-3 py-1 text-xs font-semibold text-[#27AE60]">
              Sofort verfügbar
            </span>

            {/* Title */}
            <h3 className="mt-4 text-xl font-bold text-[#0A3D35]">
              Strukturierte Zusammenfassung
            </h3>

            {/* Bullets */}
            <ul className="mt-4 space-y-3 text-[#6B7D77]">
              {[
                "Leitsymptom mit Charakterisierung",
                "Positive & negative Begleitsymptome",
                "Relevante Vorgeschichte & Medikation",
                "Zeitstrahl des Symptomverlaufs",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <svg
                    className="mt-1 h-4 w-4 flex-shrink-0 text-[#0C8A72]"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <circle cx="8" cy="8" r="3" fill="currentColor" />
                  </svg>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 – Intelligente Markierungen */}
          <div className="rounded-2xl border border-[#EDF2F2] bg-white p-8 transition hover:shadow-lg">
            {/* Icon */}
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FEF7EC]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3L14.5 8.5L21 9.5L16.5 14L17.5 21L12 18L6.5 21L7.5 14L3 9.5L9.5 8.5L12 3Z"
                  stroke="#F5A623"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="12" r="2" fill="#F5A623" />
              </svg>
            </div>

            {/* Badge */}
            <span className="inline-block rounded-full bg-[#27AE60]/10 px-3 py-1 text-xs font-semibold text-[#27AE60]">
              Sofort verfügbar
            </span>

            {/* Title */}
            <h3 className="mt-4 text-xl font-bold text-[#0A3D35]">
              Intelligente Markierungen
            </h3>

            {/* Bullets */}
            <ul className="mt-4 space-y-3 text-[#6B7D77]">
              {[
                "Red-Flag-Erkennung bei Warnsymptomen",
                "Medikamenten-Hinweise & Interaktionen",
                "Allergie-Warnungen",
                "Risikofaktor-Hervorhebung",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <svg
                    className="mt-1 h-4 w-4 flex-shrink-0 text-[#F5A623]"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <circle cx="8" cy="8" r="3" fill="currentColor" />
                  </svg>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3 – Klinische Muster */}
          <div className="rounded-2xl border border-[#EDF2F2] bg-white p-8 transition hover:shadow-lg">
            {/* Icon */}
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EBF3F8]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="10"
                  r="7"
                  stroke="#2C5F7C"
                  strokeWidth="2"
                />
                <path
                  d="M8 9C8 9 9.5 12 12 12C14.5 12 16 9 16 9"
                  stroke="#2C5F7C"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M9 18L8 22M15 18L16 22"
                  stroke="#2C5F7C"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="10" cy="8" r="1" fill="#2C5F7C" />
                <circle cx="14" cy="8" r="1" fill="#2C5F7C" />
              </svg>
            </div>

            {/* Badge */}
            <span className="inline-block rounded-full bg-[#F5A623]/10 px-3 py-1 text-xs font-semibold text-[#F5A623]">
              Nach rechtl. Prüfung
            </span>

            {/* Title */}
            <h3 className="mt-4 text-xl font-bold text-[#0A3D35]">
              Differentialdiagnostische Hinweise
            </h3>

            {/* Bullets */}
            <ul className="mt-4 space-y-3 text-[#6B7D77]">
              {[
                "Muster-Matching mit Symptomkonstellationen",
                "Leitlinien-Referenzen (DEGAM, DGN)",
                "Diagnostik-Checklisten",
                "ICD-10-Zuordnung",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <svg
                    className="mt-1 h-4 w-4 flex-shrink-0 text-[#2C5F7C]"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <circle cx="8" cy="8" r="3" fill="currentColor" />
                  </svg>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="mt-14 text-center text-sm italic text-[#6B7D77]">
          Kernprinzip: Der Arzt bleibt der Entscheider. anavio informiert,
          diagnostiziert nicht.
        </p>
      </div>
    </section>
  );
}
