'use client';

import { motion } from 'framer-motion';
import { Truck, MapPin, Clock, Euro } from 'lucide-react';

export default function ShippingPage() {
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
            <Truck className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Livraison
            </h1>
            <p className="text-xl text-gray-300">
              Livraison rapide et sécurisée pour que vous puissiez rider sans attendre.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shipping Info */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Truck className="w-12 h-12 mx-auto mb-4 text-gray-700" />
              <h3 className="font-semibold text-gray-900 mb-2">Livraison gratuite</h3>
              <p className="text-gray-600 text-sm">
                Dès 75€ d'achat en France métropolitaine
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <Clock className="w-12 h-12 mx-auto mb-4 text-gray-700" />
              <h3 className="font-semibold text-gray-900 mb-2">Expédition 24h</h3>
              <p className="text-gray-600 text-sm">
                Commande avant 15h = expédition le jour même
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <MapPin className="w-12 h-12 mx-auto mb-4 text-gray-700" />
              <h3 className="font-semibold text-gray-900 mb-2">Suivi en temps réel</h3>
              <p className="text-gray-600 text-sm">
                Suivez votre colis étape par étape
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <Euro className="w-12 h-12 mx-auto mb-4 text-gray-700" />
              <h3 className="font-semibold text-gray-900 mb-2">Paiement sécurisé</h3>
              <p className="text-gray-600 text-sm">
                Transactions 100% sécurisées
              </p>
            </motion.div>
          </div>

          {/* Shipping Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Options de livraison
            </h2>
            
            <div className="space-y-6">
              {/* France */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🇫🇷 France métropolitaine</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Colissimo Domicile</h4>
                    <p className="text-gray-600 text-sm mb-2">Livraison à domicile en 2-3 jours ouvrés</p>
                    <p className="font-semibold">Gratuit dès 75€ • 5,90€ sinon</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Colissimo Point Relais</h4>
                    <p className="text-gray-600 text-sm mb-2">Retrait en point relais en 2-3 jours ouvrés</p>
                    <p className="font-semibold">Gratuit dès 50€ • 3,90€ sinon</p>
                  </div>
                </div>
              </div>

              {/* Europe */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🇪🇺 Union Européenne</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Colissimo International</h4>
                    <p className="text-gray-600 text-sm mb-2">Livraison en 4-6 jours ouvrés</p>
                    <p className="font-semibold">12,90€</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">DHL Express</h4>
                    <p className="text-gray-600 text-sm mb-2">Livraison express en 2-3 jours ouvrés</p>
                    <p className="font-semibold">24,90€</p>
                  </div>
                </div>
              </div>

              {/* International */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🌍 International</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Colissimo International</h4>
                    <p className="text-gray-600 text-sm mb-2">Livraison en 7-10 jours ouvrés</p>
                    <p className="font-semibold">19,90€</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">DHL Express</h4>
                    <p className="text-gray-600 text-sm mb-2">Livraison express en 3-5 jours ouvrés</p>
                    <p className="font-semibold">39,90€</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Processing Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Délais de traitement</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Produits en stock</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Commande avant 15h : expédition le jour même</li>
                    <li>• Commande après 15h : expédition le lendemain</li>
                    <li>• Weekend : expédition le lundi suivant</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Produits sur commande</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Délai de fabrication : 2-3 semaines</li>
                    <li>• Notification par email dès expédition</li>
                    <li>• Suivi de commande disponible</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions fréquentes</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Puis-je modifier mon adresse de livraison ?</h3>
                <p className="text-gray-600">
                  Vous pouvez modifier votre adresse de livraison tant que votre commande n'a pas été expédiée. 
                  Contactez-nous rapidement à contact@miral-cycling.com.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Que faire si je ne suis pas présent à la livraison ?</h3>
                <p className="text-gray-600">
                  Le transporteur laissera un avis de passage et votre colis sera disponible en bureau de poste 
                  pendant 15 jours. Vous pouvez aussi choisir la livraison en point relais.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Mon colis est endommagé, que faire ?</h3>
                <p className="text-gray-600">
                  En cas de colis endommagé, refusez la livraison ou émettez des réserves écrites sur le bon de livraison. 
                  Contactez-nous immédiatement à contact@miral-cycling.com avec des photos.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}