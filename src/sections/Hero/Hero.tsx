import { ReactNode } from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image';

interface HeroProps {
  title?: ReactNode;
  description?: string;
  imageUrl?: string;
  alt?: string
}

export default function Hero({ title, description, imageUrl, alt }: HeroProps) {
  return (
    <section className={styles.hero} aria-label="Sección principal">
      <div className={styles.imageContainer} role="img" aria-label={alt || 'Imagen de marketing digital y diseño web'}>
        <Image
          src={imageUrl || '/default-image.jpg'}
          alt=""
          fill
          priority
          className={styles.backgroundImage}
        />
        <div className={styles.overlay} aria-hidden="true" />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
      </div>

      {description && (
        <p className={styles.description}>{description}</p>
      )}
    </section>
  );
}
