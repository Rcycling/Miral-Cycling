'use client';

import { motion } from 'framer-motion';

const reviews = [
  {
    id: 1,
    name: 'Jean Dupont',
    line: 'Aéro',
    text: "Excellent maillot, léger et très respirant. Parfait pour mes sorties d'entraînement rapides!",
  },
  {
    id: 2,
    name: 'Marie Durand',
    line: 'Flow',
    text: 'Confort absolu sur les longues distances, je recommande vivement la gamme Flow.',
  },
  {
    id: 3,
    name: 'Lucas Martin',
    line: 'Terra',
    text: "Idéal pour le gravel, robuste et bien pensé. J'adore explorer avec l'équipement Terra.",
  },
];

const colorMap: Record<string, string> = {
  Aéro: 'border-blue-600 bg-blue-50',
  Flow: 'border-green-600 bg-green-50',
  Terra: 'border-yellow-500 bg-yellow-50',
};

export function ReviewsSection() {
  return (
    <section id="avis" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Avis Clients</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-6 rounded-lg border ${colorMap[review.line]}`}
            >
              <p className="mb-4 text-gray-700">{review.text}</p>
              <p className="font-semibold text-gray-900">{review.name}</p>
              <p className="text-sm text-gray-500">{review.line}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
