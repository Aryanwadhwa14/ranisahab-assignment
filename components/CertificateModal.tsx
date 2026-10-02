'use client';

import React from 'react';
import Image from 'next/image';
import { X, Crown, ShieldCheck } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

export default function CertificateModal() {
  const { isCertificateModalOpen, setIsCertificateModalOpen } = useShop();

  if (!isCertificateModalOpen) return null;

  return (
    <div
      className="modal-overlay open"
      onClick={() => setIsCertificateModalOpen(false)}
    >
      <div
        className="modal-content-box"
        style={{ maxWidth: '580px', padding: '2.5rem 2rem', textAlign: 'center' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-btn"
          onClick={() => setIsCertificateModalOpen(false)}
          aria-label="Close Modal"
        >
          <X size={18} />
        </button>

        <div style={{
          border: '2px solid var(--gold)',
          borderRadius: '6px',
          padding: '2.2rem 1.8rem',
          background: 'linear-gradient(145deg, #181210 0%, #0d0a08 100%)',
          position: 'relative',
          boxShadow: '0 0 35px rgba(201,162,75,0.2)'
        }}>
          {/* Inner framing */}
          <div style={{
            position: 'absolute',
            inset: '6px',
            border: '1px solid rgba(201,162,75,0.3)',
            borderRadius: '4px',
            pointerEvents: 'none'
          }} />

          <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
            <Crown size={36} style={{ color: 'var(--gold)' }} />
          </div>

          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.9rem',
            color: 'var(--gold-light)',
            letterSpacing: '0.08em',
            margin: '0 0 0.5rem'
          }}>
            CERTIFICATE OF AUTHENTICITY
          </h3>

          <p style={{
            fontFamily: 'var(--font-label)',
            fontSize: '0.68rem',
            letterSpacing: '0.2em',
            color: 'var(--gold)',
            textTransform: 'uppercase',
            marginBottom: '1.2rem'
          }}>
            Official Guild Heritage Registry
          </p>

          <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '1.4rem' }}>
            This document certifies that the couture bridal outfit is an authentic, one-of-a-kind creation crafted exclusively by RANISAHAB Master Weavers. The original design master plate has been archived and locked.
          </p>

          <div style={{
            borderTop: '1px solid var(--gold)',
            borderBottom: '1px solid var(--gold)',
            padding: '1rem 0',
            margin: '1.4rem 0',
            textAlign: 'left',
            fontSize: '0.82rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.45rem' }}>
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>Certificate Registry ID:</span>
              <span style={{ color: 'var(--gold-light)', fontWeight: 700, fontFamily: 'var(--font-label)' }}>RS-CERT-2026-8809</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.45rem' }}>
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>Master Artisan Hours:</span>
              <span style={{ color: '#fff' }}>340 Dedicated Weaving Hours</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.45rem' }}>
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>Material Composition:</span>
              <span style={{ color: '#fff' }}>100% Pure Kanjivaram / Zari Silk Mark</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>Exclusivity Status:</span>
              <span style={{ color: '#4ade80', fontWeight: 700, letterSpacing: '0.05em' }}>PERMANENTLY LOCKED / NEVER REPEATED</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '1.2rem' }}>
            <ShieldCheck size={18} style={{ color: 'var(--gold)' }} />
            <p style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              color: 'var(--gold-light)',
              fontSize: '0.95rem',
              margin: 0
            }}>
              Signed &amp; Sealed by the Rani Sahab Couture Guild
            </p>
          </div>
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <button
            className="btn-outline-gold"
            onClick={() => setIsCertificateModalOpen(false)}
          >
            CLOSE SAMPLE PREVIEW
          </button>
        </div>
      </div>
    </div>
  );
}
