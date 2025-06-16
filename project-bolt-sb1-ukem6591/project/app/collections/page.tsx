'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { SAMPLE_PRODUCTS, PRODUCT_COLLECTIONS, PRODUCT_CATEGORIES, GENDER_FILTERS, PRODUCT_TYPES } from '@/lib/constants';
import { ProductCard } from '@/components/ui/product-card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function CollectionsPage() {
  const searchParams = useSearchParams();
  const [selectedCollection, setSelectedCollection] = useState(searchParams.get('collection') || 'all');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedGender, setSelectedGender] = useState(searchParams.get('gender') || 'all');
  const [selectedType, setSelectedType] = useState(searchParams.get('type') || 'all');
  const [sortBy, setSortBy] = useState('name');

  const filteredProducts = useMemo(() => {
    let products = [...SAMPLE_PRODUCTS];

    // Apply filters
    if (selectedCollection !== 'all') {
      products = products.filter(p => p.collection === selectedCollection);
    }
    if (selectedCategory !== 'all') {
      products = products.filter(p => p.category === selectedCategory);
    }
    if (selectedGender !== 'all') {
      products = products.filter(p => p.gender === selectedGender || p.gender === 'unisex');
    }
    if (selectedType !== 'all') {
      products = products.filter(p => p.type === selectedType);
    }

    // Apply sorting
    products.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'collection':
          return a.collection.localeCompare(b.collection);
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return products;
  }, [selectedCollection, selectedCategory, selectedGender, selectedType, sortBy]);

  const getCollectionInfo = (collectionId: string) => {
    const collections = {
      aero: {
        title: 'MIRAL Aero',
        subtitle: 'Performance / Course',
        description: 'Conçue pour la vitesse pure et l\'aérodynamisme. Chaque détail optimisé pour la performance en compétition.',
        color: 'from-gray-900 to-black'
      },
      flow: {
        title: 'MIRAL Flow',
        subtitle: 'Confort / Endurance',
        description: 'L\'équilibre parfait entre confort et performance pour vos longues aventures cyclistes.',
        color: 'from-gray-800 to-gray-900'
      },
      terra: {
        title: 'MIRAL Terra',
        subtitle: 'Gravel / Exploration',
        description: 'Robustesse et polyvalence pour explorer tous les terrains sans compromis.',
        color: 'from-gray-700 to-gray-800'
      }
    };
    return collections[collectionId as keyof typeof collections];
  };

  const currentCollection = selectedCollection !== 'all' ? getCollectionInfo(selectedCollection) : null;

  return (
    <div className="pt-16">
      {/* Header */}
      <section className={`text-white py-20 ${currentCollection ? `bg-gradient-to-r ${currentCollection.color}` : 'bg-black'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {currentCollection ? (
              <>
                <p className="text-lg text-gray-300 mb-2">{currentCollection.subtitle}</p>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  {currentCollection.title}
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  {currentCollection.description}
                </p>
              </>
            ) : (
              <>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Toutes les Collections
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Explorez notre gamme complète de vêtements de cyclisme premium, 
                  conçue pour chaque style de ride.
                </p>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Collection Filter */}
      <section className="py-6 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={selectedCollection === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCollection('all')}
              size="sm"
            >
              Toutes les gammes
            </Button>
            {Object.entries(PRODUCT_COLLECTIONS).map(([key, label]) => (
              <Button
                key={key}
                variant={selectedCollection === key ? 'default' : 'outline'}
                onClick={() => setSelectedCollection(key)}
                size="sm"
              >
                {label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4">
              {/* Category Filter */}
              <div className="flex gap-2">
                <Button
                  variant={selectedCategory === 'all' ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory('all')}
                  size="sm"
                >
                  Tout
                </Button>
                {Object.entries(PRODUCT_CATEGORIES).map(([key, label]) => (
                  <Button
                    key={key}
                    variant={selectedCategory === key ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(key)}
                    size="sm"
                  >
                    {label}
                  </Button>
                ))}
              </div>

              {/* Gender Filter */}
              <Select value={selectedGender} onValueChange={setSelectedGender}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous</SelectItem>
                  <SelectItem value="men">Homme</SelectItem>
                  <SelectItem value="women">Femme</SelectItem>
                  <SelectItem value="unisex">Unisexe</SelectItem>
                </SelectContent>
              </Select>

              {/* Type Filter */}
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous types</SelectItem>
                  {Object.entries(PRODUCT_TYPES).map(([key, label]) => (
                    <SelectItem key={key} value={key}>{label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Trier par:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Nom</SelectItem>
                  <SelectItem value="collection">Collection</SelectItem>
                  <SelectItem value="price-asc">Prix croissant</SelectItem>
                  <SelectItem value="price-desc">Prix décroissant</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <>
              <div className="mb-8">
                <p className="text-gray-600">
                  {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg mb-4">
                Aucun produit ne correspond à vos critères.
              </p>
              <Button 
                onClick={() => {
                  setSelectedCollection('all');
                  setSelectedCategory('all');
                  setSelectedGender('all');
                  setSelectedType('all');
                }}
                className="mt-4"
              >
                Réinitialiser les filtres
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}