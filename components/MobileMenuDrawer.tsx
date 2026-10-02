'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { Crown, X, Phone, MessageSquare, Sparkles } from 'lucide-react';

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ label: string; href: string; icon: React.ReactNode }>;
}

export default function MobileMenuDrawer({ isOpen, onClose, navLinks }: MobileMenuDrawerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div style={{ position: 'fixed', inset: 0, zIndex: 99999, display: 'flex' }}>
      {/* Dimmed Backdrop - click to close */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(8px)',
          zIndex: 99999,
          cursor: 'pointer',
          animation: 'fadeIn 0.25s ease forwards'
        }}
        aria-label="Close backdrop"
      />

      {/* Drawer Panel */}
      <aside
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          width: '100%',
          maxWidth: '380px',
          background: '#0e0b09',
          borderRight: '1px solid var(--gold)',
          zIndex: 100000,
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '10px 0 40px rgba(0, 0, 0, 0.9)',
          animation: 'slideInLeft 0.3s cubic-bezier(0.2, 0.8, 0.2, 1) forwards'
        }}
        aria-label="Mobile Navigation Menu"
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            borderBottom: '1px solid rgba(201, 162, 75, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#070504'
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-label)',
              fontSize: '0.88rem',
              color: 'var(--gold-light)',
              letterSpacing: '0.14em',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <Crown size={20} style={{ color: 'var(--gold)' }} />
            RANISAHAB BOUTIQUE
          </div>

          {/* Close Button with X and explicit click handler */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              onClose();
            }}
            aria-label="Close navigation menu"
            style={{
              background: 'rgba(201, 162, 75, 0.15)',
              border: '1px solid var(--gold)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--gold-light)',
              cursor: 'pointer',
              zIndex: 100001,
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--gold)';
              e.currentTarget.style.color = '#000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(201, 162, 75, 0.15)';
              e.currentTarget.style.color = 'var(--gold-light)';
            }}
          >
            <X size={20} strokeWidth={2.5} />
          </button>
        </div>

        {/* Drawer Content */}
        <div
          style={{
            padding: '1.2rem 1.4rem',
            overflowY: 'auto',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          {/* Guest welcome bar */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(90, 11, 22, 0.4) 0%, rgba(20, 15, 12, 0.8) 100%)',
              border: '1px solid rgba(201, 162, 75, 0.35)',
              padding: '0.9rem 1.1rem',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <p style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                Welcome, Boutique Guest
              </p>
              <p style={{ fontSize: '0.86rem', color: 'var(--gold-light)', fontWeight: 700, margin: '2px 0 0' }}>
                VIP Bespoke Guild
              </p>
            </div>
            <button
              className="btn-gold"
              style={{ padding: '0.45rem 1rem', fontSize: '0.64rem' }}
              onClick={() => {
                alert('Welcome to Rani Sahab VIP Bespoke Lounge.');
                onClose();
              }}
            >
              SIGN IN
            </button>
          </div>

          {/* Navigation Links */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginTop: '0.5rem' }}>
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={onClose}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.9rem',
                  padding: '0.8rem 1.1rem',
                  borderRadius: '4px',
                  background: link.label === 'HOME'
                    ? 'linear-gradient(90deg, rgba(90, 11, 22, 0.9) 0%, rgba(20, 15, 12, 0.95) 100%)'
                    : 'rgba(255, 255, 255, 0.02)',
                  border: link.label === 'HOME' ? '1px solid var(--gold)' : '1px solid rgba(201, 162, 75, 0.15)',
                  color: link.label === 'HOME' ? 'var(--gold-light)' : '#ebdcc2',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-label)',
                  letterSpacing: '0.12em',
                  fontWeight: 600,
                  transition: 'all 0.2s ease'
                }}
              >
                <span style={{ color: 'var(--gold)', display: 'flex', alignItems: 'center' }}>
                  {link.icon}
                </span>
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>

          {/* Quick Contact & Close Button in Footer */}
          <div
            style={{
              marginTop: 'auto',
              paddingTop: '1.2rem',
              borderTop: '1px solid rgba(201, 162, 75, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem'
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
              <a
                href="tel:+919131551183"
                className="btn-outline-gold"
                style={{ padding: '0.55rem', fontSize: '0.65rem', justifyContent: 'center' }}
              >
                <Phone size={14} /> CALL US
              </a>
              <a
                href="https://wa.me/919131551183?text=Hi%20RANISAHAB%2C%20I%20have%20an%20enquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ padding: '0.55rem', fontSize: '0.65rem', justifyContent: 'center' }}
              >
                <MessageSquare size={14} /> WHATSAPP
              </a>
            </div>

            {/* Explicit Close Menu Button */}
            <button
              type="button"
              onClick={onClose}
              className="btn-outline-gold"
              style={{
                width: '100%',
                padding: '0.6rem',
                fontSize: '0.68rem',
                borderColor: 'rgba(255, 255, 255, 0.2)',
                color: 'rgba(255, 255, 255, 0.75)',
                justifyContent: 'center'
              }}
            >
              <X size={15} /> CLOSE MENU
            </button>
          </div>
        </div>
      </aside>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>,
    document.body
  );
}
