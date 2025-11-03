'use client';

import { useEffect, useState } from 'react';
import styles from './CountdownTimer.module.scss';

interface CountdownTimerProps {
  endDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ endDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(endDate).getTime() - new Date().getTime();

      if (difference <= 0) {
        setIsExpired(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  if (isExpired) {
    return null;
  }

  return (
    <div className={styles.countdown}>
      <div className={styles.label}>¡Oferta termina en!</div>
      <div className={styles.timer}>
        <div className={styles.timeBlock}>
          <span className={styles.number}>{String(timeLeft.days).padStart(2, '0')}</span>
          <span className={styles.unit}>días</span>
        </div>
        <span className={styles.separator}>:</span>
        <div className={styles.timeBlock}>
          <span className={styles.number}>{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className={styles.unit}>hrs</span>
        </div>
        <span className={styles.separator}>:</span>
        <div className={styles.timeBlock}>
          <span className={styles.number}>{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className={styles.unit}>min</span>
        </div>
        <span className={styles.separator}>:</span>
        <div className={styles.timeBlock}>
          <span className={styles.number}>{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span className={styles.unit}>seg</span>
        </div>
      </div>
    </div>
  );
}
