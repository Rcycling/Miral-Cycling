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
    name: 'Aero Éclat - Jersey',
    collection: 'aero',
    category: 'jerseys',
    type: 'manches-courtes',
    gender: 'unisex',
    price: 115,
    images: [
      '',
      ''
    ],
    colors: COLLECTION_COLORS.aero,
    genders: ['Male', 'Female'],
     description: 'Allie légèreté extrême et ventilation ciblée pour affronter les ascensions par fortes chaleurs. Son design épuré et sa coupe aérodynamique réduisent la traînée et optimisent vos performances sur le plat comme en côte.',
  features: [
    'Tissu ultraléger à fibres creuses',
    'Panneaux en mesh 3D respirant',
    'Coupe anatomique “second skin”',
    'Coutures plates anti-irritation',
    'Bord côte siliconé pour un maintien parfait'

    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: 'aero-sleeveless',
    name: 'Aero Solstice - Jersey',
    collection: 'aero',
    category: 'jerseys',
    type: 'manches-longues',
    gender: 'unisex',
    price: 120,
    images: [
      ''
    ],
    colors: COLLECTION_COLORS.aero,
genders: ['Male', 'Female'],
description: 'Optimise l’équilibre parfait entre isolation et respirabilité lors des sorties mi-saison. Sa maille stretch double densité emprisonne la chaleur sans jamais surchauffer et offre un maintien sur mesure.',
  features: [
    'Maille stretch double densité',
    'Finition intérieure brossée pour plus de douceur',
    'Col montant réglable',
    'Manches anatomiques ergonomiques',
    'Fermeture zippée intégrale anti-courant d’air'

    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    isFeatured: true
  },
  {
    id: 'aero-pro-bib',
    name: 'Aero Impulsion',
    collection: 'aero',
    category: 'shorts',
    type: 'bretelles',
    gender: 'unisex',
    price: 145,
    images: [
      ''
    ],
    colors: COLLECTION_COLORS.aero,
    genders: ['Male', 'Female'],
    description: 'Allie maintien musculaire et légèreté pour vos sprints les plus intenses. Son chamois haute densité absorbe les vibrations tandis que les inserts siliconés garantissent un parfait maintien sans contrainte.',
  features: [
    'Chamois haute densité absorbant les vibrations',
    'Coutures plates anti-frottement',
    'Bretelles mesh respirantes',
    'Compression graduée',
    'Tissu compressif ultra-souple'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    isFeatured: true
  },
{
    id: 'aero-zeub',
    name: 'Aero Zenith',
    collection: 'aero',
    category: 'top',
    type: 'sleeveless-jacket',
    gender: 'unisex',
    price: 95,
    images: [
      ''
    ],
    colors: COLLECTION_COLORS.aero,
    genders: ['Male', 'Female'],
    description: 'La mini-doudoune sans manches ultime, alliant isolation performante et compacité extrême. Son isolant ultra-compressible se range dans sa poche zippée tout en protégeant efficacement du froid.',
  features: [
    'Isolant ultra-compressible haute performance',
    'Empiècements softshell extensibles',
    'Packable dans sa poche zippée intégrée',
    'Col montant matelassé pour un confort cervical optimal',
    'Surface déperlante pour affronter l’humidité'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    isFeatured: true
  
  },
{
    id: 'aero-zeub2',
    name: 'Aero Horizon',
    collection: 'aero',
    category: 'top',
    type: 'long-bib',
    gender: 'unisex',
    price: 150,
    images: [
      ''
    ],
    colors: COLLECTION_COLORS.aero,
    genders: ['Male', 'Female'],
    description: 'Allie protection coupe-vent à respirabilité ciblée pour l’endurance par temps frais. Sa taille haute galbante et son empiècement ergonomique offrent un maintien sans point de pression.',
  features: [
    'Tissu thermique coupe-vent à l’avant',
    'Maille arrière ultra-respirante',
    'Taille haute galbante et confortable',
    'Empiècements ergonomiques sur couture intérieure',
    'Revêtement hydrophobe léger'
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
    inStock: true,
    isFeatured: true
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
    inStock: true,
    isFeatured: true
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
    inStock: true,
    isFeatured: true
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
    inStock: true,
    isFeatured: true
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
    isNew: true,
    isFeatured: true
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