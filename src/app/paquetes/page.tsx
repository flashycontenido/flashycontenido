import ItemsListPage from '@/components/ItemsListPage/ItemsListPage';
import { packagesData } from '@/data/packages';

export const metadata = {
  title: 'Paquetes de Marketing Digital',
  description: 'Paquetes personalizados de marketing digital: desde planes starter para emprendedores hasta soluciones premium completas. Diseño web, redes sociales, branding y más.',
};

export default function PaquetesPage() {
  return (
    <ItemsListPage
      bannerTitle="Soluciones a tu medida"
      bannerDescription="Paquetes diseñados para impulsar tu marca y hacer crecer tu negocio digital."
      pageTitle="Nuestros Paquetes"
      items={packagesData}
      baseUrl="/paquetes"
    />
  );
}
