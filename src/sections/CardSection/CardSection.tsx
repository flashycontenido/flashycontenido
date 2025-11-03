import CardImage from '@/components/Card/CardImage';
import { CloudinaryPresets } from '@/utils/cloudinary';
import styles from './CardsSection.module.scss';
import ImageBanner from '@/components/ImageBanner/ImageBanner';
import Link from 'next/link';

const optimizedImageUrl = CloudinaryPresets.card('https://res.cloudinary.com/djqiqpilh/image/upload/v1761251782/oneabout_ipfby8.jpg');

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
            <br/>
            Hoy acompaño a emprendedores a convertir sus ideas en marcas reales: visibles, memorables y rentables, con diseño, estrategia y alma.

            <i style={{ fontWeight: '600' }}>Si tu proyecto quiere hacerse inevitable, caminemos juntos. </i><br/><br/> ¿Necesitas darle vida a tu marca o crear una página web? <br/><br/>

            <Link href='#' style={{ textDecoration: 'underline' }}>
              <strong>
                Contáctame
              </strong>
            </Link> y Hagamos que tu visión cobre vida.
          </>
        }
        imageSrc="https://res.cloudinary.com/djqiqpilh/image/upload/v1762114380/WhatsApp_Image_2025-11-02_at_9.09.30_PM_hhjjta.jpg"
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