import { CloudinaryPresets } from '@/utils/cloudinary';
import { ReactNode } from 'react';

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription: string | ReactNode;
  price: string;
  realPrice?: string;
  hasTimer?: boolean;
  timerEndDate?: string;
  includes: string[] | ReactNode[];
  images: string[];
  imageUrl?: string;
  imageAlt?: string;
  imagesDownload?: string[];
}

const rawImageUrl = 'https://res.cloudinary.com/djqiqpilh/image/upload/v1760010204/pexels-mo-eid-1268975-11798029_idne6u.jpg';
const optimizedImageUrl = CloudinaryPresets.card(rawImageUrl);

export const servicesData: Service[] = [
  {
    id: '1',
    slug: 'creacion-de-marca',
    title: 'CREACION DE MARCA',
    description: 'Ofrecemos servicios de identidad de marca y estrategia de branding.',
    fullDescription: 'Desarrollamos identidades visuales completas que reflejan la esencia de tu negocio. Desde el logo hasta la paleta de colores, tipografía y aplicaciones, creamos una marca coherente y profesional que te diferencia de la competencia.',
    price: 'Desde €120',
    includes: [
      'Diseño de logotipo profesional',
      'Manual de identidad de marca',
      'Paleta de colores corporativa',
      'Tipografía personalizada',
      'Aplicaciones en diferentes formatos',
      'Mockups de presentación',
      '2 rondas de revisiones'
    ],
    images: [
      'https://res.cloudinary.com/djqiqpilh/image/upload/v1762164044/WhatsApp_Image_2025-11-01_at_17.54.36_uzgh07.jpg',
      'https://res.cloudinary.com/djqiqpilh/image/upload/v1762164044/WhatsApp_Image_2025-11-01_at_17.54.48_cdvrth.jpg',
      'https://res.cloudinary.com/djqiqpilh/image/upload/v1762164044/WhatsApp_Image_2025-11-01_at_17.59.33_rmwbxr.jpg',
      'https://res.cloudinary.com/djqiqpilh/image/upload/v1762164044/WhatsApp_Image_2025-11-01_at_18.01.59_jy6jpy.jpg',
      'https://res.cloudinary.com/djqiqpilh/image/upload/v1762164044/WhatsApp_Image_2025-11-01_at_18.05.11_apswzx.jpg',
      'https://res.cloudinary.com/djqiqpilh/image/upload/v1762164044/WhatsApp_Image_2025-11-01_at_18.09.28_mxrcey.jpg'
    ],
    imageUrl: 'https://res.cloudinary.com/djqiqpilh/image/upload/v1762164044/WhatsApp_Image_2025-11-01_at_17.54.36_uzgh07.jpg',
    imageAlt: 'Creación de Marca'
  },
  {
    id: '2',
    slug: 'paginas-web',
    title: 'Página web',
    description: 'Construimos la página Web de Aterrizaje que tu Negocio Necesita.',
    fullDescription: 'Diseñamos tu web con propósito, psicología y estrategia. Creamos la página de aterrizaje que tu negocio necesita para destacar y vender más. Cada color, palabra y botón están pensados para atraer, convencer y convertir.',
    price: '€299',
    realPrice: '€499',
    hasTimer: true,
    timerEndDate: '2025-10-31T00:00:00',
    includes: [
      <div key="entrega-expres" style={{ display: 'block' }}><strong>Entrega exprés en 15 días.</strong> Porque el tiempo es oro, y tu presencia online no puede esperar</div>,
      <div key="diseno-estrategico" style={{ display: 'block' }}><strong>Diseño estratégico con hasta 5 secciones personalizadas.</strong> Mostramos lo esencial de tu negocio con claridad, estilo y propósito.</div>,
      <div key="conexion-whatsapp" style={{ display: 'block' }}><strong>Conexión directa con WhatsApp.</strong> Tus clientes te contactan al instante, sin pasos intermedios.</div>,
      <div key="galeria-visual" style={{ display: 'block' }}><strong>Galería visual de alto impacto.</strong> Ideal para mostrar tus productos, servicios o testimonios con emoción.</div>,
      <div key="mantenimiento" style={{ display: 'block' }}><strong>Mantenimiento y cambios básicos durante 6 meses.</strong> Nos aseguramos de que tu web siga funcionando y evolucionando contigo.</div>,
      <div key="seo-basico" style={{ display: 'block' }}><strong>Seo básico de tu sitio web</strong></div>
    ],
    images: [
      'https://res.cloudinary.com/djqiqpilh/image/upload/v1760452182/Captura_de_pantalla_2025-10-14_a_las_16.28.54_syt7mj.png',
      'https://res.cloudinary.com/djqiqpilh/image/upload/v1760451911/Captura_de_pantalla_2025-10-14_a_las_16.24.50_vfdage.png',
      'https://res.cloudinary.com/djqiqpilh/image/upload/v1760452357/Captura_de_pantalla_2025-10-14_a_las_16.32.23_vjh260.png',
      'https://res.cloudinary.com/djqiqpilh/image/upload/v1760452182/Captura_de_pantalla_2025-10-14_a_las_16.29.23_dkf0ff.png',
    ],
    imageUrl: 'https://res.cloudinary.com/djqiqpilh/image/upload/v1760452357/Captura_de_pantalla_2025-10-14_a_las_16.32.23_vjh260.png',
    imageAlt: 'Páginas Web',
    imagesDownload: [
      'https://res.cloudinary.com/djqiqpilh/image/upload/v1760452610/four_tr6aeh.png',
      'https://res.cloudinary.com/djqiqpilh/image/upload/v1760452609/three_flxauz.png',
      'https://res.cloudinary.com/djqiqpilh/image/upload/v1760452609/two_w2vdpk.png',
    ]
  },
  {
    id: '3',
    slug: 'paquete-toto-en-uno',
    title: 'Paquete todo en uno',
    description: 'Creamos tu marca, tu página web y activamos tu publicidad para que empieces a vender.',
    fullDescription: 'Creamos tu marca, tu pagina web y activamos tu publicidad para que empieces a vender. Este paquete es para emprendedores que quieren dejar de adivinar y empezar a construir en serio abarcando todos los escenarios.',
    price: 'Desde €850',
    includes: [
      'Creación de identidad visual y logo profesional',
      'Fan Page configurada y optimizada',
      'Creación y configuración de tu cuenta de Meta Ads',
      '2 campañas publicitarias al mes (estrategia + segmentación)',
      'Video o imagen profesional para tus anuncios',
      'Página web / landing page',
      'Diseño de Tarjeta de Presentacion de tu negocio.',
      'Acompañamiento estratégico y soporte básico por 30 días'
    ],
    images: [
      'https://res.cloudinary.com/djqiqpilh/image/upload/v1762117716/WhatsApp_Image_2025-11-02_at_22.01.58_z6fbyd.jpg',
      'https://res.cloudinary.com/djqiqpilh/image/upload/v1762117716/WhatsApp_Image_2025-11-02_at_21.57.58_gbyeth.jpg',
      'https://res.cloudinary.com/djqiqpilh/image/upload/v1762118305/WhatsApp_Image_2025-11-02_at_22.17.40_xhbkec.jpg',
    ],
    imageUrl: 'https://res.cloudinary.com/djqiqpilh/image/upload/v1762117716/WhatsApp_Image_2025-11-02_at_22.01.58_z6fbyd.jpg' ,
    imageAlt: 'Paquete todo en uno'
  }
];

export function getServiceById(id: string): Service | undefined {
  return servicesData.find(service => service.id === id);
}

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find(service => service.slug === slug);
}

export function getAllServiceIds(): string[] {
  return servicesData.map(service => service.id);
}
