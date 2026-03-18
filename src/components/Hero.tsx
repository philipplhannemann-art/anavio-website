export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#F7FAFA] py-24 lg:py-32">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#E6F5F0] opacity-60 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-[#E6F5F0] opacity-40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start lg:gap-20">
          {/* ─── Left: Text Content (60%) ─────────────────── */}
          <div className="flex-1 lg:max-w-[60%]">
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
            <p className="animate-fade-in-up delay-200 mt-6 max-w-xl text-xl leading-relaxed text-[#6B7D77]">
              Die digitale Vorab-Anamnese f&uuml;r Haus- und Zahn&auml;rzte.
              Patienten erfassen ihre Symptome strukturiert vor dem Termin
              &ndash; Sie starten vorbereitet.
            </p>

            {/* Buttons */}
            <div className="animate-fade-in-up delay-300 mt-10 flex flex-wrap gap-4">
              <a
                href="#demo"
                className="inline-flex items-center rounded-full bg-[#0C8A72] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#0C8A72]/20 transition-all hover:bg-[#0A3D35] hover:shadow-xl"
              >
                Demo anfragen
              </a>
              <a
                href="#mehr-erfahren"
                className="inline-flex items-center rounded-full border-2 border-[#0C8A72] px-8 py-4 text-base font-semibold text-[#0C8A72] transition-all hover:bg-[#0C8A72] hover:text-white"
              >
                Mehr erfahren
              </a>
            </div>

            {/* Stat Badges */}
            <div className="animate-fade-in-up delay-400 mt-14 flex flex-wrap gap-8 lg:gap-12">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[#0C8A72]">10 Min</span>
                <span className="mt-1 text-sm text-[#6B7D77]">Zeitersparnis pro Patient</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[#0C8A72]">128.000+</span>
                <span className="mt-1 text-sm text-[#6B7D77]">Praxen im Zielmarkt</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[#0C8A72]">100%</span>
                <span className="mt-1 text-sm text-[#6B7D77]">DSGVO-konform</span>
              </div>
            </div>
          </div>

          {/* ─── Right: Dashboard Preview Card (40%) ─────── */}
          <div className="animate-slide-in-right delay-300 w-full flex-shrink-0 lg:w-[40%]">
            <div className="animate-float rounded-2xl border border-[#EDF2F2] bg-white p-6 shadow-xl">
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {/* Teal icon placeholder */}
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0C8A72]">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h6m-3-3v6m-7 4h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-bold text-[#0A3D35]">anavio</span>
                </div>
                <div className="flex gap-2">
                  <span className="rounded-full bg-[#E6F5F0] px-3 py-1 text-xs font-medium text-[#0C8A72]">
                    3 abgeschlossen
                  </span>
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600">
                    1 auff&auml;llig
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="my-4 h-px bg-[#EDF2F2]" />

              {/* Patient Field */}
              <div className="mb-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0C8A72]">
                  Patientin
                </span>
                <p className="mt-1 text-sm font-medium text-[#0A3D35]">
                  Maria M., 45 J. &mdash; Termin: 14:30 Uhr
                </p>
              </div>

              {/* Symptom Field */}
              <div className="mb-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0C8A72]">
                  Leitsymptom
                </span>
                <p className="mt-1 text-sm font-medium text-[#0A3D35]">
                  Kopfschmerz &mdash; temporal bds., dr&uuml;ckend, 6/10
                </p>
              </div>

              {/* Status Badges */}
              <div className="mb-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E6F5F0] px-3 py-1 text-xs font-medium text-[#0C8A72]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0C8A72]" />
                  Keine Red Flags
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  Analgetika-Hinweis
                </span>
              </div>

              {/* Action Button */}
              <button className="w-full rounded-xl bg-[#0C8A72] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0A3D35]">
                Anamnese &ouml;ffnen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
