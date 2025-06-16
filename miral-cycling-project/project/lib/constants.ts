export const PRODUCT_COLLECTIONS = {
  aero: 'MIRAL Aero',
  flow: 'MIRAL Flow',
  terra: 'MIRAL Terra'
} as const;

export const COLLECTION_COLORS: Record<string, ColorOption[]> = {
  aero: [
    { name: 'Deep Black', hex: '#1A1A1A', image: '' },
    { name: 'Carmine Red', hex: '#8B0000', image: '' },
    { name: 'Graphite', hex: '#2F2F2F', image: '' }
  ],
  flow: [
    { name: 'Mineral Blue', hex: '#3A5A80', image: '' },
    { name: 'Sage Green', hex: '#8DAA91', image: '' },
    { name: 'Ash White', hex: '#F2F2F2', image: '' }
  ],
  terra: [
    { name: 'Earth Clay', hex: '#B25C3C', image: '' },
    { name: 'Olive Green', hex: '#708238', image: '' },
    { name: 'Sand Beige', hex: '#D8CAB8', image: '' }
  ]
};

export const PRODUCT_CATEGORIES = {
  jerseys: 'Maillots',
  shorts: 'Cuissards',
  accessories: 'Accessoires'
} as const;

export const GENDER_FILTERS = {
  all: 'Tous',
  men: 'Homme',
  women: 'Femme',
  unisex: 'Unisexe'
} as const;

export const PRODUCT_TYPES = {
  'manches-courtes': 'Manches courtes',
  'manches-longues': 'Manches longues',
  'sans-manches': 'Sans manches',
  'bretelles': 'Bretelles',
  'renforce': 'Renforcé',
  'accessoire': 'Accessoire'
} as const;

export interface ColorOption {
  name: string;
  hex: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  collection: keyof typeof PRODUCT_COLLECTIONS;
  category: keyof typeof PRODUCT_CATEGORIES;
  type: keyof typeof PRODUCT_TYPES;
  gender: keyof typeof GENDER_FILTERS;
  price: number;
  originalPrice?: number;
  images: string[];
  colors?: ColorOption[];
  genders?: string[];
  description: string;
  features: string[];
  sizes: string[];
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
}

export const SAMPLE_PRODUCTS: Product[] = [
  // MIRAL Aero Collection
  {
    id: 'aero-one-jersey',
    name: 'AeroOne Jersey',
    collection: 'aero',
    category: 'jerseys',
    type: 'manches-courtes',
    gender: 'unisex',
    price: 135,
    images: [
      'https://images.pexels.com/photos/6386956/pexels-photo-6386956.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6386942/pexels-photo-6386942.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: COLLECTION_COLORS.aero,
    genders: ['Male', 'Female'],
    description: 'Coupe aérodynamique, tissu compressif, mesh sous les bras, zip invisible. Conçu pour la performance pure.',
    features: [
      'Tissu compressif haute performance',
      'Mesh respirant sous les bras',
      'Zip invisible YKK',
      'Coupe aérodynamique',
      'Bandes réfléchissantes'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: 'aero-sleeveless',
    name: 'AeroSleeveless',
    collection: 'aero',
    category: 'jerseys',
    type: 'sans-manches',
    gender: 'unisex',
    price: 105,
    images: [
      'https://images.pexels.com/photos/6386958/pexels-photo-6386958.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: COLLECTION_COLORS.aero,
    genders: ['Male', 'Female'],
    description: 'Parfait pour l\'été ou home trainer, léger, respirant. Performance maximale par temps chaud.',
    features: [
      'Ultra-léger et respirant',
      'Parfait pour l\'entraînement indoor',
      'Séchage rapide',
      'Coupe ergonomique',
      'Tissu anti-odeur'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    isFeatured: true
  },
  {
    id: 'aero-pro-bib',
    name: 'AeroPro Bib',
    collection: 'aero',
    category: 'shorts',
    type: 'bretelles',
    gender: 'unisex',
    price: 145,
    images: [
      'https://images.pexels.com/photos/6386937/pexels-photo-6386937.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: COLLECTION_COLORS.aero,
    genders: ['Male', 'Female'],
    description: 'Peau haute densité, coutures plates, bretelles en mesh. Le summum du confort pour la compétition.',
    features: [
      'Peau de chamois haute densité',
      'Coutures plates anti-frottement',
      'Bretelles mesh respirantes',
      'Compression graduée',
      'Tissu compressif'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    isFeatured: true
  },

  // MIRAL Flow Collection
  {
    id: 'flow-lite-jersey-men',
    name: 'FlowLite Jersey Homme',
    collection: 'flow',
    category: 'jerseys',
    type: 'manches-courtes',
    gender: 'men',
    price: 110,
    images: [
      'https://images.pexels.com/photos/6386944/pexels-photo-6386944.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: COLLECTION_COLORS.flow,
    genders: ['Male', 'Female'],
    description: 'Confort respirant, tissu doux, poche triple, bande silicone. Idéal pour les longues sorties.',
    features: [
      'Tissu doux et respirant',
      '3 poches arrière spacieuses',
      'Bande silicone anti-remontée',
      'Coupe confortable',
      'Protection UV 30+'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true
  },
  {
    id: 'flow-lite-jersey-women',
    name: 'FlowLite Jersey Femme',
    collection: 'flow',
    category: 'jerseys',
    type: 'manches-courtes',
    gender: 'women',
    price: 110,
    images: [
      'https://images.pexels.com/photos/6386948/pexels-photo-6386948.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: COLLECTION_COLORS.flow,
    genders: ['Male', 'Female'],
    description: 'Confort respirant, tissu doux, poche triple, bande silicone. Coupe féminine ajustée.',
    features: [
      'Coupe féminine spécifique',
      'Tissu doux et respirant',
      '3 poches arrière',
      'Bande silicone',
      'Coutures plates'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'flow-fit-bib-men',
    name: 'FlowFit Bib Homme',
    collection: 'flow',
    category: 'shorts',
    type: 'bretelles',
    gender: 'men',
    price: 130,
    images: [
      'https://images.pexels.com/photos/6386951/pexels-photo-6386951.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: COLLECTION_COLORS.flow,
    genders: ['Male', 'Female'],
    description: 'Grand confort longue distance, tissu souple, bande large. Parfait pour l\'endurance.',
    features: [
      'Peau de chamois longue distance',
      'Tissu ultra-souple',
      'Bretelles larges confortables',
      'Bande de taille large',
      'Compression douce'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true
  },
  {
    id: 'flow-fit-bib-women',
    name: 'FlowFit Bib Femme',
    collection: 'flow',
    category: 'shorts',
    type: 'bretelles',
    gender: 'women',
    price: 130,
    images: [
      'https://images.pexels.com/photos/6386953/pexels-photo-6386953.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: COLLECTION_COLORS.flow,
    genders: ['Male', 'Female'],
    description: 'Grand confort longue distance, tissu souple, bande large. Coupe féminine spécifique.',
    features: [
      'Peau de chamois féminine',
      'Tissu ultra-souple',
      'Bretelles adaptées',
      'Coupe féminine',
      'Compression douce'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true
  },

  // MIRAL Terra Collection
  {
    id: 'terra-shield-jersey',
    name: 'TerraShield Jersey',
    collection: 'terra',
    category: 'jerseys',
    type: 'manches-longues',
    gender: 'unisex',
    price: 125,
    images: [
      'https://images.pexels.com/photos/6386955/pexels-photo-6386955.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: COLLECTION_COLORS.terra,
    genders: ['Male', 'Female'],
    description: 'Résistant au vent, manches longues, zip étanche, col renforcé. Conçu pour l\'exploration.',
    features: [
      'Tissu coupe-vent',
      'Zip étanche YKK',
      'Col renforcé',
      'Poches sécurisées',
      'Réflecteurs 360°'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    isNew: true
  },
  {
    id: 'terra-grip-bib',
    name: 'TerraGrip Bib',
    collection: 'terra',
    category: 'shorts',
    type: 'renforce',
    gender: 'unisex',
    price: 140,
    images: [
      'https://images.pexels.com/photos/6386959/pexels-photo-6386959.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: COLLECTION_COLORS.terra,
    genders: ['Male', 'Female'],
    description: 'Tissu renforcé, poches latérales, grip cuisse solide. Résistance maximale pour le gravel.',
    features: [
      'Tissu renforcé anti-abrasion',
      'Poches latérales cargo',
      'Grip cuisse renforcé',
      'Peau de chamois gravel',
      'Coutures renforcées'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true
  },

  // Accessoires
  {
    id: 'chaussettes-aero',
    name: 'Chaussettes MIRAL Aero',
    collection: 'aero',
    category: 'accessories',
    type: 'accessoire',
    gender: 'unisex',
    price: 22,
    images: [
      'https://images.pexels.com/photos/6386960/pexels-photo-6386960.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Compression légère, sans couture, logo discret. Performance et confort.',
    features: [
      'Compression légère',
      'Sans couture',
      'Logo MIRAL discret',
      'Tissu technique',
      'Anti-odeur'
    ],
    sizes: ['S', 'M', 'L'],
    inStock: true
  },
  {
    id: 'casquette-classic',
    name: 'Casquette MIRAL Classic',
    collection: 'flow',
    category: 'accessories',
    type: 'accessoire',
    gender: 'unisex',
    price: 30,
    images: [
      'https://images.pexels.com/photos/6386961/pexels-photo-6386961.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Coton technique, visière courte, logo brodé. Style intemporel.',
    features: [
      'Coton technique respirant',
      'Visière courte',
      'Logo brodé',
      'Réglage arrière',
      'Lavable en machine'
    ],
    sizes: ['Unique'],
    inStock: true
  },
  {
    id: 'bidon-600ml',
    name: 'Bidon MIRAL 600ml',
    collection: 'flow',
    category: 'accessories',
    type: 'accessoire',
    gender: 'unisex',
    price: 12,
    images: [
      'https://images.pexels.com/photos/6386962/pexels-photo-6386962.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Sans BPA, style noir mat, logo blanc. Design épuré et fonctionnel.',
    features: [
      'Sans BPA',
      'Capacité 600ml',
      'Design noir mat',
      'Logo blanc sérigraphié',
      'Valve push-pull'
    ],
    sizes: ['600ml'],
    inStock: true
  },
  {
    id: 'manchettes-flow',
    name: 'Manchettes Flow',
    collection: 'flow',
    category: 'accessories',
    type: 'accessoire',
    gender: 'unisex',
    price: 35,
    images: [
      'https://images.pexels.com/photos/6386963/pexels-photo-6386963.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Thermorégulatrices, anti-UV. Adaptabilité parfaite aux conditions.',
    features: [
      'Thermorégulation',
      'Protection UV 50+',
      'Tissu stretch',
      'Coutures plates',
      'Logo réfléchissant'
    ],
    sizes: ['S', 'M', 'L'],
    inStock: true
  },
  {
    id: 'gants-aero-grip',
    name: 'Gants AeroGrip',
    collection: 'aero',
    category: 'accessories',
    type: 'accessoire',
    gender: 'unisex',
    price: 40,
    images: [
      'https://images.pexels.com/photos/6386964/pexels-photo-6386964.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Gel antichoc, coupe minimaliste. Grip et confort optimaux.',
    features: [
      'Gel antichoc stratégique',
      'Coupe minimaliste',
      'Paume synthétique grip',
      'Compatible écrans tactiles',
      'Fermeture velcro'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'tour-cou-terra',
    name: 'Tour de cou Terra Buff',
    collection: 'terra',
    category: 'accessories',
    type: 'accessoire',
    gender: 'unisex',
    price: 18,
    images: [
      'https://images.pexels.com/photos/6386965/pexels-photo-6386965.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Multi-saison, design MIRAL discret. Polyvalence et style.',
    features: [
      'Multi-saison',
      'Design MIRAL discret',
      'Tissu technique',
      'Usage multiple',
      'Lavable'
    ],
    sizes: ['Unique'],
    inStock: true
  }
];