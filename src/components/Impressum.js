'use client';

import { useState } from "react";

export function Impressum() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      id: 'contact',
      title: 'Impressum',
      content: (
        <div className="text-sm md:text-base">
          <p className="text-base md:text-lg font-bold mt-2">Angaben gemäß § 5 TMG</p>

          <p>Die Wunderlampe</p>
          <p>Inhaber: Mustafa Ghasheem</p>
          <p>Lorenz-Kellner-Straße-1</p>
          <p>54290 Trier</p>
          <p>Deutschland</p>

          <p className="text-base md:text-lg font-bold mt-4">Vertreten durch: Mustafa Ghasheem</p>

          <p className="text-base md:text-lg font-bold mt-4">Kontakt</p>
          <p>Telefon: 0651 56154448</p>
          <p>E-Mail: info@diewunderlampe-trier.de</p>

          <p className="text-base md:text-lg font-bold mt-4">Umsatzsteuer-ID</p>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:</p>
          <p>DE341150800</p>

          <p className="text-base md:text-lg font-bold mt-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</p>
          <p>Mustafa Ghasheem</p>
          <p>Lorenz-Kellner-Straße-1</p>
          <p>54290 Trier</p>

          <p className="text-base md:text-lg font-bold mt-4">Streitschlichtung</p>
          <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr.</p>
          <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
          <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

          <p className="text-base md:text-lg font-bold mt-4">Haftung für Inhalte</p>
          <p className="text-sm md:text-base">Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
          <p className="text-sm md:text-base mt-2">Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>

          <p className="text-base md:text-lg font-bold mt-4">Haftung für Links</p>
          <p className="text-sm md:text-base">Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb übernehmen wir für diese fremden Inhalte auch keine Gewähr. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.</p>
          <p className="text-sm md:text-base mt-2">Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zu diesem Zeitpunkt nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>

          <p className="text-base md:text-lg font-bold mt-4">Urheberrecht</p>
          <p className="text-sm md:text-base">Die durch die Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
          <p className="text-sm md:text-base mt-2">Soweit Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Inhalte Dritter werden als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Inhalte umgehend.</p>

          <p className="text-base md:text-lg font-bold mt-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</p>
          <p className="text-sm md:text-base">Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        </div>
      )
    },
    {
      id: 'legal',
      title: 'Datenschutzerklärung',
      content: (
        <div className="text-sm md:text-base">
          <p className="text-base md:text-lg font-bold mt-4">1. Datenschutz auf einen Blick</p>
          <p className="text-base md:text-lg font-bold mt-4">Allgemeine Hinweise</p>
          <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>

          <p className="text-base md:text-lg font-bold mt-4">Datenerfassung auf dieser Website</p>
          
          <p className="text-base md:text-lg font-bold mt-4">Verantwortlich ist:</p>
          <p>Die Wunderlampe Restaurant</p>
          <p>Inhaber: Mohamad Ghasheem</p>
          <p>Im Paulinsgarten Straße 2</p>
          <p>54292 Trier</p>
          <p>E-Mail: info@diewunderlampe-trier.de</p>
          <p>Telefon: 0651 465001 83</p>

          <p className="text-base md:text-lg font-bold mt-4">Wie erfassen wir Ihre Daten?</p>
          <p className="text-sm md:text-base">Ein Teil der Daten wird automatisch durch unsere IT-Systeme beim Besuch der Website erfasst z. B. IP-Adresse, Browsertyp, Uhrzeit des Seitenaufrufs. Weitere Daten teilen Sie uns freiwillig mit – etwa über ein Kontaktformular oder per E-Mail.</p>

          <p className="text-base md:text-lg font-bold mt-4">Wofür nutzen wir Ihre Daten?</p>
          <ul className="list-disc list-inside text-sm md:text-base mt-2 ml-4">
            <li>Zur technisch fehlerfreien Bereitstellung der Website</li>
            <li>Zur Bearbeitung von Anfragen</li>
            <li>Für statistische Auswertungen (sofern Analyse-Tools verwendet werden)</li>
          </ul>

          <p className="text-base md:text-lg font-bold mt-4">Welche Rechte haben Sie?</p>
          <p className="text-sm md:text-base">Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Widerspruch. Außerdem steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>

          <p className="text-base md:text-lg font-bold mt-4">2. Hosting</p>

          <p className="text-sm md:text-base mt-4">Unsere Website wird extern gehostet bei:</p>
          <p className="text-sm md:text-base font-semibold">webgo GmbH</p>
          <p className="text-sm md:text-base">Wandsbeker Zollstraße 95, 22041 Hamburg, Deutschland</p>
          <p className="text-sm md:text-base">Das Hosting erfolgt zur Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO) und im berechtigten Interesse an einem sicheren Betrieb (Art. 6 Abs. 1 lit. f DSGVO).Mit webgo wurde ein Auftragsverarbeitungsvertrag (AVV) geschlossen.</p>

          <p className="text-base md:text-lg font-bold mt-4">3. Allgemeine Hinweise und Pflichtinformationen</p>

          <p className="text-base md:text-lg font-bold mt-4">SSL-/TLS-Verschlüsselung</p>
          <p className="text-sm md:text-base">Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung. Sie erkennen eine verschlüsselte Verbindung an der Adresszeile &ldquo;https://&rdquo; und dem Schloss-Symbol in Ihrer Browserzeile.</p>

          <p className="text-base md:text-lg font-bold mt-4">Widerruf Ihrer Einwilligung</p>
          <p className="text-sm md:text-base">Sie können Ihre Einwilligung zur Datenverarbeitung jederzeit widerrufen. Die Rechtmäßigkeit der Verarbeitung bis zum Widerruf bleibt unberührt.</p>

          <p className="text-base md:text-lg font-bold mt-4">Widerspruchsrecht (Art. 21 DSGVO)</p>
          <p className="text-sm md:text-base">Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, der Verarbeitung Ihrer Daten zu widersprechen. Bei Direktwerbung gilt das Widerspruchsrecht jederzeit ohne Angabe von Gründen.</p>

          <p className="text-base md:text-lg font-bold mt-4">Beschwerderecht</p>
          <p className="text-sm md:text-base">Zuständige Behörde:</p>
          <p className="text-sm md:text-base">Landesbeauftragte für Datenschutz und Informationsfreiheit Rheinland-Pfalz</p>
          <p className="text-sm md:text-base">www.datenschutz.rlp.de</p>

          <p className="text-base md:text-lg font-bold mt-4">Speicherdauer</p>
          <p className="text-sm md:text-base">Personenbezogene Daten werden gelöscht, sobald der Zweck entfällt oder gesetzliche Aufbewahrungsfristen ablaufen.</p>

          <p className="text-base md:text-lg font-bold mt-4">4. Datenerfassung auf dieser Website</p>



          <p className="text-base md:text-lg font-bold mt-4">Cookies</p>
          <p className="text-sm md:text-base">Unsere Website verwendet nur technisch notwendige Cookies. Diese dienen der Bereitstellung und Sicherheit. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p>
          <p className="text-sm md:text-base mt-2">Einige Cookies sind &ldquo;Session-Cookies.&rdquo; Solche Cookies werden nach Ende Ihrer Browser-Sitzung von selbst gelöscht. Hingegen bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie diese selbst löschen. Solche Cookies helfen uns, Sie bei Rückkehr auf unserer Website wiederzuerkennen.</p>

          <p className="text-base md:text-lg font-bold mt-4">Server-Log-Dateien</p>
          <p className="text-sm md:text-base">Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt.</p>
          <p className="text-sm md:text-base mt-2">Dies sind:</p>
          <ul className="list-disc list-inside text-sm md:text-base mt-2 ml-4">
            <li>Browsertyp und Browserversion</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p className="text-sm md:text-base mt-2">Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.</p>

          <p className="text-base md:text-lg font-bold mt-4">Kontaktaufnahme</p>
          <p className="text-sm md:text-base">Wenn Sie uns kontaktieren (z.B. per E-Mail), speichern wir Ihre Angaben zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. a und b DSGVO).</p>

          <p className="text-base md:text-lg font-bold mt-4">5. Online-Präsenzen in sozialen Medien</p>
          <p className="text-sm md:text-base">Wir unterhalten Online-Präsenzen innerhalb sozialer Netzwerke, um mit den dort aktiven Kunden, Interessenten und Nutzern kommunizieren und sie dort über unsere Leistungen informieren zu können.</p>
          <p className="text-sm md:text-base">Wir verlinken zu folgenden Plattformen:</p>
          <ul className="list-disc list-inside text-sm md:text-base mt-2 ml-4">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>TikTok</li>
          </ul>
          <p className="text-sm md:text-base mt-2">Beim Klicken gelten die Datenschutzbestimmungen der jeweiligen Anbieter.</p>

          <p className="text-base md:text-lg font-bold mt-4">6. Änderungen</p>
          <p className="text-sm md:text-base">Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu aktualisieren. Die aktuelle Version ist stets auf dieser Website verfügbar.</p>
        </div>
      )
    }
  ];

  return (
    <section className="container mx-auto px-2 md:px-4 py-8 md:py-16 my-6 md:my-12">
      <div className="max-w-full mx-auto bg-brown-dark/80 backdrop-blur-sm rounded-xl p-4 md:p-8 space-y-4 md:space-y-8">
        <div className="border border-white/10 rounded-lg overflow-hidden text-white px-2 md:px-4 text-sm md:text-base">
            <h1 className="text-2xl underline underline-offset-6 md:text-4xl font-extrabold my-2 md:my-4">
                Die Wunderlampe
            </h1>

            <h2 className="text-xl md:text-2xl font-medium">
                Inhaber : Mustafa Ghasheem
            </h2>

            <p>Lorenz-Kellner-Straße 1, 54290 Trier</p>
            <p>Telefon: 0651 56154448</p>
            <p>E-Mail: info@diewunderlampe-trier.de</p>

            <h1 className="text-2xl underline underline-offset-6 md:text-4xl font-extrabold my-2 md:my-4">
                Hinweis zum Datenschutz
            </h1>
            <p className="text-sm md:text-base">Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben inklusive der von Ihnen übermittelten personenbezogenen Daten zur Bearbeitung der Anfrage bei uns 
            gespeichert und verarbeitet.</p>
            <p className="text-base md:text-xl font-medium my-2">Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.</p>
            <p className="text-sm md:text-base my-2 md:my-4">Weitere Informationen finden Sie in unserer Datenschutzerklärung und im Impressum.</p>
        </div>
        
        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="border border-white/10 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-3 md:p-4 text-left bg-brown-dark/50 hover:bg-brown-dark/70 transition-colors flex justify-between items-center"
              >
                <span className="text-lg md:text-xl font-semibold underline underline-offset-6 text-white">
                  {section.title}
                </span>
                <span className={`transform transition-transform text-white ${openSection === section.id ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              <div
                className={`transition-all duration-300 ${
                  openSection === section.id ? 'opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden bg-brown-dark/30`}
              >
                <div className="p-2 md:p-4 text-gray-100">
                  {section.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
