export function CTA() {
  return (
    <section id="demo" className="bg-[#1A2332] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Bereit f&uuml;r eine bessere Anamnese?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-400">
            Vereinbaren Sie eine unverbindliche Demo und sehen Sie, wie anavio
            Ihren Praxisalltag verbessert.
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="mx-auto mt-14 max-w-xl rounded-2xl bg-white p-10 shadow-2xl">
          <form className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="cta-name"
                className="mb-1 block text-sm font-medium text-[#3A4A44]"
              >
                Name
              </label>
              <input
                id="cta-name"
                type="text"
                placeholder="Dr. Max Mustermann"
                className="w-full rounded-lg border border-[#EDF2F2] p-4 text-[#0A3D35] placeholder-[#B8C8C4] transition-colors focus:border-[#0C8A72] focus:ring-2 focus:ring-[#0C8A72]/20 focus:outline-none"
              />
            </div>

            {/* E-Mail */}
            <div>
              <label
                htmlFor="cta-email"
                className="mb-1 block text-sm font-medium text-[#3A4A44]"
              >
                E-Mail
              </label>
              <input
                id="cta-email"
                type="email"
                placeholder="arzt@praxis.de"
                className="w-full rounded-lg border border-[#EDF2F2] p-4 text-[#0A3D35] placeholder-[#B8C8C4] transition-colors focus:border-[#0C8A72] focus:ring-2 focus:ring-[#0C8A72]/20 focus:outline-none"
              />
            </div>

            {/* Praxisname */}
            <div>
              <label
                htmlFor="cta-praxis"
                className="mb-1 block text-sm font-medium text-[#3A4A44]"
              >
                Praxisname
              </label>
              <input
                id="cta-praxis"
                type="text"
                placeholder="Hausarztpraxis am Marktplatz"
                className="w-full rounded-lg border border-[#EDF2F2] p-4 text-[#0A3D35] placeholder-[#B8C8C4] transition-colors focus:border-[#0C8A72] focus:ring-2 focus:ring-[#0C8A72]/20 focus:outline-none"
              />
            </div>

            {/* Fachrichtung */}
            <div>
              <label
                htmlFor="cta-fach"
                className="mb-1 block text-sm font-medium text-[#3A4A44]"
              >
                Fachrichtung
              </label>
              <select
                id="cta-fach"
                defaultValue=""
                className="w-full rounded-lg border border-[#EDF2F2] p-4 text-[#0A3D35] transition-colors focus:border-[#0C8A72] focus:ring-2 focus:ring-[#0C8A72]/20 focus:outline-none"
              >
                <option value="" disabled className="text-[#B8C8C4]">
                  Bitte w&auml;hlen
                </option>
                <option value="hausarzt">Hausarzt</option>
                <option value="zahnarzt">Zahnarzt</option>
                <option value="orthopaede">Orthop&auml;de</option>
                <option value="hno">HNO</option>
                <option value="kinderarzt">Kinderarzt</option>
                <option value="gynaekologe">Gyn&auml;kologe</option>
                <option value="sonstige">Sonstige</option>
              </select>
            </div>

            {/* Nachricht */}
            <div>
              <label
                htmlFor="cta-message"
                className="mb-1 block text-sm font-medium text-[#3A4A44]"
              >
                Nachricht (optional)
              </label>
              <textarea
                id="cta-message"
                rows={4}
                placeholder="Ihre Nachricht an uns..."
                className="w-full resize-none rounded-lg border border-[#EDF2F2] p-4 text-[#0A3D35] placeholder-[#B8C8C4] transition-colors focus:border-[#0C8A72] focus:ring-2 focus:ring-[#0C8A72]/20 focus:outline-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-lg bg-[#0C8A72] py-4 text-base font-semibold text-white transition-colors hover:bg-[#0A3D35]"
            >
              Demo anfragen
            </button>
          </form>
        </div>

        {/* Direct Contact */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Oder schreiben Sie uns direkt:{" "}
          <a
            href="mailto:kontakt@anavio.de"
            className="text-[#3ECBB0] underline underline-offset-2 transition-colors hover:text-[#10A88A]"
          >
            kontakt@anavio.de
          </a>
        </p>

        {/* Stats Row */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            { value: "60+", label: "Arztpraxen" },
            { value: "5", label: "Fachrichtungen" },
            { value: "10 Min", label: "Zeitersparnis" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
