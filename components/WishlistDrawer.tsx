'use client';

import React from 'react';
import Image from 'next/image';
import { Heart, X, ShoppingBag, Trash2, Sparkles } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

export default function WishlistDrawer() {
  const { wishlist, isWishlistOpen, setIsWishlistOpen, toggleWishlist, addToCart, setIsCartOpen } = useShop();

  const handleMoveToBag = (product: typeof wishlist[0]) => {
    addToCart(product);
    toggleWishlist(product);
    setIsWishlistOpen(false);
    setIsCartOpen(true);
  };

  return (
    <>
      <div
        className={`drawer-backdrop ${isWishlistOpen ? 'open' : ''}`}
        onClick={() => setIsWishlistOpen(false)}
      />
      <div className={`drawer-panel ${isWishlistOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div className="drawer-title">
            <Heart size={20} style={{ color: '#ff334b' }} fill="#ff334b" />
            MY ROYAL WISHLIST ({wishlist.length})
          </div>
          <button
            className="drawer-close-btn"
            onClick={() => setIsWishlistOpen(false)}
            aria-label="Close Wishlist"
          >
            <X size={22} />
          </button>
        </div>

        <div className="drawer-body">
          {wishlist.length === 0 ? (
            <div style={{ textAlign: 'center', margin: 'auto 0', padding: '2rem 1rem' }}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'rgba(255, 51, 75, 0.1)',
                border: '1px solid rgba(255, 51, 75, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.4rem',
                color: '#ff334b'
              }}>
                <Heart size={32} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--gold-light)', marginBottom: '0.5rem' }}>
                No Treasures Saved Yet
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1.8rem' }}>
                Click the heart on any saree, lehenga, or couture ensemble to save it to your bespoke wishlist.
              </p>
              <button
                className="btn-gold"
                onClick={() => {
                  setIsWishlistOpen(false);
                  const p = document.getElementById('products');
                  if (p) p.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Sparkles size={15} /> BROWSE COLLECTIONS
              </button>
            </div>
          ) : (
            wishlist.map((product) => (
              <div
                key={product.id}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  paddingBottom: '1.2rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div style={{ position: 'relative', width: '80px', height: '100px', flexShrink: 0, borderRadius: '4px', overflow: 'hidden', border: '1px solid rgba(201,162,75,0.3)' }}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  />
                </div>

                <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h4 style={{ fontSize: '0.85rem', fontWeight: 500, color: '#fff', lineHeight: 1.3, marginBottom: '0.2rem' }}>
                      {product.name}
                    </h4>
                    <button
                      onClick={() => toggleWishlist(product)}
                      style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', cursor: 'pointer', padding: '0 0 0 6px' }}
                      title="Remove from Wishlist"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <p style={{ fontSize: '0.68rem', color: 'var(--gold-light)', fontFamily: 'var(--font-label)', margin: '0 0 0.4rem' }}>
                    {product.code}
                  </p>

                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--gold-light)', marginBottom: '0.6rem' }}>
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>

                  <button
                    className="btn-gold"
                    style={{ padding: '0.45rem 1rem', fontSize: '0.65rem', alignSelf: 'flex-start' }}
                    onClick={() => handleMoveToBag(product)}
                  >
                    <ShoppingBag size={14} /> MOVE TO BAG
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
