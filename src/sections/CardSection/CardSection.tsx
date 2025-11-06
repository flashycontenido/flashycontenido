import { CloudinaryPresets } from '@/utils/cloudinary';
import styles from './CardsSection.module.scss';
import ImageBanner from '@/components/ImageBanner/ImageBanner';
import Link from 'next/link';

export default function CardsSection() {
  return (
    <section id="nosotros" className={styles.main} aria-labelledby="nosotros-heading">
      <div className={styles.text_container}>
        <h2 id="nosotros-heading" className={styles.title}>
          ¿Quiénes Somos?
        </h2>
        <p className={styles.subtitle}>NOSOTROS</p>
      </div>

      <ImageBanner
        title="Al igual que tú, este proyecto nació de un sueño valiente."
        description={
          <>
            <p>
              Hoy acompaño a emprendedores a convertir sus ideas en marcas reales: visibles, memorables y rentables, con diseño, estrategia y alma.
            </p>

            <i>Si tu proyecto quiere hacerse inevitable, caminemos juntos.</i>

            <p>
              ¿Necesitas darle vida a tu marca o crear una página web?
            </p>

            <p>
              <Link href='https://wa.me/34614626806?text=Hola,%20buen%20d%C3%ADa.%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20servicios.' target='_blank' rel='noopener noreferrer'>
                <strong>Contáctame</strong>
              </Link> y Hagamos que tu visión cobre vida.
            </p>
          </>
        }
        imageSrc={CloudinaryPresets.card("https://res.cloudinary.com/djqiqpilh/image/upload/v1762114380/WhatsApp_Image_2025-11-02_at_9.09.30_PM_hhjjta.jpg")}
        imageAlt="Fundador de Flash y Contenido - Marketing Digital"
      />
      {/*       
        <div className={styles.container}>
          <CardImage
            imageUrl={optimizedImageUrl}
            imageAlt="Image 1"
            className={styles.card1}
            sizes="(max-width: 768px) 75vw, 50vw"
            priority
          />
          <CardImage
            imageUrl={optimizedImageUrl}
            imageAlt="Image 2"
            className={styles.card2}
            sizes="(max-width: 768px) 70vw, 50vw"
          />
          <CardImage
            imageUrl={optimizedImageUrl}
            imageAlt="Image 3"
            className={styles.card3}
            sizes="(max-width: 768px) 68vw, 50vw"
          />
        </div>
      */}
    </section>
  );
}