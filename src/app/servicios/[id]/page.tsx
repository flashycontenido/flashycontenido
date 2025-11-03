import { notFound } from 'next/navigation';
import Banner from '@/components/Banner/Banner';
import ImageGallery from '@/components/ImageGallery/ImageGallery';
import DetailInfoCard from '@/components/DetailInfoCard/DetailInfoCard';
import { getServiceById, servicesData } from '@/data/services';
import styles from './detail.module.scss';

export function generateStaticParams() {
  return servicesData.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) {
    return {
      title: 'Servicio no encontrado',
    };
  }

  return {
    title: service.title,
    description: service.fullDescription,
    openGraph: {
      title: `${service.title} - Flash y Contenido`,
      description: service.fullDescription,
      type: 'website',
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Banner
        title="Creatividad con propósito"
        description="Descubre cómo podemos hacer crecer tu marca con este servicio"
        height="small"
      />

      <section className={styles.detailPage}>
        <div className={styles.container}>
          <div className={styles.gallery}>
            <ImageGallery images={service.images} alt={service.title} />
          </div>

          <div className={styles.info}>
            <DetailInfoCard
              title={service.title}
              description={service.fullDescription}
              price={service.price}
              realPrice={service.realPrice}
              hasTimer={service.hasTimer}
              timerEndDate={service.timerEndDate}
              includes={service.includes}
              imagesDownload={service.imagesDownload}
            />
          </div>
        </div>
      </section>
    </>
  );
}
