'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, ShoppingBag, Heart, ShieldCheck, Sparkles, Plus, Minus } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

export default function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart, toggleWishlist, isInWishlist, setIsCartOpen } = useShop();
  const [selectedSize, setSelectedSize] = useState('Free Size');
  const [qty, setQty] = useState(1);

  if (!quickViewProduct) return null;

  const inWishlist = isInWishlist(quickViewProduct.id);
  const sizes = ['Free Size', 'S (36)', 'M (38)', 'L (40)', 'XL (42)', 'Custom Bespoke'];

  const handleAdd = () => {
    addToCart(quickViewProduct, qty, selectedSize);
    setQuickViewProduct(null);
    setIsCartOpen(true);
  };

  return (
    <div
      className="modal-overlay open"
      onClick={() => setQuickViewProduct(null)}
    >
      <div
        className="modal-content-box"
        style={{ maxWidth: '820px', padding: 0, overflow: 'hidden' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-btn"
          onClick={() => setQuickViewProduct(null)}
          aria-label="Close Modal"
        >
          <X size={18} />
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {/* Product Media */}
          <div style={{ position: 'relative', minHeight: '440px', background: '#050404' }}>
            <Image
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
            {quickViewProduct.badge && (
              <span
                className="plp-badge badge-new"
                style={{ top: '20px', left: '20px' }}
              >
                {quickViewProduct.badge}
              </span>
            )}
          </div>

          {/* Product Information */}
          <div style={{ padding: '2.2rem 2rem', display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--gold-light)', fontFamily: 'var(--font-label)', letterSpacing: '0.12em', marginBottom: '0.4rem' }}>
              CODE: {quickViewProduct.code}
            </span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.65rem', color: '#fff', lineHeight: 1.25, marginBottom: '0.8rem' }}>
              {quickViewProduct.name}
            </h3>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem', marginBottom: '1.2rem' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--gold-light)' }}>
                ₹{quickViewProduct.price.toLocaleString('en-IN')}
              </span>
              {quickViewProduct.originalPrice && (
                <span style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'line-through' }}>
                  ₹{quickViewProduct.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
              <span style={{ fontSize: '0.7rem', color: '#4ade80', fontWeight: 600 }}>
                Inclusive of all taxes
              </span>
            </div>

            <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginBottom: '1.4rem' }}>
              {quickViewProduct.description}
            </p>

            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(201,162,75,0.2)',
              borderRadius: '4px',
              padding: '0.8rem 1rem',
              marginBottom: '1.4rem',
              fontSize: '0.78rem'
            }}>
              <p style={{ margin: '0 0 0.3rem', color: 'rgba(255,255,255,0.6)' }}>
                <strong style={{ color: 'var(--gold-light)' }}>Fabric:</strong> {quickViewProduct.fabric}
              </p>
              <p style={{ margin: '0 0 0.3rem', color: 'rgba(255,255,255,0.6)' }}>
                <strong style={{ color: 'var(--gold-light)' }}>Work:</strong> {quickViewProduct.work}
              </p>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.6)' }}>
                <strong style={{ color: 'var(--gold-light)' }}>Color:</strong> {quickViewProduct.color}
              </p>
            </div>

            {/* Size Selector */}
            <div style={{ marginBottom: '1.4rem' }}>
              <span style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-label)', letterSpacing: '0.12em', color: 'var(--gold-light)', marginBottom: '0.5rem' }}>
                SELECT SIZE / FIT:
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    style={{
                      background: selectedSize === s ? 'linear-gradient(135deg, #d8b25d 0%, #b89038 100%)' : 'rgba(255,255,255,0.04)',
                      color: selectedSize === s ? '#000' : 'rgba(255,255,255,0.85)',
                      border: selectedSize === s ? '1px solid var(--gold)' : '1px solid rgba(201,162,75,0.3)',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '3px',
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-label)',
                      cursor: 'pointer',
                      fontWeight: selectedSize === s ? 700 : 500,
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Stepper & Add to Bag */}
            <div style={{ display: 'flex', gap: '0.8rem', marginTop: 'auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(201,162,75,0.4)', borderRadius: '3px', background: 'rgba(0,0,0,0.3)' }}>
                <button
                  onClick={() => setQty((prev) => Math.max(1, prev - 1))}
                  style={{ background: 'none', border: 'none', color: '#fff', padding: '0.6rem 0.8rem', cursor: 'pointer' }}
                >
                  <Minus size={14} />
                </button>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, padding: '0 0.5rem' }}>{qty}</span>
                <button
                  onClick={() => setQty((prev) => prev + 1)}
                  style={{ background: 'none', border: 'none', color: '#fff', padding: '0.6rem 0.8rem', cursor: 'pointer' }}
                >
                  <Plus size={14} />
                </button>
              </div>

              <button
                className="btn-gold"
                style={{ flexGrow: 1 }}
                onClick={handleAdd}
              >
                <ShoppingBag size={16} /> ADD TO SHOPPING BAG
              </button>

              <button
                onClick={() => toggleWishlist(quickViewProduct)}
                style={{
                  background: inWishlist ? 'var(--maroon)' : 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--gold)',
                  color: inWishlist ? '#ff334b' : 'var(--gold-light)',
                  borderRadius: '3px',
                  width: '46px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                title={inWishlist ? 'Saved in Wishlist' : 'Add to Wishlist'}
              >
                <Heart size={18} fill={inWishlist ? '#ff334b' : 'none'} />
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem' }}>
              <ShieldCheck size={14} style={{ color: 'var(--gold)' }} />
              Certified Silk Mark Quality &bull; Pan-India Dispatch
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
