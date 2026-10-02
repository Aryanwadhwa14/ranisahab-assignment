'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Crown } from 'lucide-react';
import { CATEGORIES } from '@/data/products';

export default function ShopByCategory() {
  return (
    <section className="shop-by-category-section" id="categories">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="motif">❖</span>
          <h2>SHOP BY CATEGORY</h2>
          <p>Curated collections crafted for every royal celebration</p>
          <div className="section-divider-line"></div>
        </div>

        <div className="sbc-grid">
          {CATEGORIES.map((cat) => (
            <a key={cat.id} href="#products" className="sbc-card">
              <Image
                src={cat.image}
                alt={`${cat.title} Collection`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
              <div className="sbc-card-overlay" />
              <div className="sbc-card-content">
                <div className="sbc-card-top">
                  <span className="sbc-card-number">{cat.number}</span>
                  {cat.featured && (
                    <span className="sbc-featured-tag">
                      <Crown size={12} /> EXCLUSIVE
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="sbc-card-title">{cat.title}</h3>
                  <p className="sbc-card-desc">{cat.description}</p>
                  <span className="sbc-shop-now">
                    EXPLORE COLLECTION <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
