'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { animate } from 'motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CardVideo from '@/components/Card/CardVideo/CardVideo';
import { CloudinaryPresets } from '@/utils/cloudinary';
import styles from './VideoSection.module.scss';

const optimizedThumbnail = CloudinaryPresets.card('https://res.cloudinary.com/djqiqpilh/image/upload/v1760010074/2_aatqmi.jpg');

const videos = [
  {
    id: 1,
    imageUrl: optimizedThumbnail,
    videoUrl: 'https://www.youtube.com/embed/OKaKTEOp4C8?si=ZHNqi0z-L3c5JANf',
    imageAlt: 'Yeeti 3D Short Movie',
    title: 'YEETI - 3D SHORT MOVIE',
    description: 'Yeeti is a whimsical 3D short that follows a curious little creature on an unexpected journey through a frozen world.',
  },
  {
    id: 2,
    imageUrl: optimizedThumbnail,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    imageAlt: 'Brand Story Video',
    title: 'HOHOFUN - WEBSITE DESIGN',
    description: 'A creative showcase of modern web design principles and interactive experiences.',
  },
  {
    id: 3,
    imageUrl: optimizedThumbnail,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    imageAlt: 'Product Demo',
    title: 'PRODUCT SHOWCASE',
    description: 'An immersive look into innovative product design and user experience.',
  },
  {
    id: 4,
    imageUrl: optimizedThumbnail,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    imageAlt: 'Animation Reel',
    title: 'MOBILE EXPERIENCE',
    description: 'Discover seamless mobile interactions and beautiful UI design.',
  },
  {
    id: 5,
    imageUrl: optimizedThumbnail,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    imageAlt: 'App Showcase',
    title: 'ANIMATION SHOWREEL',
    description: 'A collection of stunning motion graphics and animated storytelling.',
  },
];

export default function VideoSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const getSlideWidth = useCallback(() => {
    const viewportWidth = window.innerWidth;

    if (viewportWidth <= 480) {
      return Math.min(viewportWidth - 40, 350);
    } else if (viewportWidth <= 768) {
      return Math.min(viewportWidth - 60, 500);
    } else if (viewportWidth <= 1200) {
      return 850;
    } else if (viewportWidth <= 1400) {
      return 950;
    }
    return 1050;
  }, []);

  const animateCarousel = useCallback(() => {
    if (!trackRef.current || !carouselRef.current) return;

    const carouselWidth = carouselRef.current.offsetWidth;
    const slideWidth = getSlideWidth();
    const offset = (carouselWidth / 2) - (slideWidth / 2) - (currentIndex * slideWidth);

    animate(trackRef.current, {
      transform: [`translateX(${offset}px)`],
    }, {
      duration: 0.6,
    });
  }, [currentIndex, getSlideWidth]);

  useEffect(() => {
    animateCarousel();
  }, [animateCarousel]);

  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        animateCarousel();
      }, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [animateCarousel]);

  return (
    <section className={styles.videoSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Nuestro fuerte
        </h2>
      </div>

      <div className={styles.carouselWrapper}>
        <div className={styles.carouselContainer}>
          <div className={styles.shadowLeft} />

          <button
            className={`${styles.navButton} ${styles.navButtonLeft}`}
            onClick={handlePrevious}
            aria-label="Previous video"
          >
            <ChevronLeft size={40} />
          </button>

          <div className={styles.carousel} ref={carouselRef}>
            <div className={styles.track} ref={trackRef}>
              {videos.map((video, index) => {
                const isActive = index === currentIndex;
                const isLeft = index === currentIndex - 1 || (currentIndex === 0 && index === videos.length - 1);
                const isRight = index === currentIndex + 1 || (currentIndex === videos.length - 1 && index === 0);

                return (
                  <div
                    key={video.id}
                    className={`${styles.slide} ${isActive ? styles.slideActive : ''} ${isLeft ? styles.slideLeft : ''} ${isRight ? styles.slideRight : ''}`}
                  >
                    <CardVideo
                      imageUrl={video.imageUrl}
                      videoUrl={video.videoUrl}
                      imageAlt={video.imageAlt}
                      title={video.title}
                      description={video.description}
                      hasBorder={isActive}
                      priority={isActive}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <button
            className={`${styles.navButton} ${styles.navButtonRight}`}
            onClick={handleNext}
            aria-label="Next video"
          >
            <ChevronRight size={40} />
          </button>

          <div className={styles.shadowRight} />
        </div>

        <div className={styles.indicators}>
          {videos.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentIndex ? styles.indicatorActive : ''
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}