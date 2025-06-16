'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              À propos de MIRAL
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Ride the Silence. Plus qu'un slogan, une philosophie qui guide chaque création.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                L'histoire de MIRAL
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  MIRAL naît de la passion pour le cyclisme et de la recherche constante 
                  de l'excellence. Fondée par des cyclistes pour des cyclistes, 
                  notre marque incarne l'élégance minimaliste et la performance technique.
                </p>
                <p>
                  Chaque vêtement MIRAL est conçu avec une attention méticuleuse aux détails, 
                  utilisant les matériaux les plus avancés et les techniques de confection 
                  les plus raffinées. Nous croyons que la beauté réside dans la simplicité 
                  et que la performance naît du silence intérieur.
                </p>
                <p>
                  "Ride the Silence" n'est pas seulement notre devise, c'est une invitation 
                  à découvrir la paix et la concentration que procure le cyclisme, 
                  à travers des vêtements qui deviennent une seconde peau.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square rounded-lg overflow-hidden"
            >
              <Image
                src="https://images.pexels.com/photos/6386942/pexels-photo-6386942.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Cycliste MIRAL"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nos valeurs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trois piliers fondamentaux guident notre approche et définissent l'ADN de MIRAL.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Élégance',
                description: 'Design minimaliste et sophistiqué qui transcende les tendances. Chaque ligne, chaque détail est pensé pour créer une esthétique intemporelle.',
                icon: '✨'
              },
              {
                title: 'Performance',
                description: 'Technologies avancées et matériaux premium pour une expérience cycliste optimale. Respirabilité, confort et liberté de mouvement.',
                icon: '🚀'
              },
              {
                title: 'Silence',
                description: 'La recherche de la sérénité dans l\'effort. Nos vêtements favorisent la concentration et l\'harmonie entre le cycliste et sa machine.',
                icon: '🧘'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              L'équipe MIRAL
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une équipe passionnée de cyclistes, designers et ingénieurs textiles 
              unis par la même vision de l'excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Thomas Laurent',
                role: 'Fondateur & Designer',
                image: 'https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                name: 'Sarah Chen',
                role: 'Directrice Technique',
                image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                name: 'Marcus Weber',
                role: 'Responsable Développement',
                image: 'https://images.pexels.com/photos/6801651/pexels-photo-6801651.jpeg?auto=compress&cs=tinysrgb&w=400'
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}