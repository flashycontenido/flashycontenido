'use client';

import Button from '@/components/Button/Button';
import CountdownTimer from '@/components/CountdownTimer/CountdownTimer';
import { Download } from 'lucide-react';
import { ReactNode, useState } from 'react';
import styles from './DetailInfoCard.module.scss';

interface DetailInfoCardProps {
  serviceId: string;
  title: string;
  description: string | ReactNode;
  price: string;
  realPrice?: string;
  hasTimer?: boolean;
  timerEndDate?: string;
  includes: string[] | ReactNode[];
  imagesDownload?: string[];
}

export default function DetailInfoCard({ serviceId, title, description, price, realPrice, hasTimer, timerEndDate, includes = [], imagesDownload = [] }: DetailInfoCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const leftColumn = includes.slice(0, 4);
  const rightColumn = includes.slice(4, 8);

  const comprarMessage = `Hola, buen día. Me interesa adquirir el servicio/paquete "${title}". Me gustaría recibir más información y conocer los detalles para proceder con la compra.`;
  const contactarMessage = `Hola, buen día. Me gustaría obtener más información sobre "${title}". ¿Podrían brindarme detalles adicionales sobre este servicio/paquete?`;

  const whatsappComprar = `https://wa.me/34614626806?text=${encodeURIComponent(comprarMessage)}`;
  const whatsappContactar = `https://wa.me/34614626806?text=${encodeURIComponent(contactarMessage)}`;

  const handleStripeCheckout = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ serviceId }),
      });

      const data = await response.json();

      if (data.url) {
        // Redirigir a Stripe Checkout
        window.location.href = data.url;
      } else {
        alert('Error al crear la sesión de pago');
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al procesar el pago');
      setIsLoading(false);
    }
  };

  const handleDownloadImages = async () => {
    if (!imagesDownload || imagesDownload.length === 0) return;

    for (let i = 0; i < imagesDownload.length; i++) {
      const imageUrl = imagesDownload[i];

      // Delay antes de cada descarga (excepto la primera)
      if (i > 0) {
        await new Promise(resolve => setTimeout(resolve, 800));
      }

      try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();

        // Crear URL y descargar
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${title.replace(/\s+/g, '-').toLowerCase()}-ejemplo-${i + 1}.png`;
        link.style.display = 'none';

        document.body.appendChild(link);

        // Pequeño delay antes de hacer click
        await new Promise(resolve => setTimeout(resolve, 100));

        link.click();

        // Delay antes de limpiar
        await new Promise(resolve => setTimeout(resolve, 100));

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error(`Error downloading image ${i + 1}:`, error);
      }
    }
  };

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{title}</h1>

      <div className={styles.priceSection}>
        <span className={styles.priceLabel}>Precio:</span>
        <div className={styles.priceWrapper}>
          {realPrice && <span className={styles.realPrice}>{realPrice}</span>}
          <span className={styles.price}>{price}</span>
        </div>
      </div>

      <p className={styles.description}>{description}</p>

      <div className={styles.includesSection}>
        <h2 className={styles.includesTitle}>¿Qué incluye?</h2>
        <div className={styles.includesGrid}>
          <ul className={styles.includesList}>
            {leftColumn.map((item, index) => (
              <li key={index} className={styles.includesItem}>
                <svg
                  className={styles.checkIcon}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M16.6667 5L7.50002 14.1667L3.33335 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <ul className={styles.includesList}>
            {rightColumn.map((item, index) => (
              <li key={index} className={styles.includesItem}>
                <svg
                  className={styles.checkIcon}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M16.6667 5L7.50002 14.1667L3.33335 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {hasTimer && timerEndDate && (
        <div className={styles.timerWrapper}>
          <CountdownTimer endDate={timerEndDate} />
        </div>
      )}

      <div className={styles.buttons}>
        <Button
          variant="yellow"
          size="lg"
          onClick={handleStripeCheckout}
          disabled={isLoading}
        >
          {isLoading ? 'Procesando...' : 'Comprar'}
        </Button>
        <Button variant="primary" size="lg" href={whatsappComprar} target="_blank" rel="noopener noreferrer">
          Comprar por WhatsApp
        </Button>
        <Button variant="contact" size="lg" href={whatsappContactar} target="_blank" rel="noopener noreferrer">
          Contactar
        </Button>
        {imagesDownload && imagesDownload.length > 0 && (
          <Button variant="download" size="lg" onClick={handleDownloadImages}>
            <Download size={18} />
            Descargar ejemplos
          </Button>
        )}
      </div>
    </div>
  );
}
