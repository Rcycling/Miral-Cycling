'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SAMPLE_PRODUCTS } from '@/lib/constants';
import { ProductCard } from '@/components/ui/product-card';
import { Button } from '@/components/ui/button';

export function FeaturedProducts() {
  const featuredProducts = SAMPLE_PRODUCTS.filter(product => product.isFeatured).slice(0, 8);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Produits Phares
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de produits emblématiques, 
            représentant l'excellence de chaque gamme MIRAL.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/collections">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800">
              Voir tous les produits
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}