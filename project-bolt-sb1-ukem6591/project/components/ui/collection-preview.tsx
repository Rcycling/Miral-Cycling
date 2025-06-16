'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const collections = [
  {
    id: 'aero',
    name: 'MIRAL Aero',
    subtitle: 'Performance / Course',
    description: 'Conçue pour la vitesse pure et l\'aérodynamisme. Chaque détail optimisé pour la performance.',
    image: 'https://images.pexels.com/photos/6386956/pexels-photo-6386956.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-gray-900 to-black'
  },
  {
    id: 'flow',
    name: 'MIRAL Flow',
    subtitle: 'Confort / Endurance',
    description: 'L\'équilibre parfait entre confort et performance pour vos longues aventures.',
    image: 'https://images.pexels.com/photos/6386944/pexels-photo-6386944.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-gray-800 to-gray-900'
  },
  {
    id: 'terra',
    name: 'MIRAL Terra',
    subtitle: 'Gravel / Exploration',
    description: 'Robustesse et polyvalence pour explorer tous les terrains sans compromis.',
    image: 'https://images.pexels.com/photos/6386955/pexels-photo-6386955.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-gray-700 to-gray-800'
  }
];

export function CollectionPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos Collections
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trois gammes distinctes pour répondre à tous vos besoins cyclistes, 
            de la performance pure à l'exploration aventureuse.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/5]"
            >
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className={`absolute inset-0 bg-gradient-to-t ${collection.color} opacity-60`} />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                >
                  <p className="text-sm font-medium text-gray-300 mb-2">
                    {collection.subtitle}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {collection.name}
                  </h3>
                  <p className="text-gray-200 mb-6 leading-relaxed">
                    {collection.description}
                  </p>
                  
                  <Link href={`/collections?collection=${collection.id}`}>
                    <Button 
                      variant="outline" 
                      className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-all duration-300"
                    >
                      Découvrir
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link href="/collections">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800">
              Voir toutes les collections
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}