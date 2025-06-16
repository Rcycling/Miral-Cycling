'use client';
import { ReactNode } from 'react';
import { CartProvider } from '@/lib/cart-context';
import { LanguageProvider } from '@/lib/language-context';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <CartProvider>{children}</CartProvider>
    </LanguageProvider>
  );
}
