'use client';
import { ReactNode } from 'react';
import { CartProvider } from '@/lib/cart-context';
import { LanguageProvider } from '@/lib/language-context';
import { FavoritesProvider } from '@/lib/favorites-context';
import { UserProvider } from '@/lib/user-context';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <UserProvider>
        <CartProvider>
          <FavoritesProvider>{children}</FavoritesProvider>
        </CartProvider>
      </UserProvider>
    </LanguageProvider>
  );
}
