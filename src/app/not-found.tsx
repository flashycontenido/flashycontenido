import Banner from '@/components/Banner/Banner';
import Button from '@/components/Button/Button';
import styles from './not-found.module.scss';

export const metadata = {
  title: 'Página no encontrada - Flash y Contenido',
  description: 'La página que buscas no existe o ha sido movida.',
};

export default function NotFound() {
  const whatsappMessage = `Hola, estaba buscando información en su sitio web y necesito ayuda.`;
  const whatsappUrl = `https://wa.me/34614626806?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <Banner
        title="Página no encontrada"
        description="Lo sentimos, no pudimos encontrar lo que buscabas"
        height="small"
      />

      <section className={styles.notFoundPage}>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg
                className={styles.icon}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 8v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="16" r="1" fill="currentColor"/>
              </svg>
            </div>

            <h1 className={styles.title}>404</h1>
            <h2 className={styles.subtitle}>Página no encontrada</h2>

            <p className={styles.message}>
              Lo sentimos, la página que estás buscando no existe o ha sido movida.
            </p>

            <p className={styles.submessage}>
              Puede que el enlace esté roto o la página haya sido eliminada.
              Te invitamos a explorar nuestros servicios o contactarnos si necesitas ayuda.
            </p>

            <div className={styles.infoBox}>
              <h3 className={styles.infoTitle}>¿Qué puedes hacer?</h3>
              <ul className={styles.infoList}>
                <li>Volver al inicio y explorar nuestros servicios</li>
                <li>Ver nuestra lista completa de servicios</li>
                <li>Contactarnos directamente por WhatsApp</li>
              </ul>
            </div>

            <div className={styles.actions}>
              <Button variant="primary" size="lg" href="/">
                Volver al inicio
              </Button>
              <Button variant="yellow" size="lg" href="/servicios">
                Ver servicios
              </Button>
              <Button variant="contact" size="lg" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Contactar
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
