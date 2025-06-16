'use client';

import { motion } from 'framer-motion';
import { Ruler, User, Users } from 'lucide-react';

export default function SizeGuidePage() {
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
            <Ruler className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Guide des tailles
            </h1>
            <p className="text-xl text-gray-300">
              Trouvez la taille parfaite pour un confort optimal sur tous vos parcours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Size Guide Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* How to Measure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Comment prendre vos mesures
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gray-100 p-6 rounded-lg mb-4">
                  <User className="w-12 h-12 mx-auto text-gray-700" />
                </div>
                <h3 className="font-semibold mb-2">Tour de poitrine</h3>
                <p className="text-gray-600 text-sm">
                  Mesurez autour de la partie la plus large de votre poitrine, 
                  en gardant le mètre ruban horizontal.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 p-6 rounded-lg mb-4">
                  <Users className="w-12 h-12 mx-auto text-gray-700" />
                </div>
                <h3 className="font-semibold mb-2">Tour de taille</h3>
                <p className="text-gray-600 text-sm">
                  Mesurez autour de votre taille naturelle, 
                  généralement la partie la plus étroite de votre torse.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 p-6 rounded-lg mb-4">
                  <Ruler className="w-12 h-12 mx-auto text-gray-700" />
                </div>
                <h3 className="font-semibold mb-2">Tour de hanches</h3>
                <p className="text-gray-600 text-sm">
                  Mesurez autour de la partie la plus large de vos hanches, 
                  en gardant le mètre ruban horizontal.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Men's Size Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tailles Homme</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left">Taille</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Tour de poitrine (cm)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Tour de taille (cm)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Tour de hanches (cm)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">XS</td>
                    <td className="border border-gray-300 px-4 py-3">84-88</td>
                    <td className="border border-gray-300 px-4 py-3">70-74</td>
                    <td className="border border-gray-300 px-4 py-3">86-90</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">S</td>
                    <td className="border border-gray-300 px-4 py-3">88-92</td>
                    <td className="border border-gray-300 px-4 py-3">74-78</td>
                    <td className="border border-gray-300 px-4 py-3">90-94</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">M</td>
                    <td className="border border-gray-300 px-4 py-3">92-96</td>
                    <td className="border border-gray-300 px-4 py-3">78-82</td>
                    <td className="border border-gray-300 px-4 py-3">94-98</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">L</td>
                    <td className="border border-gray-300 px-4 py-3">96-100</td>
                    <td className="border border-gray-300 px-4 py-3">82-86</td>
                    <td className="border border-gray-300 px-4 py-3">98-102</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">XL</td>
                    <td className="border border-gray-300 px-4 py-3">100-104</td>
                    <td className="border border-gray-300 px-4 py-3">86-90</td>
                    <td className="border border-gray-300 px-4 py-3">102-106</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">XXL</td>
                    <td className="border border-gray-300 px-4 py-3">104-108</td>
                    <td className="border border-gray-300 px-4 py-3">90-94</td>
                    <td className="border border-gray-300 px-4 py-3">106-110</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Women's Size Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tailles Femme</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left">Taille</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Tour de poitrine (cm)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Tour de taille (cm)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Tour de hanches (cm)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">XS</td>
                    <td className="border border-gray-300 px-4 py-3">78-82</td>
                    <td className="border border-gray-300 px-4 py-3">62-66</td>
                    <td className="border border-gray-300 px-4 py-3">86-90</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">S</td>
                    <td className="border border-gray-300 px-4 py-3">82-86</td>
                    <td className="border border-gray-300 px-4 py-3">66-70</td>
                    <td className="border border-gray-300 px-4 py-3">90-94</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">M</td>
                    <td className="border border-gray-300 px-4 py-3">86-90</td>
                    <td className="border border-gray-300 px-4 py-3">70-74</td>
                    <td className="border border-gray-300 px-4 py-3">94-98</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">L</td>
                    <td className="border border-gray-300 px-4 py-3">90-94</td>
                    <td className="border border-gray-300 px-4 py-3">74-78</td>
                    <td className="border border-gray-300 px-4 py-3">98-102</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">XL</td>
                    <td className="border border-gray-300 px-4 py-3">94-98</td>
                    <td className="border border-gray-300 px-4 py-3">78-82</td>
                    <td className="border border-gray-300 px-4 py-3">102-106</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Fit Guide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Guide d'ajustement MIRAL</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">MIRAL Aero</h3>
                <p className="text-gray-600 text-sm">
                  Coupe ajustée et aérodynamique. Choisissez votre taille habituelle 
                  pour un ajustement optimal en position de course.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">MIRAL Flow</h3>
                <p className="text-gray-600 text-sm">
                  Coupe confortable avec plus d'aisance. Parfait pour les longues 
                  distances avec un confort maximal.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">MIRAL Terra</h3>
                <p className="text-gray-600 text-sm">
                  Coupe polyvalente avec liberté de mouvement. Idéal pour 
                  l'exploration et les terrains variés.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}