"use client";

import { useState, type FormEvent } from "react";

export function CTA() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/philippluca@hotmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Name: formData.get("name"),
          "E-Mail": formData.get("email"),
          Praxisname: formData.get("praxis"),
          Fachrichtung: formData.get("fachrichtung"),
          Nachricht: formData.get("nachricht") || "–",
          _subject: "Neue Demo-Anfrage über anavio.de",
          _template: "table",
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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
          {status === "success" ? (
            <div className="py-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#E6F5F0]">
                <svg className="h-8 w-8 text-[#0C8A72]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0A3D35]">Vielen Dank!</h3>
              <p className="mt-2 text-[#6B7D77]">
                Wir melden uns schnellstm&ouml;glich bei Ihnen.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm font-medium text-[#0C8A72] underline underline-offset-2 hover:text-[#0A3D35]"
              >
                Weitere Anfrage senden
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
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
                  name="name"
                  type="text"
                  required
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
                  name="email"
                  type="email"
                  required
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
                  name="praxis"
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
                  name="fachrichtung"
                  defaultValue=""
                  className="w-full rounded-lg border border-[#EDF2F2] p-4 text-[#0A3D35] transition-colors focus:border-[#0C8A72] focus:ring-2 focus:ring-[#0C8A72]/20 focus:outline-none"
                >
                  <option value="" disabled className="text-[#B8C8C4]">
                    Bitte w&auml;hlen
                  </option>
                  <option value="allgemeinmedizin">Allgemeinmedizin / Hausarzt</option>
                  <option value="innere">Innere Medizin</option>
                  <option value="orthopaede">Orthop&auml;die</option>
                  <option value="kardiologie">Kardiologie</option>
                  <option value="neurologie">Neurologie</option>
                  <option value="hno">HNO</option>
                  <option value="dermatologie">Dermatologie</option>
                  <option value="gynaekologe">Gyn&auml;kologie</option>
                  <option value="urologie">Urologie</option>
                  <option value="kinderarzt">Kinder- und Jugendmedizin</option>
                  <option value="augenheilkunde">Augenheilkunde</option>
                  <option value="psychiatrie">Psychiatrie / Psychotherapie</option>
                  <option value="chirurgie">Chirurgie</option>
                  <option value="pneumologie">Pneumologie</option>
                  <option value="gastroenterologie">Gastroenterologie</option>
                  <option value="endokrinologie">Endokrinologie / Diabetologie</option>
                  <option value="rheumatologie">Rheumatologie</option>
                  <option value="zahnarzt">Zahnmedizin</option>
                  <option value="radiologie">Radiologie</option>
                  <option value="anaesthesie">An&auml;sthesiologie</option>
                  <option value="notfallmedizin">Notfallmedizin</option>
                  <option value="mvz">MVZ / Praxisklinik</option>
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
                  name="nachricht"
                  rows={4}
                  placeholder="Ihre Nachricht an uns..."
                  className="w-full resize-none rounded-lg border border-[#EDF2F2] p-4 text-[#0A3D35] placeholder-[#B8C8C4] transition-colors focus:border-[#0C8A72] focus:ring-2 focus:ring-[#0C8A72]/20 focus:outline-none"
                />
              </div>

              {/* Error message */}
              {status === "error" && (
                <p className="text-sm text-[#E84C3D]">
                  Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-lg bg-[#0C8A72] py-4 text-base font-semibold text-white transition-colors hover:bg-[#0A3D35] disabled:opacity-60"
              >
                {status === "sending" ? "Wird gesendet..." : "Demo anfragen"}
              </button>
            </form>
          )}
        </div>

        {/* Stats Row */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            { value: "60+", label: "Arztpraxen" },
            { value: "5", label: "Fachrichtungen" },
            { value: "15 Min", label: "Zeitersparnis" },
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
