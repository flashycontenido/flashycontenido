import { ArrowRight } from 'lucide-react';
import Button from '@/components/Button/Button';
import CardImage from '@/components/Card/CardImage';
import { servicesData } from '@/data/services';
import styles from './ProductsSection.module.scss';

export default function ProductsSection() {
  return (
    <section className={styles.productsSection}>
      <div className={styles.header}>
        <h2 className={styles.mainTitle}>
          CONOCE NUESTROS SERVICIOS
        </h2>
        <Button variant='yellow' className={styles.seeMoreButton} size='lg' href='/servicios'>
          Ver más
          <ArrowRight className={styles.icon} size={20} />
        </Button>
      </div>

      <div className={styles.grid}>
        {servicesData.map((service) => (
          <CardImage
            key={service.id}
            imageUrl={service.imageUrl}
            imageAlt={service.imageAlt}
            title={service.title}
            description={service.description}
            isOverlay={true}
            className={styles.serviceCard}
            hasBorder={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            isLink={true}
            linkProps={{ href: `/servicios/${service.id}` }}
          />
        ))}
      </div>
    </section>
  );
}