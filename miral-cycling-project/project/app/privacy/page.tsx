'use client';

import { motion } from 'framer-motion';
import { Shield, Eye, Lock, UserCheck } from 'lucide-react';

export default function PrivacyPage() {
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
            <Shield className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Politique de confidentialité
            </h1>
            <p className="text-xl text-gray-300">
              Votre vie privée est importante pour nous. Découvrez comment nous protégeons vos données.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Key Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Eye className="w-12 h-12 mx-auto mb-4 text-gray-700" />
              <h3 className="font-semibold text-gray-900 mb-2">Transparence</h3>
              <p className="text-gray-600 text-sm">
                Nous vous informons clairement sur l'utilisation de vos données
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <Lock className="w-12 h-12 mx-auto mb-4 text-gray-700" />
              <h3 className="font-semibold text-gray-900 mb-2">Sécurité</h3>
              <p className="text-gray-600 text-sm">
                Vos données sont protégées par des mesures de sécurité avancées
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <UserCheck className="w-12 h-12 mx-auto mb-4 text-gray-700" />
              <h3 className="font-semibold text-gray-900 mb-2">Contrôle</h3>
              <p className="text-gray-600 text-sm">
                Vous gardez le contrôle sur vos données personnelles
              </p>
            </motion.div>
          </div>

          {/* Detailed Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-gray max-w-none"
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Collecte des données</h2>
                <p className="text-gray-600 mb-4">
                  Nous collectons les données personnelles que vous nous fournissez directement, notamment :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Informations de compte (nom, email, mot de passe)</li>
                  <li>Informations de livraison et de facturation</li>
                  <li>Historique des commandes et préférences</li>
                  <li>Communications avec notre service client</li>
                  <li>Données de navigation sur notre site (cookies)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Utilisation des données</h2>
                <p className="text-gray-600 mb-4">
                  Nous utilisons vos données personnelles pour :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Traiter et livrer vos commandes</li>
                  <li>Gérer votre compte client</li>
                  <li>Vous contacter concernant vos commandes</li>
                  <li>Améliorer nos produits et services</li>
                  <li>Vous envoyer des communications marketing (avec votre consentement)</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Partage des données</h2>
                <p className="text-gray-600 mb-4">
                  Nous ne vendons jamais vos données personnelles. Nous pouvons les partager avec :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Nos prestataires de services (livraison, paiement, hébergement)</li>
                  <li>Les autorités légales si requis par la loi</li>
                  <li>Nos partenaires marketing (uniquement avec votre consentement explicite)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies</h2>
                <p className="text-gray-600 mb-4">
                  Nous utilisons des cookies pour améliorer votre expérience sur notre site :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site</li>
                  <li><strong>Cookies analytiques :</strong> Pour comprendre l'utilisation du site</li>
                  <li><strong>Cookies marketing :</strong> Pour personnaliser les publicités (avec consentement)</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Vos droits</h2>
                <p className="text-gray-600 mb-4">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li><strong>Droit d'accès :</strong> Consulter les données que nous détenons sur vous</li>
                  <li><strong>Droit de rectification :</strong> Corriger des données inexactes</li>
                  <li><strong>Droit à l'effacement :</strong> Demander la suppression de vos données</li>
                  <li><strong>Droit à la portabilité :</strong> Récupérer vos données dans un format structuré</li>
                  <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
                  <li><strong>Droit de limitation :</strong> Limiter le traitement de vos données</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Pour exercer ces droits, contactez-nous à privacy@miral-cycling.com.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Sécurité</h2>
                <p className="text-gray-600">
                  Nous mettons en place des mesures techniques et organisationnelles appropriées 
                  pour protéger vos données personnelles contre la perte, l'utilisation abusive, 
                  l'accès non autorisé, la divulgation, l'altération ou la destruction.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Conservation des données</h2>
                <p className="text-gray-600">
                  Nous conservons vos données personnelles uniquement pendant la durée nécessaire 
                  aux finalités pour lesquelles elles ont été collectées, ou selon les exigences légales.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact</h2>
                <p className="text-gray-600 mb-4">
                  Pour toute question concernant cette politique de confidentialité ou vos données personnelles :
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Email :</strong> privacy@miral-cycling.com</p>
                  <p><strong>Adresse :</strong> MIRAL, 123 Rue du Cyclisme, 75001 Paris, France</p>
                  <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
                </div>
              </div>

              <div className="text-sm text-gray-500 pt-8 border-t">
                <p>Dernière mise à jour : 1er janvier 2024</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}