import { animate, stagger, spring, inView } from 'motion';

export const fadeIn = {
  opacity: [0, 1],
  transform: ['translateY(20px)', 'translateY(0)'],
};

export const fadeInUp = {
  opacity: [0, 1],
  transform: ['translateY(40px)', 'translateY(0)'],
};

export const fadeInDown = {
  opacity: [0, 1],
  transform: ['translateY(-40px)', 'translateY(0)'],
};

export const scaleIn = {
  opacity: [0, 1],
  transform: ['scale(0.8)', 'scale(1)'],
};

export const slideInLeft = {
  opacity: [0, 1],
  transform: ['translateX(-50px)', 'translateX(0)'],
};

export const slideInRight = {
  opacity: [0, 1],
  transform: ['translateX(50px)', 'translateX(0)'],
};

export const animateOnScroll = (
  selector: string,
  animation: Record<string, string[] | number[]>,
  options?: {
    amount?: number;
  }
) => {
  inView(
    selector,
    (element) => {
      animate(element, animation, {
        duration: 0.6,
      });
    },
    options
  );
};

export const animateStagger = (
  selector: string,
  animation: Record<string, string[] | number[]>,
  staggerDelay = 0.1
) => {
  const elements = document.querySelectorAll(selector);
  animate(elements, animation, {
    delay: stagger(staggerDelay),
    duration: 0.6,
  });
};

export { animate, stagger, spring, inView };
