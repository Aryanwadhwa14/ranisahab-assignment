'use client';

import React from 'react';
import Image from 'next/image';
import { Check, Sparkles, Crown } from 'lucide-react';
import { BRIDAL_PACKAGES } from '@/data/products';
import { useShop } from '@/context/ShopContext';

export default function BridalPackages() {
  const { setSelectedPackage, setIsConsultationModalOpen } = useShop();

  const handleBookNow = (pkg: typeof BRIDAL_PACKAGES[0]) => {
    setSelectedPackage(pkg);
    setIsConsultationModalOpen(true);
  };

  return (
    <section className="packages-section" id="packages">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="motif">❖</span>
          <h2>ROYAL BRIDAL PACKAGES</h2>
          <p>Complete Haute Couture &amp; Celebrity Bridal Services</p>
          <div className="section-divider-line"></div>
        </div>

        <div className="package-slider-container">
          <div className="package-track">
            {BRIDAL_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`package-card ${pkg.popular ? 'popular-package' : ''}`}
              >
                {pkg.popular && (
                  <div className="popular-banner">
                    <Crown size={13} style={{ display: 'inline', marginRight: '6px' }} />
                    MOST POPULAR SIGNATURE COUTURE
                  </div>
                )}

                <div className="package-card-media">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    sizes="(max-width: 992px) 100vw, 33vw"
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  />
                </div>

                <div className="package-card-body">
                  <h3 className="package-card-title">{pkg.title}</h3>
                  <div className="package-price-tag">
                    ₹{pkg.price.toLocaleString('en-IN')}
                    <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', fontWeight: 400, marginLeft: '6px' }}>
                      / complete package
                    </span>
                  </div>

                  <ul className="package-feature-list">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx}>
                        <Check size={16} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ marginTop: 'auto' }}>
                    <button
                      className={pkg.popular ? 'btn-gold' : 'btn-outline-gold'}
                      style={{ width: '100%' }}
                      onClick={() => handleBookNow(pkg)}
                    >
                      <Sparkles size={15} /> BOOK THIS PACKAGE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
