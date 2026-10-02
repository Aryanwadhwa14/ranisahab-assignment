'use client';

import React, { useState } from 'react';
import { X, Crown, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';
import { useShop } from '@/context/ShopContext';
import { BRIDAL_PACKAGES } from '@/data/products';

export default function ConsultationModal() {
  const { isConsultationModalOpen, setIsConsultationModalOpen, selectedPackage, setSelectedPackage, showToast } = useShop();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isConsultationModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Consultation request received! Our bridal concierge will call you.');
    setTimeout(() => {
      setSubmitted(false);
      setIsConsultationModalOpen(false);
      setSelectedPackage(null);
    }, 2800);
  };

  return (
    <div
      className="modal-overlay open"
      onClick={() => setIsConsultationModalOpen(false)}
    >
      <div
        className="modal-content-box"
        style={{ maxWidth: '600px', padding: '2.5rem 2rem' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-btn"
          onClick={() => setIsConsultationModalOpen(false)}
          aria-label="Close Modal"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{
              width: '68px',
              height: '68px',
              borderRadius: '50%',
              background: 'rgba(74, 222, 128, 0.1)',
              border: '1px solid #4ade80',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.4rem',
              color: '#4ade80'
            }}>
              <CheckCircle2 size={36} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--gold-light)', marginBottom: '0.6rem' }}>
              Your Royal Appointment is Requested
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
              Our Senior Bridal Stylist will contact you within 2 business hours on <strong>{phone}</strong> to confirm your date and dispatch the swatch kit.
            </p>
          </div>
        ) : (
          <>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold)', marginBottom: '0.4rem' }}>
                <Crown size={20} />
                <span style={{ fontFamily: 'var(--font-label)', fontSize: '0.72rem', letterSpacing: '0.2em' }}>
                  BESPOKE RESERVATION
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--gold-light)', margin: 0 }}>
                {selectedPackage ? `Book ${selectedPackage.title}` : 'Book Bridal Consultation'}
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', marginTop: '0.3rem' }}>
                Private 1-on-1 designer appointment with Rani Sahab master couturiers.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-label)', color: 'var(--gold-light)', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                  FULL NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Radhika Singhal"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(201,162,75,0.35)',
                    borderRadius: '4px',
                    padding: '0.7rem 1rem',
                    color: '#fff',
                    fontSize: '0.85rem'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-label)', color: 'var(--gold-light)', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                    WHATSAPP PHONE *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: '100%',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(201,162,75,0.35)',
                      borderRadius: '4px',
                      padding: '0.7rem 1rem',
                      color: '#fff',
                      fontSize: '0.85rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-label)', color: 'var(--gold-light)', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                    WEDDING DATE *
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    style={{
                      width: '100%',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(201,162,75,0.35)',
                      borderRadius: '4px',
                      padding: '0.7rem 1rem',
                      color: '#fff',
                      fontSize: '0.85rem'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-label)', color: 'var(--gold-light)', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                  DESTINATION / CITY
                </label>
                <input
                  type="text"
                  placeholder="e.g. Udaipur / Mumbai / New Delhi"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(201,162,75,0.35)',
                    borderRadius: '4px',
                    padding: '0.7rem 1rem',
                    color: '#fff',
                    fontSize: '0.85rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-label)', color: 'var(--gold-light)', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                  INTERESTED SERVICE / PACKAGE
                </label>
                <select
                  value={selectedPackage ? selectedPackage.id : 'custom'}
                  onChange={(e) => {
                    const found = BRIDAL_PACKAGES.find(p => p.id === e.target.value);
                    setSelectedPackage(found || null);
                  }}
                  style={{
                    width: '100%',
                    background: '#15100e',
                    border: '1px solid rgba(201,162,75,0.35)',
                    borderRadius: '4px',
                    padding: '0.7rem 1rem',
                    color: '#fff',
                    fontSize: '0.85rem'
                  }}
                >
                  <option value="custom">One Design, One Bride (Custom Bridal Lehenga)</option>
                  {BRIDAL_PACKAGES.map(pkg => (
                    <option key={pkg.id} value={pkg.id}>
                      {pkg.title} - ₹{pkg.price.toLocaleString('en-IN')}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="btn-gold"
                style={{ width: '100%', padding: '0.9rem', marginTop: '0.8rem' }}
              >
                <Sparkles size={16} /> CONFIRM CONSULTATION APPOINTMENT
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
