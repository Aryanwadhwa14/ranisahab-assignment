'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Heart, ShoppingBag, Eye, Sparkles, Loader2 } from 'lucide-react';
import { PRODUCTS, Product } from '@/data/products';
import { useShop } from '@/context/ShopContext';

export default function RoyalProducts() {
  const { addToCart, toggleWishlist, isInWishlist, setQuickViewProduct } = useShop();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState<number>(8);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'ALL CREATIONS' },
    { id: 'sarees', label: 'SAREES' },
    { id: 'lehengas', label: 'LEHENGAS' },
    { id: 'suits', label: 'SUITS & SHARARAS' },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  const displayedProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 4);
      setIsLoadingMore(false);
    }, 700);
  };

  return (
    <section className="products-section" id="products">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="motif">❖</span>
          <h2>ROYAL EXCLUSIVE COLLECTION</h2>
          <p>Handcrafted Sarees, Lehengas &amp; Bridal Attire</p>
          <div className="section-divider-line"></div>
        </div>

        {/* Category Filter Tabs */}
        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`category-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => {
                setSelectedCategory(cat.id);
                setVisibleCount(8);
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="products-grid">
          {displayedProducts.map((product) => {
            const inWishlist = isInWishlist(product.id);
            return (
              <div key={product.id} className="plp-card">
                <div className="plp-card-img-wrap">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="plp-card-img"
                  />

                  {product.badge && (
                    <span
                      className={`plp-badge ${
                        product.badge === 'EXCLUSIVE' ? 'badge-excl' : 'badge-new'
                      }`}
                    >
                      {product.badge}
                    </span>
                  )}

                  {/* Wishlist Button */}
                  <button
                    className={`plp-wishlist-btn ${inWishlist ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleWishlist(product);
                    }}
                    title={inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                    aria-label="Wishlist"
                  >
                    <Heart size={16} fill={inWishlist ? '#ff334b' : 'none'} />
                  </button>

                  {/* Quick View Button */}
                  <button
                    className="plp-quickview-btn"
                    onClick={() => setQuickViewProduct(product)}
                    aria-label="Quick View Product"
                  >
                    <Eye size={14} /> QUICK VIEW
                  </button>
                </div>

                <div className="plp-card-body">
                  <span className="plp-card-code">CODE: {product.code}</span>
                  <h3 className="plp-card-name" title={product.name}>
                    {product.name}
                  </h3>

                  <div className="plp-price-row">
                    <span className="plp-card-price">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    {product.originalPrice && (
                      <span className="plp-card-original-price">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>

                  <div className="plp-card-footer">
                    <span className="plp-collection-pill">
                      ROYAL COUTURE
                    </span>
                    <button
                      className="plp-cart-btn"
                      onClick={() => addToCart(product)}
                      title="Add to Shopping Bag"
                      aria-label="Add to Bag"
                    >
                      <ShoppingBag size={16} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Trigger */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          {hasMore ? (
            <button
              className="btn-outline-gold"
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              style={{ minWidth: '240px' }}
            >
              {isLoadingMore ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> LOADING ROYAL DESIGNS...
                </>
              ) : (
                <>
                  <Sparkles size={16} /> LOAD MORE CREATIONS
                </>
              )}
            </button>
          ) : (
            <p style={{
              fontFamily: 'var(--font-label)',
              fontSize: '0.85rem',
              color: 'var(--gold)',
              letterSpacing: '0.15em',
              fontWeight: 600,
              textShadow: '0 0 10px rgba(201,162,75,0.4)',
              margin: '1rem 0'
            }}>
              ✦ YOU HAVE EXPLORED ALL OUR ROYAL CREATIONS ✦
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
