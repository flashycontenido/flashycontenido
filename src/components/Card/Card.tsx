import { ReactNode, memo } from 'react';
import styles from './Card.module.scss';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'bordered' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}

const Card = memo(function Card({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
}: CardProps) {
  return (
    <div className={`${styles.card} ${styles[variant]} ${styles[`padding-${padding}`]} ${className}`}>
      {children}
    </div>
  );
});

export default Card;
