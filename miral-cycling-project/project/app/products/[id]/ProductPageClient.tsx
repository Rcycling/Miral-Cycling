'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Check, Star } from 'lucide-react';
import { SAMPLE_PRODUCTS } from '@/lib/constants';
import { useCart } from '@/lib/cart-context';
import { useFavorites } from '@/lib/favorites-context';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { useLanguage } from '@/lib/language-context';
import { ProductGallery } from '@/components/ui/product-gallery';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = SAMPLE_PRODUCTS.find(p => p.id === params.id);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedGender, setSelectedGender] = useState(product?.genders?.[0] || 'Male');
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || null);
  const { dispatch } = useCart();
  const { state: favoritesState, dispatch: favoritesDispatch } = useFavorites();
  const { t } = useLanguage();

  const isFavorite = favoritesState.items.some(item => item.id === product?.id);

  const toggleFavorite = () => {
    if (!product) return;
    if (isFavorite) {
      favoritesDispatch({ type: 'REMOVE', payload: product.id });
    } else {
      favoritesDispatch({
        type: 'ADD',
        payload: {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0],
        },
      });
    }
  };

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    if (!selectedSize) return;

    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        size: selectedSize,
        gender: selectedGender,
        color: selectedColor?.name,
        image: product.images[0]
      }
    });
  };

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumbs
          items={[
            { label: t.home, href: '/' },
            { label: t.collections, href: '/collections' },
            { label: product.name },
          ]}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Images */}
          <div className="space-y-4">
            <ProductGallery images={product.images} />
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-2">
                {product.isNew && (
                  <Badge className="bg-black text-white">Nouveau</Badge>
                )}
                <Badge variant="outline" className="capitalize">
                  {product.type}
                </Badge>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-900">
                    {product.price}€
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      {product.originalPrice}€
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">(24 avis)</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8">
                {product.description}
              </p>

              {product.genders && (
                <div className="mb-6 space-y-2">
                  <label className="block text-sm font-medium text-gray-900">Genre</label>
                  <div className="flex gap-2">
                    {product.genders.map(g => (
                      <button
                        key={g}
                        onClick={() => setSelectedGender(g)}
                        className={`px-3 py-1 rounded-md border text-sm ${selectedGender === g ? 'bg-black text-white' : 'bg-white text-gray-700'}`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {product.colors && (
                <div className="mb-6 space-y-2">
                  <label className="block text-sm font-medium text-gray-900">Couleur</label>
                  <div className="flex gap-2">
                    {product.colors.map((c, idx) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c)}
                        className={`w-8 h-8 rounded-full border-2 ${selectedColor?.name === c.name ? 'border-black' : 'border-gray-300'}`}
                        style={{ backgroundColor: c.hex }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              <div className="space-y-4 mb-8">
                <label className="block text-sm font-medium text-gray-900">
                  Taille
                </label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choisir une taille" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.sizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Add to Cart */}
              <div className="flex gap-4 mb-8">
                <Button
                  onClick={handleAddToCart}
                  disabled={!selectedSize || !product.inStock}
                  className="flex-1 bg-black text-white hover:bg-gray-800"
                  size="lg"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  {!product.inStock ? 'Rupture de stock' : 'Ajouter au panier'}
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="px-6"
                  onClick={toggleFavorite}
                >
                  <Heart
                    className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`}
                  />
                </Button>
              </div>

              {/* Stock Status */}
              {product.inStock && (
                <div className="flex items-center gap-2 text-green-600">
                  <Check className="w-4 h-4" />
                  <span className="text-sm">En stock - Expédition sous 24h</span>
                </div>
              )}
            </motion.div>

            {/* Product Details Tabs */}
            <Tabs defaultValue="features" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="features">Caractéristiques</TabsTrigger>
                <TabsTrigger value="sizing">Tailles</TabsTrigger>
                <TabsTrigger value="care">Entretien</TabsTrigger>
              </TabsList>
              
              <TabsContent value="features" className="space-y-4">
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              
              <TabsContent value="sizing" className="space-y-4">
                <div className="text-sm text-gray-600 space-y-2">
                  <p>Guide des tailles pour un ajustement optimal :</p>
                  <ul className="space-y-1">
                    <li>• XS: Tour de poitrine 84-88cm</li>
                    <li>• S: Tour de poitrine 88-92cm</li>
                    <li>• M: Tour de poitrine 92-96cm</li>
                    <li>• L: Tour de poitrine 96-100cm</li>
                    <li>• XL: Tour de poitrine 100-104cm</li>
                  </ul>
                  <p>Coupe ajustée pour une performance optimale.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="care" className="space-y-4">
                <div className="text-sm text-gray-600 space-y-2">
                  <p>Instructions d'entretien :</p>
                  <ul className="space-y-1">
                    <li>• Lavage à 30°C maximum</li>
                    <li>• Ne pas utiliser d'adoucissant</li>
                    <li>• Séchage à l'air libre recommandé</li>
                    <li>• Ne pas repasser sur les logos</li>
                    <li>• Laver avec des couleurs similaires</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
