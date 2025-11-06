'use client';

import Image from 'next/image';
import styles from './ImageBanner.module.scss';
import { ReactNode } from 'react';

interface ImageBannerProps {
  title: string;
  description: string | ReactNode;
  imageSrc: string;
  imageAlt: string;
}

export default function ImageBanner({
  title,
  description,
  imageSrc,
  imageAlt,
}: ImageBannerProps) {
  return (
    <section className={styles.banner}>
      <div className={styles.textContainer}>
        <div className={styles.decorativeLine}></div>

        <div className={styles.badge}>
          <span className={styles.badgeText}>Nuestra Historia</span>
        </div>

        <div className={styles.glassCard}>
          <h2 className={styles.title}>
            <span className={styles.highlight}>Al igual que tú,</span>{' '}
            <span className={styles.titleText}>{title.replace('Al igual que tú, ', '')}</span>
          </h2>

          <div className={styles.description}>
            {description}
          </div>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <div className={styles.imageGlow}></div>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}
