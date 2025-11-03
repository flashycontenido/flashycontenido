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
      <div className={styles.text}>

        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.imageWrapper}>
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
