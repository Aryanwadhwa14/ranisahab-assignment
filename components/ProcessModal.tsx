'use client';

import React from 'react';
import { X, Crown, MessageSquare, PenTool, Sparkles, Award } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

export default function ProcessModal() {
  const { isProcessModalOpen, setIsProcessModalOpen, setIsConsultationModalOpen } = useShop();

  if (!isProcessModalOpen) return null;

  const steps = [
    {
      num: '1',
      icon: <MessageSquare size={28} />,
      title: '1. Consultation',
      desc: '1-on-1 designer session to select color palette, silk fabric, and bespoke embroidery motifs.'
    },
    {
      num: '2',
      icon: <PenTool size={28} />,
      title: '2. Custom Sketch',
      desc: 'A unique, non-repeat sketch is hand-drawn and approved exclusively by you and our master stylist.'
    },
    {
      num: '3',
      icon: <Sparkles size={28} />,
      title: '3. Artisan Weaving',
      desc: '300+ artisan hours of authentic zardozi, dabka, cutdana, and pure zari handloom weaving.'
    },
    {
      num: '4',
      icon: <Award size={28} />,
      title: '4. Lock & Certify',
      desc: 'The master sketch is permanently locked in the vault. Your physical Certificate of Authenticity is issued.'
    }
  ];

  return (
    <div
      className="modal-overlay open"
      onClick={() => setIsProcessModalOpen(false)}
    >
      <div
        className="modal-content-box"
        style={{ maxWidth: '850px', padding: '2.5rem 2rem' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-btn"
          onClick={() => setIsProcessModalOpen(false)}
          aria-label="Close Modal"
        >
          <X size={18} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '2.2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gold)', marginBottom: '0.4rem' }}>
            <Crown size={22} />
            <span style={{ fontFamily: 'var(--font-label)', fontSize: '0.75rem', letterSpacing: '0.2em' }}>
              HAUTE COUTURE BESPOKE PROCESS
            </span>
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--gold-light)', margin: 0 }}>
            One Design, One Bride
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', marginTop: '0.4rem' }}>
            How your one-of-a-kind royal bridal ensemble is envisioned, woven, and forever immortalized.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          gap: '1.2rem',
          marginBottom: '2.4rem'
        }}>
          {steps.map((step) => (
            <div
              key={step.num}
              style={{
                background: '#15110f',
                border: '1px solid rgba(201,162,75,0.3)',
                borderRadius: '6px',
                padding: '1.6rem 1.1rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                background: 'rgba(201,162,75,0.12)',
                border: '1px solid var(--gold)',
                color: 'var(--gold-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                {step.icon}
              </div>
              <h4 style={{ fontFamily: 'var(--font-label)', fontSize: '0.82rem', color: 'var(--gold-light)', marginBottom: '0.6rem' }}>
                {step.title}
              </h4>
              <p style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.5, margin: 0 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            className="btn-gold"
            onClick={() => {
              setIsProcessModalOpen(false);
              setIsConsultationModalOpen(true);
            }}
          >
            <Crown size={16} /> START YOUR BESPOKE BRIDAL CREATION
          </button>
        </div>
      </div>
    </div>
  );
}
