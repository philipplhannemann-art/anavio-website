import Image from "next/image";

const productLinks = [
  { label: "Funktionen", href: "/#funktionen" },
  { label: "Für Ärzte", href: "/fuer-aerzte" },
  { label: "Sicherheit", href: "/#sicherheit" },
];

const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/agb" },
];

export function Footer() {
  return (
    <footer className="bg-[#1A2332] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/anavio-icon.svg"
                alt="anavio"
                width={28}
                height={28}
                className="h-7 w-auto"
              />
              <span className="text-xl font-semibold tracking-tight text-white">
                anavio
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              Digitale Anamnese f&uuml;r die Prim&auml;rversorgung
            </p>
          </div>

          {/* Column 2: Produkt */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Produkt
            </h3>
            <ul className="mt-4 space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-[#3ECBB0]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Rechtliches */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Rechtliches
            </h3>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-[#3ECBB0]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy; 2026 anavio. Alle Rechte vorbehalten.
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-500">
            Made in Germany
            <span
              className="inline-flex h-3.5 w-5 flex-col overflow-hidden rounded-sm"
              aria-label="Deutsche Flagge"
            >
              <span className="h-1/3 w-full bg-black" />
              <span className="h-1/3 w-full bg-red-600" />
              <span className="h-1/3 w-full bg-yellow-400" />
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
