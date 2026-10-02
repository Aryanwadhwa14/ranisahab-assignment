'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, Eye, ChevronLeft, ChevronRight, X, Play } from 'lucide-react';
import { REAL_BRIDES, TESTIMONIALS } from '@/data/products';

export default function RealBridesGallery() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<typeof REAL_BRIDES[0] | null>(null);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentT = TESTIMONIALS[activeTestimonial];

  return (
    <section className="gallery-testimonials-section" id="gallery">
      <div className="container">
        <div className="gallery-grid-layout">
          {/* Gallery Left */}
          <div>
            <div className="section-title-wrapper" style={{ textAlign: 'left', marginBottom: '1.8rem' }}>
              <span className="motif" style={{ textAlign: 'left' }}>❖</span>
              <h2 style={{ fontSize: '2.1rem' }}>REAL BRIDES, REAL STORIES</h2>
              <p>Moments of Royal Splendor with RANISAHAB</p>
            </div>

            <div className="gallery-grid-6">
              {REAL_BRIDES.map((bride) => (
                <div
                  key={bride.id}
                  className="gallery-thumb-item"
                  onClick={() => setLightboxImage(bride)}
                  title={`${bride.bride} - ${bride.city}`}
                >
                  <Image
                    src={bride.image}
                    alt={bride.bride}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  />
                  <div className="gallery-thumb-overlay">
                    <span style={{
                      background: 'rgba(8,7,6,0.8)',
                      border: '1px solid var(--gold)',
                      borderRadius: '50%',
                      width: '38px',
                      height: '38px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--gold-light)'
                    }}>
                      <Eye size={18} />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1.8rem' }}>
              <a href="#promise" className="btn-outline-gold" style={{ fontSize: '0.68rem' }}>
                EXPLORE CUSTOM BRIDAL DIARIES
              </a>
            </div>
          </div>

          {/* Testimonials Right */}
          <div>
            <div className="section-title-wrapper" style={{ textAlign: 'left', marginBottom: '1.8rem' }}>
              <h2 style={{ fontSize: '1.6rem' }}>WORDS OF ADORATION</h2>
              <p>Experiences from our Royal Patrons</p>
            </div>

            <div className="testimonial-card-box">
              <div className="testimonial-stars">
                {[...Array(currentT.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="var(--gold)" />
                ))}
              </div>

              <p className="testimonial-quote">
                &ldquo;{currentT.quote}&rdquo;
              </p>

              <div>
                <p className="testimonial-author">{currentT.author}</p>
                <p className="testimonial-city">{currentT.city} · {currentT.outfit}</p>
              </div>

              {/* Slider Arrows */}
              <div style={{ display: 'flex', gap: '0.6rem', marginTop: '1.8rem' }}>
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous Review"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(201,162,75,0.4)',
                    color: 'var(--gold-light)',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={nextTestimonial}
                  aria-label="Next Review"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(201,162,75,0.4)',
                    color: 'var(--gold-light)',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="modal-overlay open"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="modal-content-box"
            style={{ maxWidth: '580px', padding: '1rem', background: '#0c0a09' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={() => setLightboxImage(null)}
              aria-label="Close Preview"
            >
              <X size={18} />
            </button>

            <div style={{ position: 'relative', width: '100%', height: '540px', borderRadius: '4px', overflow: 'hidden' }}>
              <Image
                src={lightboxImage.image}
                alt={lightboxImage.bride}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
            <div style={{ padding: '1rem 0.5rem 0.5rem', textAlign: 'center' }}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--gold-light)' }}>
                {lightboxImage.bride}
              </h4>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', margin: '0.2rem 0' }}>
                {lightboxImage.city}
              </p>
              <span className="hero-tag" style={{ marginTop: '0.4rem' }}>
                {lightboxImage.outfit}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
