'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingCart, X, Plus, Minus } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { useLanguage } from '@/lib/language-context';
import { Button } from '@/components/ui/button';

export default function CartPage() {
  const { state, dispatch } = useCart();
  const { t } = useLanguage();

  const handleRemove = (item: { id: string }) => {
    dispatch({ type: 'REMOVE_ITEM', payload: item.id });
  };

  const handleQuantity = (item: { id: string; quantity: number }, qty: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: qty } });
  };

  if (state.items.length === 0) {
    return (
      <div className="pt-16">
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <ShoppingCart className="w-16 h-16 mx-auto text-gray-400 mb-6" />
          <h1 className="text-3xl font-bold mb-4">{t.cart}</h1>
          <p className="text-gray-600 mb-8">Votre panier est vide.</p>
          <Link href="/collections">
            <Button className="bg-black text-white hover:bg-gray-800">
              Continuer vos achats
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <h1 className="text-3xl font-bold">{t.cart}</h1>
        <div className="space-y-6">
          {state.items.map(item => (
            <motion.div
              key={`${item.id}-${item.size}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 border rounded-lg p-4 bg-white"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-lg object-cover w-20 h-20"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-500">Taille: {item.size}</p>
                <p className="font-medium">{item.price}€</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantity(item, item.quantity - 1)}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-6 text-center">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantity(item, item.quantity + 1)}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <Button variant="ghost" size="icon" onClick={() => handleRemove(item)}>
                <X className="w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-between items-center border-t pt-6">
          <span className="text-xl font-semibold">Total : {state.total}€</span>
          <Button className="bg-black text-white hover:bg-gray-800">
            Passer la commande
          </Button>
        </div>
      </div>
    </div>
  );
}
