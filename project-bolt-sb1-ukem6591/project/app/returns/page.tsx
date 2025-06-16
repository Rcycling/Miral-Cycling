'use client';

import { motion } from 'framer-motion';
import { RotateCcw, Clock, Shield, CheckCircle } from 'lucide-react';

export default function ReturnsPage() {
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
            <RotateCcw className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Retours & Échanges
            </h1>
            <p className="text-xl text-gray-300">
              Votre satisfaction est notre priorité. Retours gratuits sous 30 jours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Returns Policy */}
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
              <Clock className="w-12 h-12 mx-auto mb-4 text-gray-700" />
              <h3 className="font-semibold text-gray-900 mb-2">30 jours</h3>
              <p className="text-gray-600 text-sm">
                Vous avez 30 jours pour retourner vos articles
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <Shield className="w-12 h-12 mx-auto mb-4 text-gray-700" />
              <h3 className="font-semibold text-gray-900 mb-2">Retours gratuits</h3>
              <p className="text-gray-600 text-sm">
                Frais de retour offerts pour la France métropolitaine
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-gray-700" />
              <h3 className="font-semibold text-gray-900 mb-2">Remboursement rapide</h3>
              <p className="text-gray-600 text-sm">
                Remboursement sous 5-7 jours ouvrés après réception
              </p>
            </motion.div>
          </div>

          {/* Detailed Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Conditions de retour</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Chez MIRAL, nous voulons que vous soyez entièrement satisfait de votre achat. 
                  Si pour une raison quelconque vous n'êtes pas satisfait, vous pouvez retourner 
                  vos articles dans les 30 jours suivant la réception.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Les articles doivent être dans leur état d'origine, non portés et non lavés</li>
                  <li>Les étiquettes doivent être attachées</li>
                  <li>L'emballage d'origine doit être inclus</li>
                  <li>Les articles personnalisés ne peuvent pas être retournés</li>
                  <li>Les accessoires (chaussettes, bidons, etc.) doivent être dans leur emballage d'origine</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment procéder</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Contactez-nous</h3>
                    <p className="text-gray-600">
                      Envoyez un email à returns@miral-cycling.com avec votre numéro de commande 
                      et la raison du retour.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Recevez l'étiquette de retour</h3>
                    <p className="text-gray-600">
                      Nous vous enverrons une étiquette de retour prépayée par email sous 24h.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Emballez et expédiez</h3>
                    <p className="text-gray-600">
                      Emballez soigneusement vos articles et collez l'étiquette de retour. 
                      Déposez le colis dans un point relais ou programmez un enlèvement.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Remboursement</h3>
                    <p className="text-gray-600">
                      Une fois votre retour reçu et inspecté, nous procéderons au remboursement 
                      sur votre moyen de paiement original sous 5-7 jours ouvrés.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Échanges</h2>
              <p className="text-gray-600 mb-4">
                Pour un échange de taille ou de couleur, nous recommandons de procéder à un retour 
                et de passer une nouvelle commande. Cela vous garantit la disponibilité de l'article 
                souhaité et un traitement plus rapide.
              </p>
              <p className="text-gray-600">
                Si vous préférez un échange direct, contactez notre service client à 
                <a href="mailto:contact@miral-cycling.com" className="text-black font-medium hover:underline">
                  {' '}contact@miral-cycling.com
                </a> et nous étudierons votre demande.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Besoin d'aide ?</h2>
              <p className="text-gray-600 mb-4">
                Notre équipe est là pour vous accompagner dans votre processus de retour.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Email :</strong> returns@miral-cycling.com</p>
                <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
                <p><strong>Horaires :</strong> Lundi-Vendredi 9h-18h</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}