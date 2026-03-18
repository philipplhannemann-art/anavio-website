import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function AGB() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F7FAFA] min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h1 className="text-4xl font-bold text-[#0A3D35] mb-2">
            Allgemeine Gesch&auml;ftsbedingungen
          </h1>
          <p className="text-[#6B7D77] text-lg mb-1">
            von Leon Marc Schuler (anavio) f&uuml;r die Nutzung der digitalen
            Anamnese-Plattform
          </p>
          <p className="text-[#6B7D77] text-lg mb-12">Stand: M&auml;rz 2026</p>

          {/* § 1 Geltungsbereich */}
          <h2 className="text-xl font-semibold text-[#0A3D35] mt-10 mb-3">
            &sect; 1 Geltungsbereich
          </h2>
          <p className="text-[#3A4A44] leading-relaxed">
            (1) Diese Allgemeinen Gesch&auml;ftsbedingungen (nachfolgend
            &bdquo;AGB&ldquo;) gelten f&uuml;r s&auml;mtliche
            Vertragsbeziehungen zwischen Leon Marc Schuler, Kaiser-Friedrich-Promenade 114, 61352 Bad Homburg vor der H&ouml;he
            (nachfolgend &bdquo;anavio&ldquo; oder &bdquo;Anbieter&ldquo;), und
            den Nutzern der digitalen Anamnese-Plattform (nachfolgend
            &bdquo;Nutzer&ldquo; oder &bdquo;Kunde&ldquo;).
          </p>
          <p className="text-[#3A4A44] leading-relaxed mt-3">
            (2) Nutzer im Sinne dieser AGB sind Arztpraxen, medizinische
            Einrichtungen und deren Mitarbeiter, die die Plattform zur
            Durchf&uuml;hrung digitaler Anamnesen einsetzen, sowie Patienten, die
            die digitale Anamnese ausf&uuml;llen.
          </p>
          <p className="text-[#3A4A44] leading-relaxed mt-3">
            (3) Abweichende, entgegenstehende oder erg&auml;nzende Allgemeine
            Gesch&auml;ftsbedingungen werden nur dann Vertragsbestandteil, wenn
            anavio ihrer Geltung ausdr&uuml;cklich schriftlich zugestimmt hat.
          </p>

          {/* § 2 Vertragsgegenstand */}
          <h2 className="text-xl font-semibold text-[#0A3D35] mt-10 mb-3">
            &sect; 2 Vertragsgegenstand
          </h2>
          <p className="text-[#3A4A44] leading-relaxed">
            (1) Gegenstand des Vertrags ist die Bereitstellung der digitalen
            Anamnese-Plattform von anavio. Die Plattform erm&ouml;glicht die
            digitale Erfassung, Strukturierung und &Uuml;bermittlung von
            Patientendaten an die behandelnde Arztpraxis.
          </p>
          <p className="text-[#3A4A44] leading-relaxed mt-3">
            (2) anavio stellt eine Software-as-a-Service-L&ouml;sung (SaaS) bereit,
            die &uuml;ber das Internet genutzt werden kann. Die Plattform umfasst
            die Erfassung von Anamnese-Daten, deren strukturierte Aufbereitung
            sowie die sichere &Uuml;bertragung an das Praxisverwaltungssystem
            (PVS) der jeweiligen Praxis.
          </p>
          <p className="text-[#3A4A44] leading-relaxed mt-3">
            (3) anavio erbringt keine medizinischen Leistungen und stellt keine
            Diagnosen. Die Plattform dient ausschlie&szlig;lich der
            Informationserfassung und -aufbereitung im Auftrag der behandelnden
            Praxis.
          </p>

          {/* § 3 Vertragsschluss */}
          <h2 className="text-xl font-semibold text-[#0A3D35] mt-10 mb-3">
            &sect; 3 Vertragsschluss
          </h2>
          <p className="text-[#3A4A44] leading-relaxed">
            (1) Der Vertrag zwischen anavio und dem Nutzer (Arztpraxis) kommt durch
            die Registrierung auf der Plattform und die Annahme dieser AGB
            zustande.
          </p>
          <p className="text-[#3A4A44] leading-relaxed mt-3">
            (2) Mit der Registrierung best&auml;tigt der Nutzer, dass er diese AGB
            gelesen und verstanden hat und mit deren Geltung einverstanden ist.
          </p>
          <p className="text-[#3A4A44] leading-relaxed mt-3">
            (3) anavio beh&auml;lt sich das Recht vor, die Registrierung ohne
            Angabe von Gr&uuml;nden abzulehnen.
          </p>

          {/* § 4 Leistungsbeschreibung */}
          <h2 className="text-xl font-semibold text-[#0A3D35] mt-10 mb-3">
            &sect; 4 Leistungsbeschreibung
          </h2>
          <p className="text-[#3A4A44] leading-relaxed">
            Die Leistungen von anavio umfassen insbesondere:
          </p>
          <ul className="list-disc list-inside text-[#3A4A44] leading-relaxed mt-3 space-y-2 ml-4">
            <li>
              Bereitstellung eines digitalen Patientenfragebogens, der von
              Patienten vor dem Arztbesuch ausgef&uuml;llt werden kann
            </li>
            <li>
              Strukturierte Zusammenfassung der Anamnese-Daten f&uuml;r die
              behandelnden &Auml;rzte
            </li>
            <li>
              Integration mit g&auml;ngigen Praxisverwaltungssystemen (PVS) zur
              automatischen Daten&uuml;bertragung
            </li>
            <li>
              Zugang zu einem Praxis-Dashboard zur Verwaltung und &Uuml;bersicht
              der digitalen Anamnesen
            </li>
            <li>
              Technischer Support w&auml;hrend der Gesch&auml;ftszeiten
            </li>
          </ul>
          <p className="text-[#3A4A44] leading-relaxed mt-3">
            Der genaue Leistungsumfang ergibt sich aus der jeweils gew&auml;hlten
            Tarifvariante und der individuellen Leistungsvereinbarung.
          </p>

          {/* § 5 Pflichten des Nutzers */}
          <h2 className="text-xl font-semibold text-[#0A3D35] mt-10 mb-3">
            &sect; 5 Pflichten des Nutzers
          </h2>
          <p className="text-[#3A4A44] leading-relaxed">
            (1) Der Nutzer verpflichtet sich, wahrheitsgem&auml;&szlig;e und
            vollst&auml;ndige Angaben bei der Registrierung und Nutzung der
            Plattform zu machen.
          </p>
          <p className="text-[#3A4A44] leading-relaxed mt-3">
            (2) Der Nutzer ist f&uuml;r die Einhaltung der datenschutzrechtlichen
            Bestimmungen in seinem Verantwortungsbereich selbst verantwortlich.
            Dies umfasst insbesondere die Einholung der Einwilligung von Patienten
            zur Nutzung der digitalen Anamnese, soweit erforderlich.
          </p>
          <p className="text-[#3A4A44] leading-relaxed mt-3">
            (3) Der Nutzer hat seine Zugangsdaten vertraulich zu behandeln und vor
            dem Zugriff Dritter zu sch&uuml;tzen. Bei Verdacht auf
            missbr&auml;uchliche Nutzung ist anavio unverz&uuml;glich zu
            informieren.
          </p>
          <p className="text-[#3A4A44] leading-relaxed mt-3">
            (4) Der Nutzer darf die Plattform nicht missbr&auml;uchlich nutzen,
            insbesondere nicht f&uuml;r rechtswidrige Zwecke einsetzen oder
            Handlungen vornehmen, die den Betrieb der Plattform
            beeintr&auml;chtigen k&ouml;nnen.
          </p>

          {/* § 6 Verfuegbarkeit */}
          <h2 className="text-xl font-semibold text-[#0A3D35] mt-10 mb-3">
            &sect; 6 Verf&uuml;gbarkeit
          </h2>
          <p className="text-[#3A4A44] leading-relaxed">
            (1) anavio ist bestrebt, eine m&ouml;glichst hohe Verf&uuml;gbarkeit
            der Plattform sicherzustellen. Eine Verf&uuml;gbarkeit von 100 % kann
            technisch nicht garantiert werden.
          </p>
          <p className="text-[#3A4A44] leading-relaxed mt-3">
            (2) anavio beh&auml;lt sich das Recht vor, die Plattform
            vor&uuml;bergehend einzuschr&auml;nken, sofern dies im Hinblick auf
            Wartungsarbeiten, Sicherheitsupdates oder sonstige technisch notwendige
            Ma&szlig;nahmen erforderlich ist. Geplante Wartungsfenster werden nach
            M&ouml;glichkeit vorab angek&uuml;ndigt.
          </p>
          <p className="text-[#3A4A44] leading-relaxed mt-3">
            (3) anavio haftet nicht f&uuml;r Ausf&auml;lle oder
            Beeintr&auml;chtigungen, die durch h&ouml;here Gewalt, St&ouml;rungen
            im Internet oder sonstige von anavio nicht zu vertretende
            Umst&auml;nde verursacht werden.
          </p>

          {/* § 7 Haftung */}
          <h2 className="text-xl font-semibold text-[#0A3D35] mt-10 mb-3">
            &sect; 7 Haftung
          </h2>
          <p className="text-[#3A4A44] leading-relaxed">
            (1) anavio haftet unbeschr&auml;nkt f&uuml;r Sch&auml;den aus der
            Verletzung des Lebens, des K&ouml;rpers oder der Gesundheit, die auf
            einer vors&auml;tzlichen oder fahrl&auml;ssigen Pflichtverletzung von
            anavio oder eines gesetzlichen Vertreters oder Erf&uuml;llungsgehilfen
            von anavio beruhen.
          </p>
          <p className="text-[#3A4A44] leading-relaxed mt-3">
            (2) F&uuml;r sonstige Sch&auml;den haftet anavio nur bei Vorsatz und
            grober Fahrl&auml;ssigkeit sowie bei der Verletzung wesentlicher
            Vertragspflichten (Kardinalpflichten). Bei leicht fahrl&auml;ssiger
            Verletzung wesentlicher Vertragspflichten ist die Haftung auf den
            vertragstypischen, vorhersehbaren Schaden begrenzt.
          </p>
          <p className="text-[#3A4A44] leading-relaxed mt-3">
            (3) anavio stellt ausdr&uuml;cklich keine medizinischen Diagnosen und
            &uuml;bernimmt keine Verantwortung f&uuml;r medizinische
            Entscheidungen, die auf Grundlage der &uuml;ber die Plattform
            erfassten Daten getroffen werden. Die Verantwortung f&uuml;r die
            medizinische Behandlung liegt ausschlie&szlig;lich bei der behandelnden
            Praxis.
          </p>
          <p className="text-[#3A4A44] leading-relaxed mt-3">
            (4) Die vorstehenden Haftungsbeschr&auml;nkungen gelten auch zugunsten
            der gesetzlichen Vertreter und Erf&uuml;llungsgehilfen von anavio.
          </p>

          {/* § 8 Datenschutz */}
          <h2 className="text-xl font-semibold text-[#0A3D35] mt-10 mb-3">
            &sect; 8 Datenschutz
          </h2>
          <p className="text-[#3A4A44] leading-relaxed">
            (1) anavio verarbeitet personenbezogene Daten in &Uuml;bereinstimmung
            mit der Datenschutz-Grundverordnung (DSGVO) und dem
            Bundesdatenschutzgesetz (BDSG).
          </p>
          <p className="text-[#3A4A44] leading-relaxed mt-3">
            (2) Einzelheiten zur Erhebung, Verarbeitung und Nutzung
            personenbezogener Daten entnehmen Sie bitte unserer{" "}
            <a
              href="/datenschutz"
              className="text-[#0C8A72] underline underline-offset-2"
            >
              Datenschutzerkl&auml;rung
            </a>
            .
          </p>
          <p className="text-[#3A4A44] leading-relaxed mt-3">
            (3) Soweit anavio im Auftrag der Praxis personenbezogene Daten
            verarbeitet, wird ein gesonderter Auftragsverarbeitungsvertrag
            gem&auml;&szlig; Art. 28 DSGVO geschlossen.
          </p>

          {/* § 9 Laufzeit und Kuendigung */}
          <h2 className="text-xl font-semibold text-[#0A3D35] mt-10 mb-3">
            &sect; 9 Laufzeit und K&uuml;ndigung
          </h2>
          <p className="text-[#3A4A44] leading-relaxed">
            (1) Der Vertrag wird auf unbestimmte Zeit geschlossen, sofern nicht
            schriftlich eine feste Vertragslaufzeit vereinbart wurde.
          </p>
          <p className="text-[#3A4A44] leading-relaxed mt-3">
            (2) Bei unbefristeten Vertr&auml;gen kann der Vertrag von beiden Seiten
            mit einer Frist von 3 Monaten zum Ende
            eines Kalendermonats gek&uuml;ndigt werden.
          </p>
          <p className="text-[#3A4A44] leading-relaxed mt-3">
            (3) Das Recht zur au&szlig;erordentlichen K&uuml;ndigung aus wichtigem
            Grund bleibt unber&uuml;hrt. Ein wichtiger Grund liegt insbesondere
            vor, wenn der Nutzer gegen wesentliche Bestimmungen dieser AGB
            verst&ouml;&szlig;t.
          </p>
          <p className="text-[#3A4A44] leading-relaxed mt-3">
            (4) Die K&uuml;ndigung bedarf der Schriftform. Die K&uuml;ndigung per
            E-Mail an{" "}
            <a
              href="mailto:kontakt@anavio.de"
              className="text-[#0C8A72] underline underline-offset-2"
            >
              kontakt@anavio.de
            </a>{" "}
            gen&uuml;gt der Schriftform.
          </p>
          <p className="text-[#3A4A44] leading-relaxed mt-3">
            (5) Nach Vertragsende werden s&auml;mtliche Nutzerdaten
            gem&auml;&szlig; den datenschutzrechtlichen Bestimmungen gel&ouml;scht,
            sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
          </p>

          {/* § 10 Schlussbestimmungen */}
          <h2 className="text-xl font-semibold text-[#0A3D35] mt-10 mb-3">
            &sect; 10 Schlussbestimmungen
          </h2>
          <p className="text-[#3A4A44] leading-relaxed">
            (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss
            des UN-Kaufrechts.
          </p>
          <p className="text-[#3A4A44] leading-relaxed mt-3">
            (2) Gerichtsstand f&uuml;r alle Streitigkeiten aus oder im
            Zusammenhang mit diesem Vertrag ist Bad Homburg vor der H&ouml;he, sofern der
            Nutzer Kaufmann, juristische Person des &ouml;ffentlichen Rechts oder
            &ouml;ffentlich-rechtliches Sonderverm&ouml;gen ist.
          </p>
          <p className="text-[#3A4A44] leading-relaxed mt-3">
            (3) Sollten einzelne Bestimmungen dieser AGB unwirksam oder
            undurchf&uuml;hrbar sein oder nach Vertragsschluss unwirksam oder
            undurchf&uuml;hrbar werden, so wird dadurch die Wirksamkeit der
            &uuml;brigen Bestimmungen nicht ber&uuml;hrt. An die Stelle der
            unwirksamen oder undurchf&uuml;hrbaren Bestimmung tritt diejenige
            wirksame und durchf&uuml;hrbare Regelung, die dem Zweck der
            unwirksamen Bestimmung am n&auml;chsten kommt.
          </p>
          <p className="text-[#3A4A44] leading-relaxed mt-3">
            (4) &Auml;nderungen und Erg&auml;nzungen dieser AGB bed&uuml;rfen der
            Schriftform. Dies gilt auch f&uuml;r die Aufhebung dieses
            Schriftformerfordernisses. anavio ist berechtigt, diese AGB mit
            angemessener Frist zu &auml;ndern. Der Nutzer wird &uuml;ber
            &Auml;nderungen rechtzeitig informiert. Widerspricht der Nutzer den
            ge&auml;nderten AGB nicht innerhalb von 4 Wochen nach
            Zugang der &Auml;nderungsmitteilung, gelten die ge&auml;nderten AGB
            als angenommen.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
