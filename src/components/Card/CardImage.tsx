import { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CardImage.module.scss';

interface CardImageProps {
  children?: ReactNode;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  imageUrl?: string;
  imageAlt?: string;
  isOverlay?: boolean;
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

export default function CardImage({
  children,
  orientation = 'vertical',
  className = '',
  imageUrl,
  imageAlt,
  isOverlay = false,
  title,
  description,
  isButton = false,
  buttonProps,
  isLink = false,
  linkProps,
  hasBorder = true,
  priority = false,
  sizes = '100vw',
}: CardImageProps) {
  const content = (
    <>
      {imageUrl && (
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
          {isOverlay && <div className={styles.overlay} aria-hidden="true" />}
        </div>
      )}

      {(title || description) && (
        <div className={styles.textContent}>
          {title && <h3 className={styles.title}>{title}</h3>}
          {description && <p className={styles.description}>{description}</p>}
        </div>
      )}

      {children}
    </>
  );

  const baseClasses = `${styles.cardImage} ${styles[orientation]} ${hasBorder ? styles.hasBorder : ''} ${className}`;

  if (isLink && linkProps?.href) {
    return (
      <Link
        {...linkProps}
        href={linkProps.href}
        className={`${baseClasses} ${styles.clickable}`}
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
}
