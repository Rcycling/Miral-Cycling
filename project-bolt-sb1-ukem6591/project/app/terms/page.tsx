'use client';

import { motion } from 'framer-motion';
import { FileText, Scale, AlertCircle, CheckCircle } from 'lucide-react';

export default function TermsPage() {
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
            <FileText className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Conditions générales
            </h1>
            <p className="text-xl text-gray-300">
              Les conditions qui régissent l'utilisation de notre site et l'achat de nos produits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Scale className="w-12 h-12 mx-auto mb-4 text-gray-700" />
              <h3 className="font-semibold text-gray-900 mb-2">Équité</h3>
              <p className="text-gray-600 text-sm">
                Des conditions équitables pour tous nos clients
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <AlertCircle className="w-12 h-12 mx-auto mb-4 text-gray-700" />
              <h3 className="font-semibold text-gray-900 mb-2">Clarté</h3>
              <p className="text-gray-600 text-sm">
                Des termes clairs et compréhensibles
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-gray-700" />
              <h3 className="font-semibold text-gray-900 mb-2">Protection</h3>
              <p className="text-gray-600 text-sm">
                Vos droits de consommateur sont protégés
              </p>
            </motion.div>
          </div>

          {/* Detailed Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Objet</h2>
              <p className="text-gray-600">
                Les présentes conditions générales de vente (CGV) régissent les relations contractuelles 
                entre MIRAL, société par actions simplifiée au capital de 50 000 euros, immatriculée au 
                RCS de Paris sous le numéro 123 456 789, dont le siège social est situé 123 Rue du Cyclisme, 
                75001 Paris, France, et toute personne physique ou morale souhaitant effectuer un achat 
                sur le site www.miral-cycling.com.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Produits</h2>
              <p className="text-gray-600 mb-4">
                MIRAL propose à la vente des vêtements et accessoires de cyclisme haut de gamme. 
                Les produits sont présentés sur le site avec leurs caractéristiques essentielles.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Les photographies ne sont pas contractuelles</li>
                <li>Les couleurs peuvent varier selon votre écran</li>
                <li>Les tailles correspondent au guide des tailles disponible sur le site</li>
                <li>Tous nos produits sont conformes à la réglementation européenne</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Commandes</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Processus de commande :</strong> La commande est validée après paiement complet. 
                  Vous recevez une confirmation par email.
                </p>
                <p>
                  <strong>Disponibilité :</strong> Nos offres sont valables dans la limite des stocks disponibles. 
                  En cas d'indisponibilité, nous vous en informons dans les plus brefs délais.
                </p>
                <p>
                  <strong>Erreurs :</strong> En cas d'erreur manifeste sur le prix ou les caractéristiques 
                  d'un produit, nous nous réservons le droit d\'annuler la commande.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Prix et paiement</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Prix :</strong> Les prix sont indiqués en euros TTC. Les frais de livraison 
                  sont indiqués avant validation de la commande.
                </p>
                <p>
                  <strong>Moyens de paiement acceptés :</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Carte bancaire (Visa, Mastercard, American Express)</li>
                  <li>PayPal</li>
                  <li>Apple Pay / Google Pay</li>
                  <li>Virement bancaire (sur demande)</li>
                </ul>
                <p>
                  <strong>Sécurité :</strong> Tous les paiements sont sécurisés par cryptage SSL.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Livraison</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Les délais de livraison sont indiqués à titre indicatif. MIRAL ne peut être tenue 
                  responsable des retards de livraison dus aux transporteurs ou à des circonstances 
                  exceptionnelles.
                </p>
                <p>
                  Le risque de perte ou d'endommagement des produits est transféré à l'acheteur 
                  dès la remise du bien au transporteur.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Droit de rétractation</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Conformément à l'article L221-18 du Code de la consommation, vous disposez d'un 
                  délai de 14 jours à compter de la réception de votre commande pour exercer votre 
                  droit de rétractation sans avoir à justifier de motifs ni à payer de pénalités.
                </p>
                <p>
                  <strong>Exceptions :</strong> Le droit de rétractation ne peut être exercé pour 
                  les biens confectionnés selon les spécifications du consommateur ou nettement 
                  personnalisés.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Garanties</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Garantie légale de conformité :</strong> Tous nos produits bénéficient 
                  de la garantie légale de conformité (article L217-4 du Code de la consommation) 
                  et de la garantie contre les vices cachés (articles 1641 à 1648 du Code civil).
                </p>
                <p>
                  <strong>Garantie commerciale :</strong> MIRAL garantit ses produits contre tout 
                  défaut de fabrication pendant 2 ans à compter de la date d'achat.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Responsabilité</h2>
              <p className="text-gray-600">
                La responsabilité de MIRAL ne peut être engagée en cas de dommages résultant d'une 
                utilisation anormale ou non conforme des produits. Notre responsabilité est limitée 
                au montant de la commande.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Propriété intellectuelle</h2>
              <p className="text-gray-600">
                Tous les éléments du site (textes, images, logos, marques) sont protégés par le 
                droit de la propriété intellectuelle. Toute reproduction sans autorisation est interdite.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Données personnelles</h2>
              <p className="text-gray-600">
                Le traitement de vos données personnelles est régi par notre politique de confidentialité, 
                disponible sur notre site. Vous disposez d'un droit d'accès, de rectification et de 
                suppression de vos données.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Litiges</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  En cas de litige, nous privilégions une résolution amiable. Vous pouvez nous contacter 
                  à contact@miral-cycling.com.
                </p>
                <p>
                  <strong>Médiation :</strong> En cas d'échec de la résolution amiable, vous pouvez 
                  recourir gratuitement à un médiateur de la consommation.
                </p>
                <p>
                  <strong>Juridiction :</strong> À défaut de résolution amiable, les tribunaux français 
                  sont seuls compétents.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Modification des CGV</h2>
              <p className="text-gray-600">
                MIRAL se réserve le droit de modifier les présentes CGV à tout moment. 
                Les CGV applicables sont celles en vigueur à la date de la commande.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Contact</h2>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>MIRAL</strong></p>
                <p>123 Rue du Cyclisme, 75001 Paris, France</p>
                <p>Email : contact@miral-cycling.com</p>
                <p>Téléphone : +33 1 23 45 67 89</p>
                <p>RCS Paris : 123 456 789</p>
                <p>TVA : FR12345678901</p>
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