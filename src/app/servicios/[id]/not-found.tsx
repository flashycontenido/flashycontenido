import Button from '@/components/Button/Button';
import styles from './not-found.module.scss';

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Servicio no encontrado</h2>
        <p className={styles.description}>
          Lo sentimos, el servicio que buscas no existe o ha sido movido.
        </p>
        <div className={styles.buttons}>
          <Button href="/servicios" variant="primary">
            Ver todos los servicios
          </Button>
          <Button href="/" variant="outline">
            Volver al inicio
          </Button>
        </div>
      </div>
    </div>
  );
}
