'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Heart, ShoppingBag } from 'lucide-react';
import { Product } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const router = useRouter();
  const getCollectionBadge = (collection: string) => {
    const badges = {
      aero: { label: 'Aero', color: 'bg-black text-white' },
      flow: { label: 'Flow', color: 'bg-gray-800 text-white' },
      terra: { label: 'Terra', color: 'bg-gray-700 text-white' }
    };
    return badges[collection as keyof typeof badges] || { label: collection, color: 'bg-gray-500 text-white' };
  };

  const getGenderLabel = (gender: string) => {
    const labels = {
      men: 'Homme',
      women: 'Femme',
      unisex: 'Unisexe'
    };
    return labels[gender as keyof typeof labels] || gender;
  };

  const collectionBadge = getCollectionBadge(product.collection);

  const handleCardClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('a,button')) return;
    router.push(`/products/${product.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={handleCardClick}
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
    >
      {/* Product Image */}
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <Link href={`/products/${product.id}`}> 
            <Badge className={collectionBadge.color}>
              {collectionBadge.label}
            </Badge>
          </Link>
          {product.isNew && (
            <Badge className="bg-green-600 text-white">
              Nouveau
            </Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="sm" variant="outline" className="bg-white/90 backdrop-blur-sm">
            <Heart className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="outline" className="bg-white/90 backdrop-blur-sm">
            <ShoppingBag className="w-4 h-4" />
          </Button>
        </div>

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="destructive" className="text-sm">
              Rupture de stock
            </Badge>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline" className="text-xs">
            {getGenderLabel(product.gender)}
          </Badge>
          <Badge variant="outline" className="text-xs capitalize">
            {product.type.replace('-', ' ')}
          </Badge>
        </div>

        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
            {product.name}
          </h3>
        </Link>

        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-900">
              {product.price}€
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {product.originalPrice}€
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 text-xs text-gray-500">
            {product.sizes.length > 3 ? (
              <span>{product.sizes.length} tailles</span>
            ) : (
              <span>{product.sizes.join(', ')}</span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <Link href={`/products/${product.id}`}>
          <Button 
            className="w-full mt-4 bg-black text-white hover:bg-gray-800"
            disabled={!product.inStock}
          >
            {product.inStock ? 'Voir le produit' : 'Indisponible'}
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}