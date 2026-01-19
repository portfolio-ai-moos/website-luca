'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

const AlgemeneVoorwaarden = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Back Button */}
          <Link 
            href="/"
            className="inline-flex items-center text-[#0066ff] hover:text-[#0052cc] mb-8 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Terug naar home
          </Link>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#090c45] mb-4">
            Algemene Voorwaarden
          </h1>
          <h2 className="text-xl text-gray-600 mb-6">Luscombe Lifestyle</h2>
          <div className="w-24 h-1 bg-[#0066ff] mb-8"></div>

          {/* Terms Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-[#090c45] mb-4">Artikel 1 - Definities</h2>
              <p className="text-gray-700 mb-6">
                In deze algemene voorwaarden wordt verstaan onder:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li><strong>Luscombe Lifestyle:</strong> De onderneming Luca Luscombe, handelend onder de naam Luscombe Lifestyle, ingeschreven in het Handelsregister onder KVK-nummer 97370509</li>
                <li><strong>Client:</strong> De natuurlijke persoon of rechtspersoon die gebruikmaakt van de diensten van Luscombe Lifestyle</li>
                <li><strong>Overeenkomst:</strong> De overeenkomst tussen Luscombe Lifestyle en de client voor het leveren van coaching diensten</li>
                <li><strong>Diensten:</strong> Alle door Luscombe Lifestyle aangeboden coaching, training, personal training en adviezen</li>
                <li><strong>Website:</strong> De internetomgeving van Luscombe Lifestyle</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#090c45] mb-4 mt-8">Artikel 2 - Toepasselijkheid</h2>
              <p className="text-gray-700 mb-6">
                Deze algemene voorwaarden zijn van toepassing op alle offertes, overeenkomsten en diensten van Luscombe Lifestyle. Door gebruik te maken van onze diensten of door een overeenkomst aan te gaan, aanvaardt de client uitdrukkelijk deze voorwaarden. Afwijkingen van deze voorwaarden zijn slechts geldig indien deze schriftelijk zijn overeengekomen.
              </p>

              <h2 className="text-2xl font-semibold text-[#090c45] mb-4 mt-8">Artikel 3 - Totstandkoming overeenkomst</h2>
              <p className="text-gray-700 mb-6">
                De overeenkomst komt tot stand nadat de client het intakeformulier heeft ingevuld en ondertekend, dan wel na mondelinge of schriftelijke bevestiging van de gemaakte afspraken en aanvaarding van deze voorwaarden.
              </p>

              <h2 className="text-2xl font-semibold text-[#090c45] mb-4 mt-8">Artikel 4 - Prijzen en betalingsvoorwaarden</h2>
              <p className="text-gray-700 mb-4">
                4.1 Alle prijzen zijn inclusief BTW en andere heffingen welke van overheidswege worden opgelegd.
              </p>
              <p className="text-gray-700 mb-4">
                4.2 Betaling dient te geschieden vooraf, tenzij schriftelijk anders is overeengekomen.
              </p>
              <p className="text-gray-700 mb-4">
                4.3 Bij niet-tijdige betaling is de client van rechtswege in verzuim, zonder dat ingebrekestelling is vereist.
              </p>
              <p className="text-gray-700 mb-4">
                4.4 Bij betalingsachterstand heeft Luscombe Lifestyle het recht de dienstverlening op te schorten.
              </p>
              <p className="text-gray-700 mb-6">
                4.5 Alle kosten van invordering, zowel gerechtelijk als buitengerechtelijk, komen voor rekening van de client.
              </p>

              <h2 className="text-2xl font-semibold text-[#090c45] mb-4 mt-8">Artikel 5 - Verplichtingen van de client</h2>
              <p className="text-gray-700 mb-4">
                De client verplicht zich om:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Verstrekte informatie correct, volledig en naar waarheid te verstrekken</li>
                <li>Veranderingen in gezondheidstoestand, medicijngebruik of blessures direct te melden</li>
                <li>Afspraken tijdig te annuleren (minimaal 24 uur van tevoren)</li>
                <li>Voorgeschreven oefeningen en adviezen naar eigen inzicht en verantwoordelijkheid op te volgen</li>
                <li>De aanwijzingen van de coach op te volgen</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#090c45] mb-4 mt-8">Artikel 6 - Verplichtingen van Luscombe Lifestyle</h2>
              <p className="text-gray-700 mb-4">
                Luscombe Lifestyle verplicht zich om:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Professionele begeleiding te bieden volgens de gemaakte afspraken</li>
                <li>De privacy en vertrouwelijkheid van de client te respecteren</li>
                <li>De client te informeren over relevante ontwikkelingen</li>
                <li>Een veilige en vertrouwelijke omgeving te creëren</li>
                <li>De client te motiveren en te ondersteunen bij het bereiken van doelen</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#090c45] mb-4 mt-8">Artikel 7 - Aansprakelijkheid</h2>
              <p className="text-gray-700 mb-4">
                7.1 Luscombe Lifestyle is niet aansprakelijk voor blessures of letselschade die ontstaat tijdens het volgen van de training.
              </p>
              <p className="text-gray-700 mb-4">
                7.2 De client is zelf verantwoordelijk voor het inschatten van zijn/haar fysieke capaciteiten.
              </p>
              <p className="text-gray-700 mb-4">
                7.3 Luscombe Lifestyle is niet aansprakelijk voor verlies, diefstal of beschadiging van eigendommen.
              </p>
              <p className="text-gray-700 mb-6">
                7.4 De aansprakelijkheid van Luscombe Lifestyle is te allen tijde beperkt tot het bedrag van de door de verzekeringsmaatschappij uitgekeerde som.
              </p>

              <h2 className="text-2xl font-semibold text-[#090c45] mb-4 mt-8">Artikel 8 - Annulering en wijzigingen</h2>
              <p className="text-gray-700 mb-4">
                8.1 Annulering van een afspraak dient minimaal 24 uur van tevoren plaats te vinden.
              </p>
              <p className="text-gray-700 mb-4">
                8.2 Bij te late annulering wordt 50% van de kosten in rekening gebracht.
              </p>
              <p className="text-gray-700 mb-4">
                8.3 Bij niet verschijnen zonder afmelding wordt 100% van de kosten in rekening gebracht.
              </p>
              <p className="text-gray-700 mb-4">
                8.4 Annulering van het volledige traject dient schriftelijk te gebeuren met inachtneming van een opzegtermijn van 14 dagen.
              </p>
              <p className="text-gray-700 mb-6">
                8.5 Luscombe Lifestyle behoudt zich het recht voor trainingen te verplaatsen bij ziekte, vakantie of overmacht.
              </p>

              <h2 className="text-2xl font-semibold text-[#090c45] mb-4 mt-8">Artikel 9 - Klachtenprocedure</h2>
              <p className="text-gray-700 mb-4">
                9.1 Klachten over de geleverde diensten dienen binnen 14 dagen na ontdekking gemeld te worden.
              </p>
              <p className="text-gray-700 mb-4">
                9.2 De klacht dient duidelijk omschreven te zijn, vergezeld van relevante bewijsstukken.
              </p>
              <p className="text-gray-700 mb-4">
                9.3 Luscombe Lifestyle streeft ernaar klachten binnen 14 dagen na ontvangst in behandeling te nemen.
              </p>
              <p className="text-gray-700 mb-6">
                9.4 Indien de klacht niet naar tevredenheid wordt opgelost, kan de client zich wenden tot de geschillencommissie.
              </p>

              <h2 className="text-2xl font-semibold text-[#090c45] mb-4 mt-8">Artikel 10 - Geheimhouding</h2>
              <p className="text-gray-700 mb-6">
                Zowel Luscombe Lifestyle als de client zijn verplicht tot geheimhouding van alle vertrouwelijke informatie die tijdens de coaching wordt uitgewisseld. Deze geheimhoudingsplicht geldt ook na beëindiging van de overeenkomst.
              </p>

              <h2 className="text-2xl font-semibold text-[#090c45] mb-4 mt-8">Artikel 11 - Intellectueel eigendom</h2>
              <p className="text-gray-700 mb-4">
                11.1 Alle door Luscombe Lifestyle verstrekte materialen, trainingsschema's, voedingsplannen en adviezen vallen onder het intellectueel eigendom van Luscombe Lifestyle.
              </p>
              <p className="text-gray-700 mb-4">
                11.2 Het is de client niet toegestaan deze materialen zonder schriftelijke toestemming te vermenigvuldigen of te verspreiden.
              </p>
              <p className="text-gray-700 mb-6">
                11.3 Inbreuk op het intellectueel eigendom kan leiden tot een schadevergoeding en/of juridische stappen.
              </p>

              <h2 className="text-2xl font-semibold text-[#090c45] mb-4 mt-8">Artikel 12 - Overmacht</h2>
              <p className="text-gray-700 mb-6">
                Luscombe Lifestyle is niet gehouden tot het nakomen van enige verplichting indien zij daartoe verhinderd is als gevolg van overmacht. Onder overmacht wordt verstaan elke van haar wil onafhankelijke omstandigheid, waardoor de nakoming van haar verplichtingen naar redelijkheid en billijkheid niet van haar kan worden verlangd.
              </p>

              <h2 className="text-2xl font-semibold text-[#090c45] mb-4 mt-8">Artikel 13 - Wederzijdse binding</h2>
              <p className="text-gray-700 mb-6">
                Deze algemene voorwaarden gelden voor de volledige duur van de overeenkomst en blijven van kracht na beëindiging daarvan voor zover dit noodzakelijk is voor de vaststelling van de rechten en plichten van partijen.
              </p>

              <h2 className="text-2xl font-semibold text-[#090c45] mb-4 mt-8">Artikel 14 - Toepasselijk recht en bevoegde rechter</h2>
              <p className="text-gray-700 mb-4">
                14.1 Op deze overeenkomst is Nederlands recht van toepassing.
              </p>
              <p className="text-gray-700 mb-4">
                14.2 Eventuele geschillen worden in eerste aanleg voorgelegd aan de bevoegde rechter in het arrondissement waar Luscombe Lifestyle gevestigd is.
              </p>
              <p className="text-gray-700 mb-6">
                14.3 Partijen zullen echter eerst een beroep doen op mediation voordat zij de rechter inschakelen.
              </p>

              <h2 className="text-2xl font-semibold text-[#090c45] mb-4 mt-8">Artikel 15 - Contactgegevens</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Luscombe Lifestyle</strong><br/>
                  E-mail: luscombe.training@gmail.com<br/>
                  Telefoon: +31 6 146 292 17<br/>
                  Adres: First Class Sports Papendrecht<br/>
                  KVK: 97370509<br/>
                  BTW: NL005265317B18
                </p>
              </div>

              <p className="text-sm text-gray-500 mt-8">
                Deze algemene voorwaarden zijn laatst bijgewerkt op {new Date().toLocaleDateString('nl-NL')}.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AlgemeneVoorwaarden
