'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { animate, inView } from 'motion';

interface MotionWrapperProps {
  children: ReactNode;
  animation?: 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'scaleIn' | 'slideInLeft' | 'slideInRight';
  delay?: number;
  duration?: number;
  className?: string;
}

export default function MotionWrapper({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 0.6,
  className = '',
}: MotionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    element.style.opacity = '0';

    let keyframes: Record<string, string[] | number[]> = {};

    switch (animation) {
      case 'fadeIn':
        keyframes = { opacity: [0, 1], transform: ['translateY(20px)', 'translateY(0)'] };
        break;
      case 'fadeInUp':
        keyframes = { opacity: [0, 1], transform: ['translateY(40px)', 'translateY(0)'] };
        break;
      case 'fadeInDown':
        keyframes = { opacity: [0, 1], transform: ['translateY(-40px)', 'translateY(0)'] };
        break;
      case 'scaleIn':
        keyframes = { opacity: [0, 1], transform: ['scale(0.8)', 'scale(1)'] };
        break;
      case 'slideInLeft':
        keyframes = { opacity: [0, 1], transform: ['translateX(-50px)', 'translateX(0)'] };
        break;
      case 'slideInRight':
        keyframes = { opacity: [0, 1], transform: ['translateX(50px)', 'translateX(0)'] };
        break;
    }

    const stopInView = inView(
      element,
      () => {
        animate(element, keyframes, {
          delay,
          duration,
        });
      },
      { amount: 0.3 }
    );

    return () => stopInView();
  }, [animation, delay, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
