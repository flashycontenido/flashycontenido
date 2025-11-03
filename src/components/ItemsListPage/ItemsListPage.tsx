import Banner from '@/components/Banner/Banner';
import CardImage from '@/components/Card/CardImage';
import styles from './ItemsListPage.module.scss';

interface Item {
  id: string;
  imageUrl?: string;
  imageAlt?: string;
  title: string;
  description: string;
}

interface ItemsListPageProps {
  bannerTitle: string;
  bannerDescription: string;
  pageTitle: string;
  items: Item[];
  baseUrl: string;
}

export default function ItemsListPage({
  bannerTitle,
  bannerDescription,
  pageTitle,
  items,
  baseUrl,
}: ItemsListPageProps) {
  return (
    <>
      <Banner
        title={bannerTitle}
        description={bannerDescription}
        height="medium"
      />

      <section className={styles.itemsSection}>
        <div className={styles.header}>
          <h2 className={styles.mainTitle}>
            {pageTitle}
          </h2>
        </div>

        <div className={styles.grid}>
          {items.map((item) => (
            <CardImage
              key={item.id}
              imageUrl={item.imageUrl}
              imageAlt={item.imageAlt}
              title={item.title}
              description={item.description}
              isOverlay={true}
              className={styles.itemCard}
              hasBorder={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              isLink={true}
              linkProps={{ href: `${baseUrl}/${item.id}` }}
            />
          ))}
        </div>
      </section>
    </>
  );
}
