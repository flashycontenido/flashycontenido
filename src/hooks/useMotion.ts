'use client';

import { useEffect, useRef } from 'react';
import { animate, inView, stagger } from 'motion';

export function useScrollAnimation(
  animation: Record<string, string[] | number[]>,
  options?: {
    delay?: number;
    duration?: number;
    amount?: number;
  }
) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    element.style.opacity = '0';

    const stopInView = inView(
      element,
      () => {
        animate(element, animation, {
          delay: options?.delay || 0,
          duration: options?.duration || 0.6,
        });
      },
      { amount: options?.amount || 0.3 }
    );

    return () => stopInView();
  }, [animation, options?.delay, options?.duration, options?.amount]);

  return ref;
}

export function useStaggerAnimation(
  selector: string,
  animation: Record<string, string[] | number[]>,
  options?: {
    staggerDelay?: number;
    duration?: number;
  }
) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;

    animate(elements, animation, {
      delay: stagger(options?.staggerDelay || 0.1),
      duration: options?.duration || 0.6,
    });
  }, [selector, animation, options?.staggerDelay, options?.duration]);
}

export function useHoverAnimation(
  hoverAnimation: Record<string, string | number>,
  resetAnimation: Record<string, string | number>,
  options?: {
    duration?: number;
  }
) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const handleMouseEnter = () => {
      animate(element, hoverAnimation, {
        duration: options?.duration || 0.3,
      });
    };

    const handleMouseLeave = () => {
      animate(element, resetAnimation, {
        duration: options?.duration || 0.3,
      });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hoverAnimation, resetAnimation, options?.duration]);

  return ref;
}
