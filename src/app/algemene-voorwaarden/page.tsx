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
          <div className="w-24 h-1 bg-[#0066ff] mb-8"></div>

          {/* Terms Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-[#090c45] mb-4">1. Definities</h2>
              <p className="text-gray-700 mb-6">
                In deze algemene voorwaarden wordt verstaan onder:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li><strong>Luscombe Lifestyle:</strong> De onderneming Luca Luscombe, handelend onder de naam Luscombe Lifestyle</li>
                <li><strong>Client:</strong> De natuurlijke persoon of rechtspersoon die gebruikmaakt van de diensten van Luscombe Lifestyle</li>
                <li><strong>Overeenkomst:</strong> De overeenkomst tussen Luscombe Lifestyle en de client voor het leveren van coaching diensten</li>
                <li><strong>Diensten:</strong> Alle door Luscombe Lifestyle aangeboden coaching, training en adviezen</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#090c45] mb-4 mt-8">2. Toepasselijkheid</h2>
              <p className="text-gray-700 mb-6">
                Deze algemene voorwaarden zijn van toepassing op alle offertes, overeenkomsten en diensten van Luscombe Lifestyle. Door gebruik te maken van onze diensten aanvaardt de client deze voorwaarden.
              </p>

              <h2 className="text-2xl font-semibold text-[#090c45] mb-4 mt-8">3. Totstandkoming overeenkomst</h2>
              <p className="text-gray-700 mb-6">
                De overeenkomst komt tot stand nadat de client het intakeformulier heeft ingevuld en ondertekend, dan wel na mondelinge of schriftelijke bevestiging van de gemaakte afspraken.
              </p>

              <h2 className="text-2xl font-semibold text-[#090c45] mb-4 mt-8">4. Prijzen en betaling</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Alle prijzen zijn inclusief BTW</li>
                <li>Betaling dient vooraf te geschieden, tenzij anders afgesproken</li>
                <li>De prijzen zijn gebaseerd op het opgegeven traject en duur</li>
                <li>Niet-betaalde facturen kunnen leiden tot stopzetting van de dienstverlening</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#090c45] mb-4 mt-8">5. Verplichtingen client</h2>
              <p className="text-gray-700 mb-4">
                De client verplicht zich om:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Verstrekte informatie correct en volledig te zijn</li>
                <li>Veranderingen in gezondheidstoestand direct te melden</li>
                <li>Afspraken tijdig te annuleren (minimaal 24 uur van tevoren)</li>
                <li>Voorgeschreven oefeningen en adviezen naar beste inzicht op te volgen</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#090c45] mb-4 mt-8">6. Verplichtingen Luscombe Lifestyle</h2>
              <p className="text-gray-700 mb-4">
                Luscombe Lifestyle verplicht zich om:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Professionele begeleiding te bieden volgens de gemaakte afspraken</li>
                <li>De privacy van de client te respecteren</li>
                <li>De client te informeren over relevante ontwikkelingen</li>
                <li>Een veilige en vertrouwelijke omgeving te creëren</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#090c45] mb-4 mt-8">7. Aansprakelijkheid</h2>
              <p className="text-gray-700 mb-6">
                Luscombe Lifestyle is niet aansprakelijk voor blessures of letselschade die ontstaat tijdens het volgen van de training. De client is zelf verantwoordelijk voor het inschatten van zijn/haar fysieke capaciteiten. Luscombe Lifestyle adviseert altijd om bij twijfel een arts te raadplegen.
              </p>

              <h2 className="text-2xl font-semibold text-[#090c45] mb-4 mt-8">8. Annulering</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Annulering van een afspraak dient minimaal 24 uur van tevoren te geschieden</li>
                <li>Bij te late annulering kan de gereserveerde tijd in rekening worden gebracht</li>
                <li>Annulering van het volledige traject dient schriftelijk te gebeuren</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#090c45] mb-4 mt-8">9. Klachten</h2>
              <p className="text-gray-700 mb-6">
                Mocht de client niet tevreden zijn over de geleverde diensten, dan verzoeken wij dit direct te melden. Wij streven ernaar klachten binnen 14 dagen af te handelen.
              </p>

              <h2 className="text-2xl font-semibold text-[#090c45] mb-4 mt-8">10. Geheimhouding</h2>
              <p className="text-gray-700 mb-6">
                Zowel Luscombe Lifestyle als de client zijn verplicht tot geheimhouding van alle vertrouwelijke informatie die tijdens de coaching wordt uitgewisseld.
              </p>

              <h2 className="text-2xl font-semibold text-[#090c45] mb-4 mt-8">11. Toepasselijk recht</h2>
              <p className="text-gray-700 mb-6">
                Op deze overeenkomst is Nederlands recht van toepassing. Eventuele geschillen worden voorgelegd aan de bevoegde rechter in Nederland.
              </p>

              <h2 className="text-2xl font-semibold text-[#090c45] mb-4 mt-8">12. Contactgegevens</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Luscombe Lifestyle</strong>
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>E-mail:</strong> luscombe.training@gmail.com
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Telefoon:</strong> +31 6 146 292 17
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Adres:</strong> First Class Sports Papendrecht
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>KVK:</strong> 97370509
                </p>
                <p className="text-gray-700">
                  <strong>BTW:</strong> NL005265317B18
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
