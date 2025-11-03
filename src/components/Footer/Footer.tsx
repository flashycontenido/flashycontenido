'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { MessageCircle } from 'lucide-react';
import styles from './Footer.module.scss';

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const handleSmoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    if (pathname !== '/') {
      router.push('/#' + targetId);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [pathname, router]);

  return (
    <footer className={styles.footer}>
      <div className={styles.background} />

      <div className={styles.inner}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Inicio</Link>
          <Link href="/servicios" className={styles.navLink}>Servicios</Link>
          {/*<Link href="/paquetes" className={styles.navLink}>Paquetes</Link> */}
          
          <Link href="#nosotros" className={styles.navLink} onClick={(e) => handleSmoothScroll(e, 'nosotros')}>Sobre Nosotros</Link>
          <Link href="https://wa.me/34614626806?text=Hola,%20buen%20d%C3%ADa.%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20servicios%20y%20paquetes." className={styles.navLink} target="_blank" rel="noopener noreferrer">Contáctanos</Link>
        </nav>

        <div className={styles.content}>
          <div className={styles.left}>
            <Link href="/" className={styles.logo}>
              <Image src='/logo.png' alt='Logo de Flash y Contenido' width={120} height={40} />
            </Link>

            {/* <Link href="https://wa.me/34624813239?text=Hola,%20buen%20d%C3%ADa.%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20servicios%20y%20paquetes." className={styles.chat} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} />
              <span>Let&apos;s chat</span>
            </Link> */}
          </div>

          <div className={styles.right}>
            <a href="mailto:flashycontenido@gmail.com" className={styles.email}>
              flashycontenido@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
