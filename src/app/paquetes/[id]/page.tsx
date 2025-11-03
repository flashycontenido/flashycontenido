import { notFound } from 'next/navigation';
import Banner from '@/components/Banner/Banner';
import ImageGallery from '@/components/ImageGallery/ImageGallery';
import DetailInfoCard from '@/components/DetailInfoCard/DetailInfoCard';
import { getPackageById, packagesData } from '@/data/packages';
import styles from './detail.module.scss';

export function generateStaticParams() {
  return packagesData.map((pkg) => ({
    id: pkg.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const pkg = getPackageById(id);

  if (!pkg) {
    return {
      title: 'Paquete no encontrado',
    };
  }

  return {
    title: pkg.title,
    description: pkg.fullDescription,
    openGraph: {
      title: `${pkg.title} - Flash y Contenido`,
      description: pkg.fullDescription,
      type: 'website',
    },
  };
}

export default async function PackageDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const pkg = getPackageById(id);

  if (!pkg) {
    notFound();
  }

  return (
    <>
      <Banner
        title="Soluciones a tu medida"
        description="Conoce más sobre este paquete diseñado para impulsar tu negocio"
        height="small"
      />

      <section className={styles.detailPage}>
        <div className={styles.container}>
          <div className={styles.gallery}>
            <ImageGallery images={pkg.images} alt={pkg.title} />
          </div>

          <div className={styles.info}>
            <DetailInfoCard
              title={pkg.title}
              description={pkg.fullDescription}
              price={pkg.price}
              includes={pkg.includes}
              imagesDownload={pkg.imagesDownload}
            />
          </div>
        </div>
      </section>
    </>
  );
}
