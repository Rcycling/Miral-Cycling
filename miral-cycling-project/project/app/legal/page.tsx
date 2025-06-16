'use client';

import { motion } from 'framer-motion';
import { Building, Mail, Phone, MapPin } from 'lucide-react';

export default function LegalPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Building className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Mentions légales
            </h1>
            <p className="text-xl text-gray-300">
              Informations légales et réglementaires concernant MIRAL.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legal Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Company Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations sur l'entreprise</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Identité</h3>
                    <div className="space-y-2 text-gray-600">
                      <p><strong>Dénomination sociale :</strong> MIRAL SAS</p>
                      <p><strong>Forme juridique :</strong> Société par Actions Simplifiée</p>
                      <p><strong>Capital social :</strong> 50 000 €</p>
                      <p><strong>RCS :</strong> Paris 123 456 789</p>
                      <p><strong>SIRET :</strong> 12345678901234</p>
                      <p><strong>Code APE :</strong> 4771Z</p>
                      <p><strong>N° TVA :</strong> FR12345678901</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Contact</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-gray-500 mt-0.5" />
                        <div>
                          <p className="text-gray-600">123 Rue du Cyclisme</p>
                          <p className="text-gray-600">75001 Paris, France</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-gray-500" />
                        <p className="text-gray-600">+33 1 23 45 67 89</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-gray-500" />
                        <p className="text-gray-600">contact@miral-cycling.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Management */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Direction</h2>
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <p className="text-gray-600">
                  <strong>Président :</strong> Thomas Laurent<br />
                  <strong>Directeur de la publication :</strong> Thomas Laurent
                </p>
              </div>
            </div>

            {/* Hosting */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Hébergement</h2>
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <div className="text-gray-600">
                  <p><strong>Hébergeur :</strong> Vercel Inc.</p>
                  <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
                  <p><strong>Site web :</strong> <a href="https://vercel.com" className="text-black hover:underline">vercel.com</a></p>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Propriété intellectuelle</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
                  et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
                  les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p>
                  La marque MIRAL, ainsi que tous les logos et éléments distinctifs reproduits sur ce site 
                  sont protégés au titre du droit des marques et ne peuvent être utilisés sans autorisation 
                  expresse de MIRAL.
                </p>
                <p>
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie 
                  des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, 
                  sauf autorisation écrite préalable de MIRAL.
                </p>
              </div>
            </div>

            {/* Liability */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Responsabilité</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour 
                  à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.
                </p>
                <p>
                  Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, 
                  merci de bien vouloir le signaler par email à contact@miral-cycling.com en décrivant 
                  le problème de la manière la plus précise possible.
                </p>
                <p>
                  MIRAL ne pourra être tenue responsable des dommages directs et indirects causés au matériel 
                  de l'utilisateur, lors de l'accès au site, et résultant soit de l'utilisation d'un matériel 
                  ne répondant pas aux spécifications indiquées, soit de l'apparition d'un bug ou d'une incompatibilité.
                </p>
              </div>
            </div>

            {/* Personal Data */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Données personnelles</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée et au 
                  Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, 
                  de rectification, de portabilité et d'effacement de vos données.
                </p>
                <p>
                  Pour exercer ces droits ou pour toute question sur le traitement de vos données, 
                  vous pouvez nous contacter à l'adresse : privacy@miral-cycling.com
                </p>
                <p>
                  Pour plus d'informations, consultez notre 
                  <a href="/privacy" className="text-black font-medium hover:underline"> politique de confidentialité</a>.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Ce site utilise des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques 
                  de visites. En naviguant sur ce site, vous acceptez l'utilisation de ces cookies.
                </p>
                <p>
                  Vous pouvez configurer votre navigateur pour refuser les cookies, mais certaines fonctionnalités 
                  du site pourraient ne plus être disponibles.
                </p>
              </div>
            </div>

            {/* Applicable Law */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Droit applicable</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Tout litige en relation avec l'utilisation du site www.miral-cycling.com est soumis au droit français. 
                  Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
                </p>
              </div>
            </div>

            <div className="text-sm text-gray-500 pt-8 border-t">
              <p>Dernière mise à jour : 1er janvier 2024</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}