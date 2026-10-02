'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-ranisahab" id="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand Info */}
          <div>
            <div style={{ marginBottom: '1.2rem' }}>
              <Link href="/">
                <Image
                  src="https://ranisahab.com/images/logo.png"
                  alt="RANISAHAB Crest"
                  width={210}
                  height={75}
                  className="brand-logo-img logo-lg"
                  style={{ margin: 0 }}
                />
              </Link>
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.7, marginBottom: '1.6rem', fontSize: '0.82rem' }}>
              RANISAHAB is India’s premier royal bridal house offering certified pure silk sarees,
              designer lehengas, and custom haute couture bridal wear directly from master generational weavers.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href="https://instagram.com/ranisahabofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Instagram"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://facebook.com/ranisahabofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Facebook"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="YouTube"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                  <path d="m10 15 5-3-5-3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h6>ROYAL COLLECTIONS</h6>
            <ul className="footer-links">
              <li><Link href="/">Home &amp; Flagship</Link></li>
              <li><a href="#products">Pure Silk Sarees</a></li>
              <li><a href="#products">Designer Suits &amp; Shararas</a></li>
              <li><a href="#products">Couture Lehengas</a></li>
              <li><a href="#promise">One Design, One Bride</a></li>
              <li><a href="#packages">Bridal Packages</a></li>
              <li><a href="#gallery">Real Brides Gallery</a></li>
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div>
            <h6>CUSTOMER CARE</h6>
            <ul className="footer-links">
              <li><a href="#footer" onClick={(e) => { e.preventDefault(); alert('Order Tracking: Enter your tracking code in SMS or email confirmation.'); }}>Track Your Order</a></li>
              <li><a href="#footer" onClick={(e) => { e.preventDefault(); alert('Pan-India express shipping within 3-7 business days.'); }}>Shipping &amp; Delivery</a></li>
              <li><a href="#footer" onClick={(e) => { e.preventDefault(); alert('7-day hassle-free return and exchange policy on non-customized pieces.'); }}>Returns &amp; Refunds</a></li>
              <li><a href="#footer" onClick={(e) => { e.preventDefault(); alert('Silk Mark & Handloom authenticity terms apply.'); }}>Terms &amp; Conditions</a></li>
              <li><a href="#footer" onClick={(e) => { e.preventDefault(); alert('Your private bespoke data is strictly confidential.'); }}>Privacy Policy</a></li>
              <li><a href="#footer" onClick={(e) => { e.preventDefault(); alert('Frequently asked questions about fabric care and bridal appointments.'); }}>Client FAQ</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Concierge */}
          <div>
            <h6>CONCIERGE DESK</h6>
            <ul className="footer-links" style={{ marginBottom: '1.4rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'rgba(255,255,255,0.8)' }}>
                <Phone size={15} style={{ color: 'var(--gold)' }} />
                <span>+91 91315 51183</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'rgba(255,255,255,0.8)' }}>
                <Mail size={15} style={{ color: 'var(--gold)' }} />
                <span>concierge@ranisahab.com</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'rgba(255,255,255,0.8)' }}>
                <MapPin size={15} style={{ color: 'var(--gold)' }} />
                <span>Varanasi &amp; Pan-India Express Delivery</span>
              </li>
            </ul>

            <a
              href="https://wa.me/919131551183?text=Hello%20RANISAHAB%20Team%2C%20I%20have%20an%20inquiry%20regarding%20bridal%20wear."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <MessageSquare size={16} /> CHAT ON WHATSAPP
            </a>
          </div>
        </div>

        <div className="footer-bottom-line">
          <span>&copy; {new Date().getFullYear()} RANISAHAB LUXURY COUTURE. All Rights Reserved.</span>
          <span>Crafted with Royal Excellence for Connoisseurs of Heritage Fashion</span>
        </div>
      </div>
    </footer>
  );
}
