import Banner from '@/components/Banner/Banner';
import Button from '@/components/Button/Button';
import styles from './cancel.module.scss';

export const metadata = {
  title: 'Pago Cancelado - Flash y Contenido',
  description: 'El proceso de pago ha sido cancelado. No se ha realizado ningún cargo.',
};

export default function CancelPage() {
  const whatsappMessage = `Hola, tuve problemas al procesar el pago y me gustaría recibir ayuda.`;
  const whatsappUrl = `https://wa.me/34614626806?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <Banner
        title="Pago cancelado"
        description="No te preocupes, no se ha realizado ningún cargo"
        height="small"
      />

      <section className={styles.cancelPage}>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg
                className={styles.crossIcon}
                viewBox="0 0 52 52"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle className={styles.crossCircle} cx="26" cy="26" r="25" fill="none"/>
                <path className={styles.crossPath} fill="none" d="M16 16 36 36 M36 16 16 36"/>
              </svg>
            </div>

            <h1 className={styles.title}>Pago Cancelado</h1>

            <p className={styles.message}>
              Has cancelado el proceso de pago. No se ha realizado ningún cargo a tu tarjeta.
            </p>

            <p className={styles.submessage}>
              Si tuviste algún problema o necesitas ayuda con el proceso de pago, no dudes en contactarnos.
              Estamos aquí para ayudarte.
            </p>

            <div className={styles.infoBox}>
              <h3 className={styles.infoTitle}>¿Necesitas ayuda?</h3>
              <ul className={styles.infoList}>
                <li>Podemos responder tus preguntas sobre el servicio</li>
                <li>Te ayudamos con el proceso de pago</li>
                <li>Ofrecemos opciones de pago alternativas (WhatsApp, transferencia)</li>
                <li>Puedes volver a intentarlo cuando quieras</li>
              </ul>
            </div>

            <div className={styles.noteBox}>
              <p><strong>Nota:</strong> Puedes regresar al servicio y completar tu compra en cualquier momento.</p>
            </div>

            <div className={styles.actions}>
              <Button variant="yellow" size="lg" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Contactar
              </Button>
              <Button variant="primary" size="lg" href="/servicios">
                Ver servicios
              </Button>
              <Button variant="contact" size="lg" href="/">
                Volver al inicio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
