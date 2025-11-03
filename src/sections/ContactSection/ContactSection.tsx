import { ArrowRight } from 'lucide-react';
import Button from '@/components/Button/Button';
import styles from './ContactSection.module.scss';
import CardImage from '@/components/Card/CardImage';

export default function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.imageCard}>
          <CardImage
            imageUrl="https://res.cloudinary.com/djqiqpilh/image/upload/v1760450374/yoselogo_obfool.png"
            imageAlt="Yeeti Character"
            hasBorder={false}
            priority={true}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className={styles.contentCard}>
          <div className={styles.stars}>
            <span className={styles.star}>✦</span>
            <span className={styles.star}>✦</span>
            <span className={styles.star}>✦</span>
          </div>

          <h2 className={styles.title}>
            CURSOS MARKETING<br />
            PARA<br />
            <span className={styles.titleBold}>EMPRENDEDORES!</span>
          </h2>

          <p className={styles.subtitle}>Aprende a usar la mente, la estrategia y la IA para que tu negocio florezca y facture contigo, no contra ti.</p>

          <Button
            variant='quote'
            size='lg'
            href='https://wa.me/34614626806?text=Hola,%20buen%20d%C3%ADa.%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20servicios%20y%20paquetes.'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span style={{ fontSize: '1.5rem', paddingTop: '4px' }}>Contáctanos</span>
            <ArrowRight size={24} />
          </Button>
        </div>
      </div>
    </section>
  );
}