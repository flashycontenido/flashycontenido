import type { Metadata } from 'next';
import Hero from '@/sections/Hero/Hero';
import { CloudinaryPresets } from '@/utils/cloudinary';
import CardsSection from '@/sections/CardSection/CardSection';
import ProductsSection from '@/sections/ProductsSection/ProductsSection';
import VideoSection from '@/sections/VideoSection/VideoSection';
import ContactSection from '@/sections/ContactSection/ContactSection';

const heroImageUrl = CloudinaryPresets.hero('https://res.cloudinary.com/djqiqpilh/image/upload/v1760009966/pexels-fauxels-3184300_ocewg9.jpg');

export const metadata: Metadata = {
  title: 'Flash y Contenido - Agencia de Marketing Digital y Diseño Web en España',
  description: 'Agencia de marketing digital especializada en creación de marca, diseño web, community manager y campañas publicitarias. Hacemos crecer tu marca en el mundo digital con estrategia y creatividad.',
  keywords: [
    'marketing digital españa',
    'diseño web profesional',
    'creación de marca',
    'branding',
    'páginas web',
    'community manager',
    'campañas publicitarias',
    'meta ads',
    'redes sociales',
    'agencia marketing digital',
    'diseño gráfico',
    'identidad corporativa',
    'landing page',
    'posicionamiento web',
    'estrategia digital'
  ],
  openGraph: {
    title: 'Flash y Contenido - Marketing Digital y Diseño Web',
    description: 'Hacemos crecer tu marca en el mundo digital. Servicios de branding, diseño web, community manager y publicidad digital.',
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.flashycontenido.com',
    siteName: 'Flash y Contenido',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flash y Contenido - Marketing Digital y Diseño Web',
    description: 'Hacemos crecer tu marca en el mundo digital con creatividad y estrategia.',
  },
  alternates: {
    canonical: 'https://www.flashycontenido.com',
  },
};

export default function Home() {
  return (
    <>
      <Hero
        title={
          <>
            HACEMOS CRECER TU MARCA EN EL MUNDO DIGITAL
          </>
        }
        imageUrl={heroImageUrl}
      />

      <CardsSection/>

      <ProductsSection />
      
      {/*      
        <VideoSection />
      */}

      <ContactSection />
    </>
  );
}
