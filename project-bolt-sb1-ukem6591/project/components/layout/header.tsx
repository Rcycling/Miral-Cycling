'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, User } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language-context';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state } = useCart();
  const { t, lang, setLang } = useLanguage();

  const navigation = [
    { name: t.home, href: '/' },
    { name: t.collections, href: '/collections' },
    { name: t.about, href: '/about' },
    { name: t.contact, href: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tight">
            MIRAL
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-black transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as 'fr' | 'en')}
              className="text-sm border border-gray-300 rounded-md bg-white px-2 py-1"
            >
              <option value="fr">FR</option>
              <option value="en">EN</option>
            </select>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <User className="w-5 h-5" />
            </Button>
            
            <Link href="/cart" className="relative">
              <Button variant="ghost" size="sm">
                <ShoppingBag className="w-5 h-5" />
                {state.itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {state.itemCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100"
          >
            <div className="px-4 py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-black transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/account"
                className="block text-gray-700 hover:text-black transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.account}
              </Link>
              <Link
                href="/cart"
                className="block text-gray-700 hover:text-black transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.cart}
              </Link>
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as 'fr' | 'en')}
                className="mt-2 w-full border border-gray-300 rounded-md px-2 py-1"
              >
                <option value="fr">FR</option>
                <option value="en">EN</option>
              </select>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}