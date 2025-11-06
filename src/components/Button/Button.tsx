import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'yellow' | 'quote' | 'contact' | 'download';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
}

const Button = memo(function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  className = '',
  target,
  rel,
  ...props
}: ButtonProps) {
  const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClass} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={buttonClass}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
