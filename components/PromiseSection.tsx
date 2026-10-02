'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Sparkles, Award, Lock, Wand2, ShieldCheck } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

export default function PromiseSection() {
  const { setIsProcessModalOpen, setIsCertificateModalOpen } = useShop();

  return (
    <section className="promise-section" id="promise">
      <div className="container">
        <div className="promise-grid">
          {/* Media Left */}
          <div>
            <div className="promise-media-frame">
              <Image
                src="https://ranisahab.com/images/promise_bride.png"
                alt="One Design One Bride Real Couture Bride"
                width={500}
                height={520}
                style={{ width: '100%', height: '480px', objectFit: 'cover', objectPosition: 'center top' }}
              />
              <span className="promise-badge">
                COUTURE BRIDAL EXCLUSIVITY
              </span>
            </div>
          </div>

          {/* Center Info */}
          <div className="promise-info">
            <p className="promise-eyebrow">OUR EXCLUSIVE PROMISE</p>
            <h2 className="promise-title">ONE DESIGN, ONE BRIDE</h2>
            <p className="promise-body">
              A bespoke bridal lehenga designed exclusively for you. Once crafted for your wedding day,
              the master sketch is permanently locked in our royal archives and never recreated for anyone
              else in the world.
            </p>

            <div className="promise-icon-grid">
              <div className="promise-icon-box-item">
                <div className="promise-icon-bubble">
                  <Star size={18} />
                </div>
                <span className="promise-icon-text">100% EXCLUSIVE DESIGN</span>
              </div>
              <div className="promise-icon-box-item">
                <div className="promise-icon-bubble">
                  <Sparkles size={18} />
                </div>
                <span className="promise-icon-text">MADE ONLY FOR YOU</span>
              </div>
              <div className="promise-icon-box-item">
                <div className="promise-icon-bubble">
                  <Award size={18} />
                </div>
                <span className="promise-icon-text">OFFICIAL CERTIFICATE</span>
              </div>
              <div className="promise-icon-box-item">
                <div className="promise-icon-bubble">
                  <Lock size={18} />
                </div>
                <span className="promise-icon-text">NEVER REPEATED EVER</span>
              </div>
            </div>

            <button
              className="btn-gold"
              onClick={() => setIsProcessModalOpen(true)}
            >
              <Wand2 size={16} /> HOW IT WORKS (BESPOKE PROCESS)
            </button>
          </div>

          {/* Right Certificate Frame */}
          <div>
            <div className="certificate-card-frame">
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                <Image
                  src="https://ranisahab.com/images/logo.png"
                  alt="RANISAHAB Crest"
                  width={140}
                  height={45}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h4 style={{
                fontFamily: 'var(--font-label)',
                fontSize: '0.88rem',
                letterSpacing: '0.18em',
                color: 'var(--gold-light)',
                textTransform: 'uppercase',
                marginBottom: '0.6rem'
              }}>
                EXCLUSIVE DESIGN CERTIFICATE
              </h4>
              <p style={{
                fontSize: '0.78rem',
                color: 'rgba(255, 255, 255, 0.65)',
                lineHeight: '1.6',
                marginBottom: '1.4rem'
              }}>
                Every bespoke bridal creation includes an official physical certificate signed and sealed by our Master Weavers.
              </p>
              <button
                className="btn-outline-gold"
                style={{ width: '100%', fontSize: '0.66rem' }}
                onClick={() => setIsCertificateModalOpen(true)}
              >
                <ShieldCheck size={15} /> VIEW CERTIFICATE SAMPLE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
