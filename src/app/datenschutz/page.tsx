import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Datenschutz() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F7FAFA] min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h1 className="text-4xl font-bold text-[#0A3D35] mb-2">
            Datenschutzerkl&auml;rung
          </h1>
          <p className="text-[#6B7D77] text-lg mb-12">Stand: M&auml;rz 2026</p>

          {/* 1. Verantwortlicher */}
          <h2 className="text-xl font-semibold text-[#0A3D35] mt-10 mb-3">
            1. Verantwortlicher
          </h2>
          <p className="text-[#3A4A44] leading-relaxed">
            Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und
            anderer nationaler Datenschutzgesetze sowie sonstiger
            datenschutzrechtlicher Bestimmungen ist:
          </p>
          <p className="text-[#3A4A44] leading-relaxed mt-3">
            anavio GmbH (i.Gr.)
            <br />
            [Stra&szlig;e und Hausnummer]
            <br />
            [PLZ] [Ort]
            <br />
            Deutschland
            <br />
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

          {/* 2. Datenschutzbeauftragter */}
          <h2 className="text-xl font-semibold text-[#0A3D35] mt-10 mb-3">
            2. Datenschutzbeauftragter
          </h2>
          <p className="text-[#3A4A44] leading-relaxed">
            [Name des Datenschutzbeauftragten]
            <br />
            [Kontaktadresse des DSB]
            <br />
            E-Mail: [E-Mail-Adresse des DSB]
          </p>
          <p className="text-[#6B7D77] italic mt-2 text-sm">
            Sofern kein Datenschutzbeauftragter bestellt werden muss, wenden Sie sich
            bitte direkt an den Verantwortlichen.
          </p>

          {/* 3. Erhebung und Verarbeitung */}
          <h2 className="text-xl font-semibold text-[#0A3D35] mt-10 mb-3">
            3. Erhebung und Verarbeitung personenbezogener Daten
          </h2>
          <p className="text-[#3A4A44] leading-relaxed">
            Beim Besuch unserer Website werden automatisch technische Daten erhoben,
            die Ihr Browser an unseren Server &uuml;bermittelt. Dies umfasst
            insbesondere:
          </p>
          <ul className="list-disc list-inside text-[#3A4A44] leading-relaxed mt-3 space-y-1 ml-4">
            <li>IP-Adresse des anfragenden Rechners</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Name und URL der abgerufenen Datei</li>
            <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
            <li>
              Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie
              der Name Ihres Access-Providers
            </li>
          </ul>
          <p className="text-[#3A4A44] leading-relaxed mt-3">
            Diese Daten werden ausschlie&szlig;lich zur Gew&auml;hrleistung eines
            st&ouml;rungsfreien Betriebs der Website und zur Verbesserung unseres
            Angebots ausgewertet. Eine Zuordnung dieser Daten zu einer bestimmten
            Person ist uns nicht m&ouml;glich. Eine Zusammenf&uuml;hrung dieser Daten
            mit anderen Datenquellen wird nicht vorgenommen.
          </p>

          {/* 4. Gesundheitsdaten */}
          <h2 className="text-xl font-semibold text-[#0A3D35] mt-10 mb-3">
            4. Gesundheitsdaten (Art. 9 DSGVO)
          </h2>
          <p className="text-[#3A4A44] leading-relaxed">
            Im Rahmen unserer digitalen Anamnese-Plattform werden besondere Kategorien
            personenbezogener Daten im Sinne von Art. 9 Abs. 1 DSGVO verarbeitet,
            insbesondere Gesundheitsdaten. Diese Verarbeitung erfolgt
            ausschlie&szlig;lich:
          </p>
          <ul className="list-disc list-inside text-[#3A4A44] leading-relaxed mt-3 space-y-1 ml-4">
            <li>
              auf Grundlage Ihrer ausdr&uuml;cklichen Einwilligung gem&auml;&szlig;
              Art. 9 Abs. 2 lit. a DSGVO,
            </li>
            <li>
              im Rahmen der digitalen Anamnese vor einem Arztbesuch in der
              behandelnden Praxis,
            </li>
            <li>
              zum Zweck der strukturierten Aufbereitung und &Uuml;bermittlung an die
              behandelnde Praxis.
            </li>
          </ul>
          <p className="text-[#3A4A44] leading-relaxed mt-3">
            Die Einwilligung kann jederzeit mit Wirkung f&uuml;r die Zukunft
            widerrufen werden. Ohne Ihre ausdr&uuml;ckliche Einwilligung werden keine
            Gesundheitsdaten erhoben oder verarbeitet. Die Verarbeitung
            von Gesundheitsdaten erfolgt unter Beachtung der &auml;rztlichen
            Schweigepflicht und ausschlie&szlig;lich im Auftrag der behandelnden
            Praxis.
          </p>

          {/* 5. Rechtsgrundlagen */}
          <h2 className="text-xl font-semibold text-[#0A3D35] mt-10 mb-3">
            5. Rechtsgrundlagen der Verarbeitung
          </h2>
          <p className="text-[#3A4A44] leading-relaxed">
            Die Verarbeitung personenbezogener Daten erfolgt auf Basis folgender
            Rechtsgrundlagen:
          </p>
          <ul className="list-disc list-inside text-[#3A4A44] leading-relaxed mt-3 space-y-2 ml-4">
            <li>
              <span className="font-medium text-[#0A3D35]">
                Art. 6 Abs. 1 lit. a DSGVO (Einwilligung):
              </span>{" "}
              Soweit Sie uns eine Einwilligung zur Verarbeitung personenbezogener
              Daten erteilt haben, insbesondere f&uuml;r die Verarbeitung von
              Gesundheitsdaten.
            </li>
            <li>
              <span className="font-medium text-[#0A3D35]">
                Art. 6 Abs. 1 lit. b DSGVO (Vertragserf&uuml;llung):
              </span>{" "}
              Soweit die Verarbeitung f&uuml;r die Erf&uuml;llung eines Vertrags mit
              Ihnen oder zur Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen
              erforderlich ist.
            </li>
            <li>
              <span className="font-medium text-[#0A3D35]">
                Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse):
              </span>{" "}
              Soweit die Verarbeitung zur Wahrung berechtigter Interessen unseres
              Unternehmens oder eines Dritten erforderlich ist, sofern nicht die
              Interessen oder Grundrechte der betroffenen Person &uuml;berwiegen.
              Dies betrifft insbesondere den Betrieb und die Sicherheit unserer
              Website.
            </li>
          </ul>

          {/* 6. Auftragsverarbeitung */}
          <h2 className="text-xl font-semibold text-[#0A3D35] mt-10 mb-3">
            6. Auftragsverarbeitung
          </h2>
          <p className="text-[#3A4A44] leading-relaxed">
            Soweit wir personenbezogene Daten im Auftrag von Arztpraxen verarbeiten,
            geschieht dies auf Grundlage von Auftragsverarbeitungsvertr&auml;gen
            gem&auml;&szlig; Art. 28 DSGVO. Diese Vertr&auml;ge regeln insbesondere:
          </p>
          <ul className="list-disc list-inside text-[#3A4A44] leading-relaxed mt-3 space-y-1 ml-4">
            <li>Gegenstand und Dauer der Verarbeitung</li>
            <li>Art und Zweck der Verarbeitung</li>
            <li>Art der personenbezogenen Daten und Kategorien betroffener Personen</li>
            <li>
              Pflichten und Rechte des Verantwortlichen (der Arztpraxis) und des
              Auftragsverarbeiters (anavio)
            </li>
            <li>
              Technische und organisatorische Ma&szlig;nahmen zum Schutz der Daten
            </li>
          </ul>
          <p className="text-[#3A4A44] leading-relaxed mt-3">
            Die Arztpraxis bleibt in jedem Fall Verantwortlicher f&uuml;r die
            Patientendaten. anavio handelt ausschlie&szlig;lich nach Weisung der
            jeweiligen Praxis.
          </p>

          {/* 7. Hosting und technische Sicherheit */}
          <h2 className="text-xl font-semibold text-[#0A3D35] mt-10 mb-3">
            7. Hosting und technische Sicherheit
          </h2>
          <p className="text-[#3A4A44] leading-relaxed">
            Unsere Plattform und alle damit verbundenen Daten werden ausschlie&szlig;lich
            auf Servern in Deutschland gehostet. Wir setzen umfangreiche technische
            und organisatorische Ma&szlig;nahmen zum Schutz Ihrer Daten ein,
            darunter:
          </p>
          <ul className="list-disc list-inside text-[#3A4A44] leading-relaxed mt-3 space-y-1 ml-4">
            <li>
              Verschl&uuml;sselung s&auml;mtlicher Daten&uuml;bertragungen mittels
              TLS 1.3
            </li>
            <li>
              Verschl&uuml;sselung gespeicherter Daten mittels AES-256
            </li>
            <li>
              Hosting bei einem nach ISO 27001 zertifizierten Rechenzentrum in
              Deutschland
            </li>
            <li>
              Regelm&auml;&szlig;ige Sicherheitsaudits und Penetrationstests
            </li>
            <li>
              Zugriffskontrolle und Protokollierung aller Datenzugriffe
            </li>
          </ul>

          {/* 8. Cookies */}
          <h2 className="text-xl font-semibold text-[#0A3D35] mt-10 mb-3">
            8. Cookies
          </h2>
          <p className="text-[#3A4A44] leading-relaxed">
            Unsere Website verwendet ausschlie&szlig;lich technisch notwendige
            Cookies, die f&uuml;r den Betrieb der Website erforderlich sind. Diese
            Cookies dienen der Bereitstellung grundlegender Funktionen wie der
            Seitennavigation und dem Zugang zu gesch&uuml;tzten Bereichen der
            Website.
          </p>
          <p className="text-[#3A4A44] leading-relaxed mt-3">
            Tracking-Cookies oder Cookies zu Werbezwecken werden nicht eingesetzt.
            Analysetools von Drittanbietern werden nur mit Ihrer ausdr&uuml;cklichen
            Einwilligung aktiviert. Sie k&ouml;nnen Ihren Browser so einstellen, dass
            Sie &uuml;ber das Setzen von Cookies informiert werden und Cookies nur im
            Einzelfall erlauben.
          </p>

          {/* 9. Ihre Rechte */}
          <h2 className="text-xl font-semibold text-[#0A3D35] mt-10 mb-3">
            9. Ihre Rechte als betroffene Person
          </h2>
          <p className="text-[#3A4A44] leading-relaxed">
            Sie haben gegen&uuml;ber uns folgende Rechte hinsichtlich der Sie
            betreffenden personenbezogenen Daten:
          </p>
          <ul className="list-disc list-inside text-[#3A4A44] leading-relaxed mt-3 space-y-2 ml-4">
            <li>
              <span className="font-medium text-[#0A3D35]">
                Recht auf Auskunft (Art. 15 DSGVO):
              </span>{" "}
              Sie k&ouml;nnen Auskunft dar&uuml;ber verlangen, ob und welche
              personenbezogenen Daten wir von Ihnen verarbeiten.
            </li>
            <li>
              <span className="font-medium text-[#0A3D35]">
                Recht auf Berichtigung (Art. 16 DSGVO):
              </span>{" "}
              Sie k&ouml;nnen die Berichtigung unrichtiger oder die
              Vervollst&auml;ndigung unvollst&auml;ndiger Daten verlangen.
            </li>
            <li>
              <span className="font-medium text-[#0A3D35]">
                Recht auf L&ouml;schung (Art. 17 DSGVO):
              </span>{" "}
              Sie k&ouml;nnen die L&ouml;schung Ihrer personenbezogenen Daten
              verlangen, sofern die Voraussetzungen hierf&uuml;r vorliegen.
            </li>
            <li>
              <span className="font-medium text-[#0A3D35]">
                Recht auf Einschr&auml;nkung der Verarbeitung (Art. 18 DSGVO):
              </span>{" "}
              Sie k&ouml;nnen unter bestimmten Voraussetzungen die
              Einschr&auml;nkung der Verarbeitung Ihrer Daten verlangen.
            </li>
            <li>
              <span className="font-medium text-[#0A3D35]">
                Recht auf Daten&uuml;bertragbarkeit (Art. 20 DSGVO):
              </span>{" "}
              Sie k&ouml;nnen verlangen, dass wir Ihnen Ihre Daten in einem
              strukturierten, g&auml;ngigen und maschinenlesbaren Format
              &uuml;bermitteln.
            </li>
            <li>
              <span className="font-medium text-[#0A3D35]">
                Widerspruchsrecht (Art. 21 DSGVO):
              </span>{" "}
              Sie k&ouml;nnen jederzeit gegen die Verarbeitung Ihrer Daten
              Widerspruch einlegen, sofern die Verarbeitung auf Art. 6 Abs. 1 lit. e
              oder f DSGVO beruht.
            </li>
            <li>
              <span className="font-medium text-[#0A3D35]">
                Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO):
              </span>{" "}
              Sie k&ouml;nnen eine erteilte Einwilligung jederzeit mit Wirkung
              f&uuml;r die Zukunft widerrufen. Die Rechtm&auml;&szlig;igkeit der bis
              zum Widerruf erfolgten Verarbeitung bleibt davon unber&uuml;hrt.
            </li>
          </ul>
          <p className="text-[#3A4A44] leading-relaxed mt-3">
            Zur Aus&uuml;bung Ihrer Rechte wenden Sie sich bitte an:{" "}
            <a
              href="mailto:kontakt@anavio.de"
              className="text-[#0C8A72] underline underline-offset-2"
            >
              kontakt@anavio.de
            </a>
          </p>

          {/* 10. Loeschfristen */}
          <h2 className="text-xl font-semibold text-[#0A3D35] mt-10 mb-3">
            10. L&ouml;schfristen
          </h2>
          <p className="text-[#3A4A44] leading-relaxed">
            Personenbezogene Daten, die im Rahmen der digitalen Anamnese erhoben
            werden, werden nach erfolgreicher &Uuml;bertragung an das
            Praxisverwaltungssystem (PVS) der behandelnden Praxis automatisch von
            unseren Servern gel&ouml;scht. Sollte eine &Uuml;bertragung nicht
            m&ouml;glich sein, werden die Daten sp&auml;testens nach 30 Tagen
            automatisch und unwiderruflich gel&ouml;scht.
          </p>
          <p className="text-[#3A4A44] leading-relaxed mt-3">
            Server-Logdaten werden nach 7 Tagen anonymisiert und nach 30 Tagen
            vollst&auml;ndig gel&ouml;scht, sofern keine gesetzlichen
            Aufbewahrungspflichten entgegenstehen.
          </p>

          {/* 11. Schweigepflicht */}
          <h2 className="text-xl font-semibold text-[#0A3D35] mt-10 mb-3">
            11. Schweigepflicht (&sect; 203 StGB)
          </h2>
          <p className="text-[#3A4A44] leading-relaxed">
            S&auml;mtliche Mitarbeiterinnen und Mitarbeiter der anavio GmbH (i.Gr.),
            die Zugang zu personenbezogenen Daten &mdash; insbesondere
            Gesundheitsdaten &mdash; haben, sind auf die Vertraulichkeit
            verpflichtet und unterliegen der Schweigepflicht gem&auml;&szlig; &sect;
            203 StGB. Dies umfasst auch externe Dienstleister, die im Rahmen der
            Auftragsverarbeitung t&auml;tig werden. Verst&ouml;&szlig;e gegen die
            Schweigepflicht werden strafrechtlich verfolgt.
          </p>

          {/* 12. Aufsichtsbehoerde */}
          <h2 className="text-xl font-semibold text-[#0A3D35] mt-10 mb-3">
            12. Aufsichtsbeh&ouml;rde
          </h2>
          <p className="text-[#3A4A44] leading-relaxed">
            Unbeschadet eines anderweitigen verwaltungsrechtlichen oder
            gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf Beschwerde bei
            einer Aufsichtsbeh&ouml;rde zu, wenn Sie der Ansicht sind, dass die
            Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die
            DSGVO verst&ouml;&szlig;t.
          </p>
          <p className="text-[#3A4A44] leading-relaxed mt-3">
            Die f&uuml;r uns zust&auml;ndige Aufsichtsbeh&ouml;rde ist:
          </p>
          <p className="text-[#3A4A44] leading-relaxed mt-2">
            [Zust&auml;ndige Landesdatenschutzbeh&ouml;rde]
            <br />
            [Adresse der Datenschutzbeh&ouml;rde]
            <br />
            [Kontaktdaten der Datenschutzbeh&ouml;rde]
          </p>

          {/* 13. Aenderungen */}
          <h2 className="text-xl font-semibold text-[#0A3D35] mt-10 mb-3">
            13. &Auml;nderungen dieser Datenschutzerkl&auml;rung
          </h2>
          <p className="text-[#3A4A44] leading-relaxed">
            Wir behalten uns vor, diese Datenschutzerkl&auml;rung anzupassen, damit
            sie stets den aktuellen rechtlichen Anforderungen entspricht oder um
            &Auml;nderungen unserer Leistungen in der Datenschutzerkl&auml;rung
            umzusetzen. F&uuml;r Ihren erneuten Besuch gilt dann die neue
            Datenschutzerkl&auml;rung. Wir empfehlen Ihnen, diese
            Datenschutzerkl&auml;rung regelm&auml;&szlig;ig zu pr&uuml;fen.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
