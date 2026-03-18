export default function Security() {
  return (
    <section id="sicherheit" className="bg-[#F7FAFA] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#0C8A72]">
            DATENSCHUTZ & SICHERHEIT
          </p>
          <h2 className="mt-3 text-4xl font-bold text-[#0A3D35]">
            Höchste Sicherheitsstandards von Tag 1
          </h2>
          <p className="mt-4 text-lg text-[#6B7D77]">
            Gesundheitsdaten erfordern besonderen Schutz. Wir nehmen das sehr
            ernst.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left – DSGVO & Datenschutz */}
          <div className="rounded-2xl border border-[#EDF2F2] bg-white p-8">
            <h3 className="mb-6 text-lg font-bold text-[#0A3D35]">
              DSGVO & Datenschutz
            </h3>
            <ul className="space-y-4">
              {[
                "Art. 9 DSGVO: Explizite Einwilligung für Gesundheitsdaten",
                "Art. 28 DSGVO: AV-Verträge mit jeder Praxis",
                "Hosting in Deutschland (ISO 27001 zertifiziert)",
                "Ende-zu-Ende-Verschlüsselung (TLS 1.3 + AES-256)",
                "Automatisches Löschkonzept nach PVS-Übertragung",
                "Datenschutz-Folgenabschätzung (Art. 35)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  {/* Teal checkmark circle */}
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <circle cx="10" cy="10" r="10" fill="#E6F5F0" />
                    <path
                      d="M6 10.5L8.5 13L14 7.5"
                      stroke="#0C8A72"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm leading-relaxed text-[#6B7D77]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right – Ihre Daten, Ihre Kontrolle */}
          <div className="rounded-2xl border border-[#EDF2F2] bg-white p-8">
            <h3 className="mb-6 text-lg font-bold text-[#0A3D35]">
              Ihre Daten, Ihre Kontrolle
            </h3>
            <ul className="space-y-4">
              {[
                "Keine Patientendaten auf Endger\u00e4ten gespeichert",
                "Automatische L\u00f6schung nach \u00dcbertragung ans PVS",
                "Kein Zugriff durch Dritte \u2014 auch nicht durch anavio",
                "\u00a7 203 StGB: Schweigepflicht vollst\u00e4ndig gew\u00e4hrleistet",
                "Volle Kontrolle durch die Praxis \u2014 jederzeit k\u00fcndbar",
                "Keine Weitergabe an Dritte, keine Werbung",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10 2L4 5V10C4 14 7 17.5 10 18.5C13 17.5 16 14 16 10V5L10 2Z"
                      fill="#E6F5F015"
                      stroke="#0C8A72"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.5 10L9.5 12L13 8"
                      stroke="#0C8A72"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm leading-relaxed text-[#6B7D77]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* PVS Integration Phases */}
        <div className="mt-16">
          <h3 className="mb-8 text-center text-lg font-bold text-[#0A3D35]">
            PVS-Integrationspfad
          </h3>
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-0">
            {/* Phase 1 */}
            <div className="flex w-full max-w-xs flex-col items-center rounded-2xl border border-[#EDF2F2] bg-white px-6 py-6 text-center">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#27AE60]/10">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <circle cx="10" cy="10" r="8" stroke="#27AE60" strokeWidth="2" />
                  <path
                    d="M6.5 10.5L9 13L14 7.5"
                    stroke="#27AE60"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#27AE60]">
                Phase 1
              </p>
              <p className="mt-1 text-sm font-bold text-[#0A3D35]">
                PDF + Dashboard
              </p>
            </div>

            {/* Arrow 1 */}
            <div className="hidden md:flex md:items-center md:px-3">
              <svg
                className="h-5 w-8 text-[#EDF2F2]"
                viewBox="0 0 32 20"
                fill="none"
              >
                <path
                  d="M0 10H28M28 10L22 4M28 10L22 16"
                  stroke="#0C8A72"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {/* Mobile arrow */}
            <div className="flex md:hidden">
              <svg
                className="h-8 w-5"
                viewBox="0 0 20 32"
                fill="none"
              >
                <path
                  d="M10 0V28M10 28L4 22M10 28L16 22"
                  stroke="#0C8A72"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Phase 2 */}
            <div className="flex w-full max-w-xs flex-col items-center rounded-2xl border border-[#EDF2F2] bg-white px-6 py-6 text-center">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#F5A623]/10">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <rect
                    x="3"
                    y="3"
                    width="14"
                    height="14"
                    rx="3"
                    stroke="#F5A623"
                    strokeWidth="2"
                  />
                  <path
                    d="M7 10H13"
                    stroke="#F5A623"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10 7V13"
                    stroke="#F5A623"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#F5A623]">
                Phase 2
              </p>
              <p className="mt-1 text-sm font-bold text-[#0A3D35]">
                GDT-Schnittstelle
              </p>
              <p className="mt-0.5 text-xs text-[#6B7D77]">
                CGM, medatixx, Dampsoft
              </p>
            </div>

            {/* Arrow 2 */}
            <div className="hidden md:flex md:items-center md:px-3">
              <svg
                className="h-5 w-8 text-[#EDF2F2]"
                viewBox="0 0 32 20"
                fill="none"
              >
                <path
                  d="M0 10H28M28 10L22 4M28 10L22 16"
                  stroke="#0C8A72"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {/* Mobile arrow */}
            <div className="flex md:hidden">
              <svg
                className="h-8 w-5"
                viewBox="0 0 20 32"
                fill="none"
              >
                <path
                  d="M10 0V28M10 28L4 22M10 28L16 22"
                  stroke="#0C8A72"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Phase 3 */}
            <div className="flex w-full max-w-xs flex-col items-center rounded-2xl border border-[#EDF2F2] bg-white px-6 py-6 text-center">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#2C5F7C]/10">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="7"
                    stroke="#2C5F7C"
                    strokeWidth="2"
                  />
                  <path
                    d="M10 6V10L13 13"
                    stroke="#2C5F7C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#2C5F7C]">
                Phase 3
              </p>
              <p className="mt-1 text-sm font-bold text-[#0A3D35]">
                REST-API & FHIR
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
