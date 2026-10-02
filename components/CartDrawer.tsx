'use client';

import React from 'react';
import Image from 'next/image';
import { ShoppingBag, X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateCartQuantity, cartTotal, showToast } = useShop();

  const freeShippingThreshold = 5000;
  const remainingForFree = Math.max(0, freeShippingThreshold - cartTotal);
  const progressPercent = Math.min(100, (cartTotal / freeShippingThreshold) * 100);

  const handleCheckout = () => {
    alert(`Thank you for shopping at Rani Sahab!\n\nYour order total is ₹${cartTotal.toLocaleString('en-IN')}.\nOur royal bridal concierge will contact you shortly to confirm bespoke delivery.`);
    setIsCartOpen(false);
  };

  return (
    <>
      <div
        className={`drawer-backdrop ${isCartOpen ? 'open' : ''}`}
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`drawer-panel ${isCartOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div className="drawer-title">
            <ShoppingBag size={20} style={{ color: 'var(--gold)' }} />
            SHOPPING BAG ({cart.length})
          </div>
          <button
            className="drawer-close-btn"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close Bag"
          >
            <X size={22} />
          </button>
        </div>

        {/* Free Shipping Progress Strip */}
        <div style={{
          padding: '0.85rem 1.5rem',
          background: '#15100e',
          borderBottom: '1px solid rgba(201, 162, 75, 0.2)'
        }}>
          {cartTotal >= freeShippingThreshold ? (
            <p style={{ fontSize: '0.74rem', color: 'var(--gold-light)', margin: '0 0 0.4rem', fontFamily: 'var(--font-label)', letterSpacing: '0.08em' }}>
              ✦ CONGRATULATIONS! YOU UNLOCKED FREE EXPRESS SHIPPING
            </p>
          ) : (
            <p style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.8)', margin: '0 0 0.4rem', fontFamily: 'var(--font-label)', letterSpacing: '0.08em' }}>
              ADD ₹{remainingForFree.toLocaleString('en-IN')} MORE FOR FREE EXPRESS SHIPPING
            </p>
          )}
          <div style={{ width: '100%', height: '5px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
            <div
              style={{
                width: `${progressPercent}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #d8b25d 0%, #b89038 100%)',
                transition: 'width 0.4s ease'
              }}
            />
          </div>
        </div>

        {/* Cart Items or Empty State */}
        <div className="drawer-body">
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', margin: 'auto 0', padding: '2rem 1rem' }}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'rgba(201, 162, 75, 0.1)',
                border: '1px solid var(--gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.4rem',
                color: 'var(--gold-light)'
              }}>
                <ShoppingBag size={32} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--gold-light)', marginBottom: '0.5rem' }}>
                Your Royal Bag is Empty
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1.8rem' }}>
                Explore our pure Banarasi silks, handloom sarees, and designer lehengas.
              </p>
              <button
                className="btn-gold"
                onClick={() => {
                  setIsCartOpen(false);
                  const p = document.getElementById('products');
                  if (p) p.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Sparkles size={15} /> EXPLORE CREATIONS
              </button>
            </div>
          ) : (
            cart.map((item, idx) => (
              <div
                key={`${item.product.id}-${item.size}-${idx}`}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  paddingBottom: '1.2rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div style={{ position: 'relative', width: '80px', height: '100px', flexShrink: 0, borderRadius: '4px', overflow: 'hidden', border: '1px solid rgba(201,162,75,0.3)' }}>
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  />
                </div>

                <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h4 style={{ fontSize: '0.85rem', fontWeight: 500, color: '#fff', lineHeight: 1.3, marginBottom: '0.2rem' }}>
                      {item.product.name}
                    </h4>
                    <button
                      onClick={() => removeFromCart(item.product.id, item.size)}
                      style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', cursor: 'pointer', padding: '0 0 0 6px' }}
                      title="Remove Item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <p style={{ fontSize: '0.68rem', color: 'var(--gold-light)', fontFamily: 'var(--font-label)', margin: '0 0 0.5rem' }}>
                    {item.product.code} · Size: {item.size}
                  </p>

                  <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(201,162,75,0.35)', borderRadius: '3px' }}>
                      <button
                        onClick={() => updateCartQuantity(item.product.id, item.quantity - 1, item.size)}
                        style={{ background: 'none', border: 'none', color: '#fff', padding: '3px 8px', cursor: 'pointer' }}
                      >
                        <Minus size={12} />
                      </button>
                      <span style={{ fontSize: '0.78rem', padding: '0 6px', fontWeight: 600 }}>{item.quantity}</span>
                      <button
                        onClick={() => updateCartQuantity(item.product.id, item.quantity + 1, item.size)}
                        style={{ background: 'none', border: 'none', color: '#fff', padding: '3px 8px', cursor: 'pointer' }}
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--gold-light)' }}>
                      ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary */}
        {cart.length > 0 && (
          <div className="drawer-footer">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
              <span>Subtotal:</span>
              <span style={{ color: '#fff', fontWeight: 600 }}>₹{cartTotal.toLocaleString('en-IN')}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.2rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
              <span>Express Delivery:</span>
              <span style={{ color: 'var(--gold-light)', fontWeight: 600 }}>
                {cartTotal >= freeShippingThreshold ? 'FREE' : '₹199'}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.4rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '0.8rem' }}>
              <span style={{ fontFamily: 'var(--font-label)', fontSize: '0.9rem', color: 'var(--gold-light)' }}>ESTIMATED TOTAL:</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>
                ₹{(cartTotal + (cartTotal >= freeShippingThreshold ? 0 : 199)).toLocaleString('en-IN')}
              </span>
            </div>

            <button
              className="btn-gold"
              style={{ width: '100%', padding: '0.9rem' }}
              onClick={handleCheckout}
            >
              PROCEED TO ROYAL CHECKOUT <ArrowRight size={16} />
            </button>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginTop: '0.8rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.68rem' }}>
              <ShieldCheck size={14} style={{ color: 'var(--gold)' }} /> 100% Encrypted &amp; Insured Handloom Dispatch
            </div>
          </div>
        )}
      </div>
    </>
  );
}
