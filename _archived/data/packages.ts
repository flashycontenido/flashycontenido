import { CloudinaryPresets } from '@/utils/cloudinary';

export interface Package {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  price: string;
  includes: string[];
  images: string[];
  imageUrl?: string;
  imageAlt?: string;
  imagesDownload?: string[];
}

const rawImageUrl = 'https://res.cloudinary.com/djqiqpilh/image/upload/v1760010204/pexels-mo-eid-1268975-11798029_idne6u.jpg';
const optimizedImageUrl = CloudinaryPresets.card(rawImageUrl);

export const packagesData: Package[] = [
  {
    id: '1',
    slug: 'paquete-starter',
    title: 'PAQUETE STARTER',
    description: 'Ideal para emprendedores que están comenzando y necesitan una presencia digital básica.',
    fullDescription: 'El paquete perfecto para iniciar tu presencia digital. Incluye diseño de logo, perfil de redes sociales y asesoría básica para que comiences con el pie derecho en el mundo digital.',
    price: '$600',
    includes: [
      'Diseño de logotipo básico',
      'Perfil en 2 redes sociales',
      'Banner y foto de perfil',
      '5 publicaciones diseñadas',
      'Guía de marca básica',
      'Asesoría inicial (2 horas)',
      'Optimización de perfiles',
      'Soporte por 30 días'
    ],
    images: [
      optimizedImageUrl,
      optimizedImageUrl,
      optimizedImageUrl,
    ],
    imageUrl: optimizedImageUrl,
    imageAlt: 'Paquete Starter'
  },
  {
    id: '2',
    slug: 'paquete-growth',
    title: 'PAQUETE GROWTH',
    description: 'Para negocios en crecimiento que buscan ampliar su alcance digital.',
    fullDescription: 'Expande tu presencia digital con un paquete completo que incluye gestión de redes sociales, contenido mensual, campañas publicitarias y análisis de métricas para optimizar tu crecimiento.',
    price: '$1,200/mes',
    includes: [
      'Gestión de 4 redes sociales',
      '20 publicaciones mensuales',
      'Diseños profesionales',
      'Estrategia de contenido',
      'Campañas publicitarias básicas',
      'Reportes mensuales detallados',
      'Community management',
      'Optimización continua'
    ],
    images: [
      optimizedImageUrl,
      optimizedImageUrl,
      optimizedImageUrl,
    ],
    imageUrl: optimizedImageUrl,
    imageAlt: 'Paquete Growth'
  },
  {
    id: '3',
    slug: 'paquete-premium',
    title: 'PAQUETE PREMIUM',
    description: 'Solución completa para empresas que quieren dominar el mercado digital.',
    fullDescription: 'La solución más completa para empresas ambiciosas. Incluye todo: branding completo, gestión integral de redes, desarrollo web, campañas publicitarias avanzadas y reportes detallados mensuales.',
    price: '$2,500/mes',
    includes: [
      'Todo lo del paquete Growth',
      'Desarrollo web profesional',
      'Branding completo',
      'Campañas publicitarias avanzadas',
      'Sesiones fotográficas mensuales',
      'Videos promocionales',
      'Consultoría estratégica',
      'Atención prioritaria 24/7'
    ],
    images: [
      optimizedImageUrl,
      optimizedImageUrl,
      optimizedImageUrl,
    ],
    imageUrl: optimizedImageUrl,
    imageAlt: 'Paquete Premium'
  },
  {
    id: '4',
    slug: 'paquete-social',
    title: 'PAQUETE SOCIAL',
    description: 'Especializado en gestión de redes sociales y contenido creativo.',
    fullDescription: 'Domina las redes sociales con contenido profesional, gestión de comunidad, calendario editorial personalizado y estrategias de engagement para construir una audiencia fiel.',
    price: '$800/mes',
    includes: [
      'Gestión de 5 redes sociales',
      '30 publicaciones mensuales',
      'Stories y reels semanales',
      'Respuesta a comentarios',
      'Análisis de competencia',
      'Estrategias de engagement',
      'Calendario editorial',
      'Reportes de crecimiento'
    ],
    images: [
      optimizedImageUrl,
      optimizedImageUrl,
      optimizedImageUrl,
    ],
    imageUrl: optimizedImageUrl,
    imageAlt: 'Paquete Social'
  },
  {
    id: '5',
    slug: 'paquete-web',
    title: 'PAQUETE WEB',
    description: 'Enfocado en desarrollo web profesional y optimizado para conversiones.',
    fullDescription: 'Tu sitio web profesional y efectivo. Incluye diseño UX/UI, desarrollo responsive, optimización SEO, integración de formularios y análisis de conversiones para maximizar resultados.',
    price: '$1,500',
    includes: [
      'Diseño web personalizado',
      'Hasta 10 páginas',
      'Diseño responsive',
      'Optimización SEO avanzada',
      'Integración de redes sociales',
      'Formularios de contacto',
      'Google Analytics completo',
      'Hosting y dominio (1 año)'
    ],
    images: [
      optimizedImageUrl,
      optimizedImageUrl,
      optimizedImageUrl,
    ],
    imageUrl: optimizedImageUrl,
    imageAlt: 'Paquete Web'
  },
  {
    id: '6',
    slug: 'paquete-branding',
    title: 'PAQUETE BRANDING',
    description: 'Todo lo que necesitas para construir una marca sólida y memorable.',
    fullDescription: 'Construye una marca poderosa desde cero. Incluye investigación de mercado, desarrollo de identidad visual completa, manual de marca, aplicaciones en diferentes medios y guía de uso.',
    price: '$1,800',
    includes: [
      'Investigación de mercado',
      'Estrategia de marca',
      'Diseño de identidad visual',
      'Manual de marca completo',
      'Papelería corporativa',
      'Aplicaciones digitales',
      'Mockups profesionales',
      'Presentación ejecutiva'
    ],
    images: [
      optimizedImageUrl,
      optimizedImageUrl,
      optimizedImageUrl,
    ],
    imageUrl: optimizedImageUrl,
    imageAlt: 'Paquete Branding'
  }
];

export function getPackageById(id: string): Package | undefined {
  return packagesData.find(pkg => pkg.id === id);
}

export function getPackageBySlug(slug: string): Package | undefined {
  return packagesData.find(pkg => pkg.slug === slug);
}

export function getAllPackageIds(): string[] {
  return packagesData.map(pkg => pkg.id);
}
