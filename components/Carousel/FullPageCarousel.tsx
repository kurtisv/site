'use client';
import { ReactNode, useEffect, useState } from 'react';
import styles from './Carousel.module.css';

type Props = {
  slides: ReactNode[];
  delay?: number;
};

export default function FullPageCarousel({ slides, delay = 5000 }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      delay
    );
    return () => clearInterval(id);
  }, [delay, slides.length]);

  return (
    <div className={styles['carousel-wrapper']}>
      {slides.map((slide, i) => (
        <div
          key={i}
          className={styles.slide}
          style={{ transform: `translateY(${(i - index) * 100}%)` }}
        >
          {slide}
        </div>
      ))}
    </div>
  );
}
