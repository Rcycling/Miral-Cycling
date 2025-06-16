'use client';

import { useState } from 'react';
import { useFavorites } from '@/lib/favorites-context';
import { motion } from 'framer-motion';
import { User, Package, Heart, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function AccountPage() {
  const [user, setUser] = useState({
    firstName: 'Thomas',
    lastName: 'Laurent',
    email: 'thomas@example.com',
    phone: '+33 6 12 34 56 78'
  });

  const [orders] = useState([
    {
      id: 'CMD-2024-001',
      date: '2024-01-15',
      status: 'Livré',
      total: 245,
      items: ['AeroOne Jersey', 'AeroPro Bib']
    },
    {
      id: 'CMD-2024-002',
      date: '2024-01-10',
      status: 'En cours',
      total: 89,
      items: ['Chaussettes MIRAL Aero']
    }
  ]);

  const { state: favoritesState, dispatch: favoritesDispatch } = useFavorites();
  const favorites = favoritesState.items;

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <User className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mon compte
            </h1>
            <p className="text-xl text-gray-300">
              Gérez vos informations, commandes et préférences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Account Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Profil
              </TabsTrigger>
              <TabsTrigger value="orders" className="flex items-center gap-2">
                <Package className="w-4 h-4" />
                Commandes
              </TabsTrigger>
              <TabsTrigger value="favorites" className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Favoris
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Paramètres
              </TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations personnelles</h2>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">Prénom</Label>
                        <Input
                          id="firstName"
                          value={user.firstName}
                          onChange={(e) => setUser({...user, firstName: e.target.value})}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Nom</Label>
                        <Input
                          id="lastName"
                          value={user.lastName}
                          onChange={(e) => setUser({...user, lastName: e.target.value})}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={user.email}
                          onChange={(e) => setUser({...user, email: e.target.value})}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input
                          id="phone"
                          value={user.phone}
                          onChange={(e) => setUser({...user, phone: e.target.value})}
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button className="bg-black text-white hover:bg-gray-800">
                        Sauvegarder les modifications
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Adresses</h2>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="space-y-4">
                      <div className="border-b pb-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Adresse de livraison</h3>
                        <p className="text-gray-600">
                          123 Rue de la République<br />
                          69001 Lyon, France
                        </p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Modifier
                        </Button>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Adresse de facturation</h3>
                        <p className="text-gray-600">
                          Identique à l'adresse de livraison
                        </p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Modifier
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            {/* Orders Tab */}
            <TabsContent value="orders">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Mes commandes</h2>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="bg-white border border-gray-200 rounded-lg p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-gray-900">Commande {order.id}</h3>
                          <p className="text-gray-600 text-sm">Passée le {new Date(order.date).toLocaleDateString('fr-FR')}</p>
                        </div>
                        <div className="text-right">
                          <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                            order.status === 'Livré' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {order.status}
                          </span>
                          <p className="font-semibold mt-1">{order.total}€</p>
                        </div>
                      </div>
                      <div className="border-t pt-4">
                        <p className="text-gray-600 text-sm mb-2">Articles :</p>
                        <ul className="text-gray-800">
                          {order.items.map((item, index) => (
                            <li key={index} className="text-sm">• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <Button variant="outline" size="sm">
                          Voir les détails
                        </Button>
                        {order.status === 'Livré' && (
                          <Button variant="outline" size="sm">
                            Retourner
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Favorites Tab */}
            <TabsContent value="favorites">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Mes favoris</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {favorites.length === 0 && (
                    <p className="col-span-full text-gray-600">Aucun favori pour l'instant.</p>
                  )}
                  {favorites.map((item) => (
                    <div key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                        <p className="font-bold text-lg mb-3">{item.price}€</p>
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1 bg-black text-white hover:bg-gray-800">
                            Ajouter au panier
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => favoritesDispatch({ type: 'REMOVE', payload: item.id })}
                          >
                            <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Paramètres du compte</h2>
                  <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">Notifications</h3>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3" defaultChecked />
                          <span className="text-gray-700">Recevoir les newsletters MIRAL</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3" defaultChecked />
                          <span className="text-gray-700">Notifications de commande</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3" />
                          <span className="text-gray-700">Offres promotionnelles</span>
                        </label>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <h3 className="font-semibold text-gray-900 mb-4">Sécurité</h3>
                      <div className="space-y-3">
                        <Button variant="outline">
                          Changer le mot de passe
                        </Button>
                        <Button variant="outline">
                          Activer l'authentification à deux facteurs
                        </Button>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <h3 className="font-semibold text-gray-900 mb-4">Données</h3>
                      <div className="space-y-3">
                        <Button variant="outline">
                          Télécharger mes données
                        </Button>
                        <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                          Supprimer mon compte
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button variant="outline" className="flex items-center gap-2">
                    <LogOut className="w-4 h-4" />
                    Se déconnecter
                  </Button>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}