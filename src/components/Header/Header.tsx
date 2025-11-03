'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle';
import Button from '@/components/Button/Button';
import styles from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.header_left}>
          <Link href='/' style={{ margin: 'auto', display: 'flex' }} >
            <Image src='/logo.png' alt='Logo de Flash y Contenido' width={70} height={40} priority />
          </Link>
        </div>

        <nav className={styles.header_mid} aria-label="Navegación principal">
          <Link href='/' className={styles.header_mid_link}>Inicio</Link>
          <Link href='/servicios' className={styles.header_mid_link}>Servicios</Link>
          {/* <Link href='/paquetes' className={styles.header_mid_link}>Paquetes</Link> */}
          <Link href='#nosotros' className={styles.header_mid_link} onClick={(e) => handleSmoothScroll(e, 'nosotros')}>Sobre Nosotros</Link>
        </nav>

        <div className={styles.header_right}>
          <Button href='https://wa.me/34614626806?text=Hola,%20buen%20d%C3%ADa.%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20servicios%20y%20paquetes.' variant='yellow' target='_blank' rel='noopener noreferrer'>
            Contáctanos
            <Phone size={16} />
          </Button>
          <ThemeToggle />
        </div>

        <div className={styles.header_mobile}>
          <ThemeToggle />
          <button
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <div className={`${styles.drawer} ${isMenuOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerHeader}>
          <button
            className={styles.closeButton}
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className={styles.drawerNav}>
          <Link href='/' className={styles.drawerLink} onClick={() => setIsMenuOpen(false)}>Inicio</Link>
          <Link href='/servicios' className={styles.drawerLink} onClick={() => setIsMenuOpen(false)}>Servicios</Link>
          {/* <Link href='/paquetes' className={styles.drawerLink} onClick={() => setIsMenuOpen(false)}>Paquetes</Link>*/}
          <Link href='#nosotros' className={styles.drawerLink} onClick={(e) => { handleSmoothScroll(e, 'nosotros'); setIsMenuOpen(false); }}>Sobre Nosotros</Link>
          <Button href='https://wa.me/34614626806?text=Hola,%20buen%20d%C3%ADa.%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20servicios%20y%20paquetes.' variant='yellow' onClick={() => setIsMenuOpen(false)} target='_blank' rel='noopener noreferrer'>
            Contáctanos
            <Phone size={16} />
          </Button>
        </nav>
      </div>

      {isMenuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}
