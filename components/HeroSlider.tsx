'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Crown, ArrowRight, Sparkles } from 'lucide-react';
import { HERO_SLIDES } from '@/data/products';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 5500);
    return () => clearInterval(interval);
  }, [nextSlide, isHovered]);

  return (
    <section
      className="hero-banner-slider"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Featured Collections Slider"
    >
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`hero-slide ${idx === currentSlide ? 'active' : ''}`}
        >
          <div className="hero-image-wrap">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="100vw"
              priority={idx === 0}
              quality={90}
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
            <div className="hero-overlay">
              <div className="hero-content">
                <span className="hero-tag">
                  <Crown size={12} style={{ display: 'inline', marginRight: '6px', color: 'var(--gold)' }} />
                  {slide.tag}
                </span>
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
                <div className="hero-cta-group">
                  <a href={slide.link} className="btn-gold">
                    {slide.linkText} <ArrowRight size={15} />
                  </a>
                  <a href={slide.secondaryLink} className="btn-outline-gold">
                    <Sparkles size={14} /> {slide.secondaryText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Prev / Next controls */}
      <button
        className="hero-arrow hero-prev"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="hero-arrow hero-next"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="hero-dots">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            className={`hero-dot ${idx === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            style={{ border: 'none', padding: 0 }}
          />
        ))}
      </div>
    </section>
  );
}
