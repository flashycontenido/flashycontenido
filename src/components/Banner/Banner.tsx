import { ReactNode } from 'react';
import Image from 'next/image';
import { CloudinaryPresets } from '@/utils/cloudinary';
import styles from './Banner.module.scss';

interface BannerProps {
  title: string | ReactNode;
  description?: string;
  imageUrl?: string;
  height?: 'small' | 'medium' | 'large';
}

const defaultImageUrl = CloudinaryPresets.hero('https://res.cloudinary.com/djqiqpilh/image/upload/v1760009966/pexels-fauxels-3184300_ocewg9.jpg');

export default function Banner({
  title,
  description,
  imageUrl = defaultImageUrl,
  height = 'medium'
}: BannerProps) {
  return (
    <section className={`${styles.banner} ${styles[height]}`}>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          alt="Banner background"
          fill
          priority
          className={styles.backgroundImage}
          sizes="100vw"
        />
      </div>

      <div className={styles.overlay} />

      <div className={styles.content}>
        {typeof title === 'string' ? (
          <h2 className={styles.title}>{title}</h2>
        ) : (
          <div className={styles.title}>{title}</div>
        )}
        {description && (
          <p className={styles.description}>{description}</p>
        )}
      </div>
    </section>
  );
}
