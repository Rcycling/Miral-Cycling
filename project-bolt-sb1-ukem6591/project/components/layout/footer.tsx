import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold">MIRAL</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Ride the Silence.
              <br />
              Vêtements de cyclisme premium pour les passionnés de performance et d'esthétique.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Collections */}
          <div className="space-y-4">
            <h4 className="font-semibold">Collections</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/collections?collection=aero" className="hover:text-white transition-colors">MIRAL Aero</Link></li>
              <li><Link href="/collections?collection=flow" className="hover:text-white transition-colors">MIRAL Flow</Link></li>
              <li><Link href="/collections?collection=terra" className="hover:text-white transition-colors">MIRAL Terra</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold">Catégories</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/collections?category=jerseys" className="hover:text-white transition-colors">Maillots</Link></li>
              <li><Link href="/collections?category=shorts" className="hover:text-white transition-colors">Cuissards</Link></li>
              <li><Link href="/collections?category=accessories" className="hover:text-white transition-colors">Accessoires</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/size-guide" className="hover:text-white transition-colors">Guide des tailles</Link></li>
              <li><Link href="/returns" className="hover:text-white transition-colors">Retours</Link></li>
              <li><Link href="/shipping" className="hover:text-white transition-colors">Livraison</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="max-w-md">
            <h4 className="font-semibold mb-4">Newsletter MIRAL</h4>
            <p className="text-sm text-gray-300 mb-4">
              Recevez nos dernières nouveautés et offres exclusives.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-l-md focus:outline-none focus:border-gray-500"
              />
              <button className="px-4 py-2 bg-white text-black rounded-r-md hover:bg-gray-100 transition-colors">
                OK
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 MIRAL. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white transition-colors">Confidentialité</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Conditions</Link>
              <Link href="/legal" className="hover:text-white transition-colors">Mentions légales</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}