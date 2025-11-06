'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Banner from '@/components/Banner/Banner';
import Button from '@/components/Button/Button';
import { Copy, Check } from 'lucide-react';
import styles from './success.module.scss';

interface SessionData {
  id: string;
  amount_total: number;
  currency: string;
  customer_email?: string;
  customer_name?: string;
  payment_status: string;
  created: number;
  metadata: {
    serviceTitle?: string;
  };
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  const [sessionData, setSessionData] = useState<SessionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (sessionId) {
      fetch(`/api/session?session_id=${sessionId}`)
        .then(res => res.json())
        .then(data => {
          setSessionData(data);
          setLoading(false);
        })
        .catch(() => {
          setError(true);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [sessionId]);

  const handleCopyOrderNumber = () => {
    if (sessionData?.id) {
      navigator.clipboard.writeText(sessionData.id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatAmount = (amount: number, currency: string) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: currency.toUpperCase()
    }).format(amount / 100);
  };

  if (loading) {
    return (
      <>
        <Banner
          title="¡Gracias por tu compra!"
          description="Tu pago se ha procesado exitosamente"
          height="small"
        />
        <section className={styles.successPage}>
          <div className={styles.container}>
            <div className={styles.card}>
              <p className={styles.message}>Cargando detalles de tu orden...</p>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Banner
        title="¡Gracias por tu compra!"
        description="Tu pago se ha procesado exitosamente"
        height="small"
      />

      <section className={styles.successPage}>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg
                className={styles.checkIcon}
                viewBox="0 0 52 52"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle className={styles.checkCircle} cx="26" cy="26" r="25" fill="none"/>
                <path className={styles.checkPath} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
              </svg>
            </div>

            <h1 className={styles.title}>¡Pago Exitoso!</h1>

            <p className={styles.message}>
              Gracias por tu compra. Hemos recibido tu pago correctamente.
            </p>

            {sessionData && !error && (
              <>
                <div className={styles.orderNumber}>
                  <span className={styles.orderLabel}>Número de orden:</span>
                  <div className={styles.orderIdWrapper}>
                    <code className={styles.orderId}>{sessionData.id}</code>
                    <button
                      className={styles.copyButton}
                      onClick={handleCopyOrderNumber}
                      aria-label="Copiar número de orden"
                    >
                      {copied ? <Check size={18} /> : <Copy size={18} />}
                    </button>
                  </div>
                </div>

                <div className={styles.orderDetails}>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Servicio:</span>
                    <span className={styles.detailValue}>{sessionData.metadata.serviceTitle || 'N/A'}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Monto pagado:</span>
                    <span className={styles.detailValue}>{formatAmount(sessionData.amount_total, sessionData.currency)}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Fecha:</span>
                    <span className={styles.detailValue}>{formatDate(sessionData.created)}</span>
                  </div>
                  {sessionData.customer_email && (
                    <div className={styles.detailRow}>
                      <span className={styles.detailLabel}>Email:</span>
                      <span className={styles.detailValue}>{sessionData.customer_email}</span>
                    </div>
                  )}
                </div>
              </>
            )}

            <p className={styles.submessage}>
              En breve nos pondremos en contacto contigo para comenzar con tu proyecto.
              Recibirás un correo de confirmación con todos los detalles.
            </p>

            <div className={styles.infoBox}>
              <h3 className={styles.infoTitle}>¿Qué sigue ahora?</h3>
              <ul className={styles.infoList}>
                <li>Recibirás un email de confirmación</li>
                <li>Nuestro equipo te contactará en las próximas 24 horas</li>
                <li>Comenzaremos a trabajar en tu proyecto</li>
              </ul>
            </div>

            <div className={styles.actions}>
              {sessionData && !error && (
                <Button
                  variant="yellow"
                  size="lg"
                  href={`https://wa.me/34614626806?text=${encodeURIComponent(
                    `Hola, acabo de realizar un pago y me gustaría consultar cómo continúa el proceso.\n\nDetalles de mi compra:\n• Número de orden: ${sessionData.id}\n• Servicio: ${sessionData.metadata.serviceTitle || 'N/A'}\n• Monto: ${formatAmount(sessionData.amount_total, sessionData.currency)}\n• Fecha: ${formatDate(sessionData.created)}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contactar
                </Button>
              )}
              <Button variant="primary" size="lg" href="/">
                Volver al inicio
              </Button>
              <Button variant="contact" size="lg" href="/servicios">
                Ver más servicios
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <>
        <Banner
          title="¡Gracias por tu compra!"
          description="Tu pago se ha procesado exitosamente"
          height="small"
        />
        <section className={styles.successPage}>
          <div className={styles.container}>
            <div className={styles.card}>
              <p className={styles.message}>Cargando detalles de tu orden...</p>
            </div>
          </div>
        </section>
      </>
    }>
      <SuccessContent />
    </Suspense>
  );
}
