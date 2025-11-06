'use client';

import { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes, useState, useMemo, useCallback, memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play } from 'lucide-react';
import styles from './CardVideo.module.scss';

interface CardVideoProps {
  children?: ReactNode;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  imageUrl?: string;
  videoUrl?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  isButton?: boolean;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  isLink?: boolean;
  linkProps?: AnchorHTMLAttributes<HTMLAnchorElement> & { href?: string };
  hasBorder?: boolean;
  priority?: boolean;
  sizes?: string;
}

const CardVideo = memo(function CardVideo({
  children,
  orientation = 'vertical',
  className = '',
  imageUrl,
  videoUrl,
  imageAlt = '',
  title,
  description,
  isButton = false,
  buttonProps,
  isLink = false,
  linkProps,
  hasBorder = true,
  priority = false,
  sizes = '100vw',
}: CardVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const embedUrl = useMemo(() => {
    if (!videoUrl) return '';

    if (videoUrl.includes('youtube.com/watch')) {
      const videoId = videoUrl.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    if (videoUrl.includes('youtube.com/embed')) {
      return videoUrl.includes('autoplay=1') ? videoUrl : `${videoUrl}${videoUrl.includes('?') ? '&' : '?'}autoplay=1`;
    }
    if (videoUrl.includes('youtu.be/')) {
      const videoId = videoUrl.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    return videoUrl;
  }, [videoUrl]);

  const handlePlayClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(true);
  }, []);

  const content = (
    <>
      {isPlaying && videoUrl ? (
        <div className={styles.videoWrapper}>
          <iframe
            src={embedUrl}
            title={title || 'Video'}
            className={styles.video}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        imageUrl && (
          <div className={styles.imageWrapper}>
            <Image
              src={imageUrl}
              alt={imageAlt || title || ''}
              fill
              className={styles.image}
              priority={priority}
              loading={priority ? undefined : 'lazy'}
              sizes={sizes}
            />
            <div className={styles.overlay} aria-hidden="true" />

            <button
              type="button"
              className={styles.playButton}
              onClick={handlePlayClick}
              aria-label="Reproducir video"
            >
              <Play className={styles.playIcon} size={48} fill="currentColor" />
            </button>
          </div>
        )
      )}

      {(title || description) && (
        <>
          <div className={styles.textContentLeft}>
            {title && <h3 className={styles.title}>{title}</h3>}
          </div>
          <div className={styles.textContentRight}>
            {description && <p className={styles.description}>{description}</p>}
          </div>
        </>
      )}

      {children}
    </>
  );

  const baseClasses = `${styles.cardVideo} ${styles[orientation]} ${hasBorder ? styles.hasBorder : ''} ${className}`;

  if (isLink && linkProps?.href) {
    return (
      <Link
        {...linkProps}
        href={linkProps.href}
        className={baseClasses}
      >
        {content}
      </Link>
    );
  }

  if (isButton) {
    return (
      <button
        {...buttonProps}
        className={`${baseClasses} ${styles.clickable}`}
      >
        {content}
      </button>
    );
  }

  return (
    <div className={baseClasses}>
      {content}
    </div>
  );
});

export default CardVideo;