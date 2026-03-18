import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Impressum() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F7FAFA] min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h1 className="text-4xl font-bold text-[#0A3D35] mb-2">Impressum</h1>
          <p className="text-[#6B7D77] text-lg mb-12">
            Angaben gem&auml;&szlig; &sect; 5 TMG
          </p>

          {/* Anbieter */}
          <h2 className="text-xl font-semibold text-[#0A3D35] mt-10 mb-3">
            Anbieter
          </h2>
          <p className="text-[#3A4A44] leading-relaxed">
            anavio GmbH (i.Gr.)
            <br />
            [Stra&szlig;e und Hausnummer]
            <br />
            [PLZ] [Ort]
            <br />
            Deutschland
          </p>

          {/* Vertreten durch */}
          <h2 className="text-xl font-semibold text-[#0A3D35] mt-10 mb-3">
            Vertreten durch
          </h2>
          <p className="text-[#3A4A44] leading-relaxed">
            Gesch&auml;ftsf&uuml;hrer: [Name des Gesch&auml;ftsf&uuml;hrers]
          </p>

          {/* Kontakt */}
          <h2 className="text-xl font-semibold text-[#0A3D35] mt-10 mb-3">
            Kontakt
          </h2>
          <p className="text-[#3A4A44] leading-relaxed">
            E-Mail:{" "}
            <a
              href="mailto:kontakt@anavio.de"
              className="text-[#0C8A72] underline underline-offset-2"
            >
              kontakt@anavio.de
            </a>
            <br />
            Telefon: [Telefonnummer]
          </p>

          {/* Registereintrag */}
          <h2 className="text-xl font-semibold text-[#0A3D35] mt-10 mb-3">
            Registereintrag
          </h2>
          <p className="text-[#3A4A44] leading-relaxed">
            Handelsregister: [Amtsgericht]
            <br />
            Registernummer: HRB [Nummer]
            <br />
            <span className="text-[#6B7D77] italic">
              (wird nach Gr&uuml;ndung erg&auml;nzt)
            </span>
          </p>

          {/* Umsatzsteuer-ID */}
          <h2 className="text-xl font-semibold text-[#0A3D35] mt-10 mb-3">
            Umsatzsteuer-Identifikationsnummer
          </h2>
          <p className="text-[#3A4A44] leading-relaxed">
            Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27a
            Umsatzsteuergesetz:
            <br />
            <span className="text-[#6B7D77] italic">
              Wird nach Gr&uuml;ndung erg&auml;nzt.
            </span>
          </p>

          {/* Verantwortlich fuer den Inhalt */}
          <h2 className="text-xl font-semibold text-[#0A3D35] mt-10 mb-3">
            Verantwortlich f&uuml;r den Inhalt nach &sect; 55 Abs. 2 RStV
          </h2>
          <p className="text-[#3A4A44] leading-relaxed">
            [Name]
            <br />
            [Stra&szlig;e und Hausnummer]
            <br />
            [PLZ] [Ort]
          </p>

          {/* Haftungsausschluss */}
          <h2 className="text-xl font-semibold text-[#0A3D35] mt-10 mb-3">
            Haftungsausschluss
          </h2>

          <h3 className="text-lg font-medium text-[#0A3D35] mt-6 mb-2">
            Haftung f&uuml;r Inhalte
          </h3>
          <p className="text-[#3A4A44] leading-relaxed">
            Die Inhalte unserer Seiten wurden mit gr&ouml;&szlig;ter Sorgfalt erstellt.
            F&uuml;r die Richtigkeit, Vollst&auml;ndigkeit und Aktualit&auml;t der Inhalte
            k&ouml;nnen wir jedoch keine Gew&auml;hr &uuml;bernehmen. Als Diensteanbieter
            sind wir gem&auml;&szlig; &sect; 7 Abs. 1 TMG f&uuml;r eigene Inhalte auf
            diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach &sect;&sect; 8
            bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
            &uuml;bermittelte oder gespeicherte fremde Informationen zu &uuml;berwachen oder
            nach Umst&auml;nden zu forschen, die auf eine rechtswidrige T&auml;tigkeit
            hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon unber&uuml;hrt. Eine
            diesbez&uuml;gliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
            konkreten Rechtsverletzung m&ouml;glich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>

          <h3 className="text-lg font-medium text-[#0A3D35] mt-6 mb-2">
            Haftung f&uuml;r Links
          </h3>
          <p className="text-[#3A4A44] leading-relaxed">
            Unser Angebot enth&auml;lt Links zu externen Webseiten Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir f&uuml;r diese
            fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen. F&uuml;r die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
            verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
            m&ouml;gliche Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige
            Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
            inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
            einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Links umgehend entfernen.
          </p>

          <h3 className="text-lg font-medium text-[#0A3D35] mt-6 mb-2">
            Urheberrecht
          </h3>
          <p className="text-[#3A4A44] leading-relaxed">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
            unterliegen dem deutschen Urheberrecht. Die Vervielf&auml;ltigung, Bearbeitung,
            Verbreitung und jede Art der Verwertung au&szlig;erhalb der Grenzen des
            Urheberrechtes bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors
            bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r den
            privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
            Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
            beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten
            Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um
            einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Inhalte umgehend entfernen.
          </p>

          {/* Streitschlichtung */}
          <h2 className="text-xl font-semibold text-[#0A3D35] mt-10 mb-3">
            Streitschlichtung
          </h2>
          <p className="text-[#3A4A44] leading-relaxed">
            Die Europ&auml;ische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0C8A72] underline underline-offset-2"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            .
          </p>
          <p className="text-[#3A4A44] leading-relaxed mt-3">
            Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder
            verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
