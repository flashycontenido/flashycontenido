import ItemsListPage from '@/components/ItemsListPage/ItemsListPage';
import { servicesData } from '@/data/services';

export const metadata = {
  title: 'Servicios de Marketing Digital y Diseño Web',
  description: 'Servicios profesionales de marketing digital en España: creación de marca, diseño web, páginas de aterrizaje, community manager, campañas publicitarias Meta Ads, branding y estrategia digital. Hacemos crecer tu negocio online.',
  keywords: ['servicios marketing digital', 'creación de marca', 'diseño páginas web', 'landing page', 'branding profesional', 'meta ads', 'community manager', 'paquete marketing digital'],
  openGraph: {
    title: 'Servicios de Marketing Digital - Flash y Contenido',
    description: 'Descubre nuestros servicios: creación de marca, diseño web y campañas publicitarias para hacer crecer tu negocio.',
    type: 'website',
  },
};

export default function ServiciosPage() {
  return (
    <ItemsListPage
      bannerTitle="Creatividad con propósito"
      bannerDescription="Hacemos que tu marca cuente una historia que conecte. Damos vida a ideas que dejan huella."
      pageTitle="Nuestros Servicios"
      items={servicesData}
      baseUrl="/servicios"
    />
  );
}
