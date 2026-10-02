'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, User, Heart, ShoppingBag, Menu, X, Phone, MessageSquare, Gem, Wand2, Shirt, Crown, Sparkles, Scissors, Image as ImageIcon, Info, BookOpen, Mail } from 'lucide-react';
import { useShop } from '@/context/ShopContext';
import MobileMenuDrawer from '@/components/MobileMenuDrawer';

export default function Navbar() {
  const { cartCount, wishlistCount, setIsCartOpen, setIsWishlistOpen } = useShop();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const productsEl = document.getElementById('products');
    if (productsEl) {
      productsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'HOME', href: '/', icon: <Sparkles size={16} /> },
    { label: 'SAREES', href: '#products', icon: <Gem size={16} /> },
    { label: 'LEHENGAS', href: '#products', icon: <Wand2 size={16} /> },
    { label: 'SUITS', href: '#products', icon: <Shirt size={16} /> },
    { label: 'BRIDAL WEAR', href: '#products', icon: <Crown size={16} /> },
    { label: 'BRIDAL PACKAGES', href: '#packages', icon: <Sparkles size={16} /> },
    { label: 'CUSTOM LEHENGA', href: '#promise', icon: <Scissors size={16} /> },
    { label: 'REAL BRIDES GALLERY', href: '#gallery', icon: <ImageIcon size={16} /> },
    { label: 'ABOUT US', href: '#about', icon: <Info size={16} /> },
    { label: 'CONTACT', href: '#footer', icon: <Mail size={16} /> },
  ];

  return (
    <header className="navbar-ranisahab">
      <div className="container header-three-col">
        {/* Left: Mobile Toggle & Desktop Search Bar */}
        <div className="header-col-left">
          <form onSubmit={handleSearchSubmit} className="header-search-bar" style={{ display: 'none' }}>
            <input
              type="text"
              placeholder="Search sarees, suits, lehengas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-icon" aria-label="Search">
              <Search size={15} />
            </button>
          </form>

          {/* Desktop Search Bar (shown on desktop) */}
          <div className="d-desktop-only">
            <form onSubmit={handleSearchSubmit} className="header-search-bar">
              <input
                type="text"
                placeholder="Search sarees, lehengas, suits..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="search-icon" aria-label="Search">
                <Search size={15} />
              </button>
            </form>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-nav-toggle d-mobile-only"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--gold-light)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-label)',
              fontSize: '0.72rem',
              cursor: 'pointer',
              letterSpacing: '0.1em'
            }}
          >
            <Menu size={20} />
            <span>MENU</span>
          </button>
        </div>

        {/* Center: Brand Logo */}
        <div className="header-col-center">
          <Link href="/" aria-label="Rani Sahab Homepage">
            <Image
              src="https://ranisahab.com/images/logo.png"
              alt="RANISAHAB — Luxury Fashion for Every Woman"
              width={220}
              height={75}
              priority
              className="brand-logo-img"
              style={{ objectFit: 'contain' }}
            />
          </Link>
        </div>

        {/* Right: Actions */}
        <div className="header-col-right">
          <div className="nav-actions">
            {/* Mobile Search Toggle */}
            <button
              className="d-mobile-only"
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              style={{ background: 'none', border: 'none', color: 'var(--gold-light)', cursor: 'pointer' }}
              aria-label="Open search"
            >
              <Search size={18} />
            </button>

            {/* Account */}
            <button
              className="action-btn"
              onClick={() => alert('Welcome to Rani Sahab Royal Customer Portal. Online reservations & client concierge active.')}
              aria-label="User Account"
            >
              <User size={18} />
              <span className="d-desktop-only">ACCOUNT</span>
            </button>

            {/* Wishlist */}
            <button
              className="action-btn"
              onClick={() => setIsWishlistOpen(true)}
              aria-label="View Wishlist"
            >
              <span style={{ position: 'relative', display: 'inline-flex' }}>
                <Heart size={18} />
                {wishlistCount > 0 && <span className="badge-cart">{wishlistCount}</span>}
              </span>
              <span className="d-desktop-only">WISHLIST</span>
            </button>

            {/* Bag */}
            <button
              className="action-btn"
              onClick={() => setIsCartOpen(true)}
              aria-label="View Shopping Bag"
            >
              <span style={{ position: 'relative', display: 'inline-flex' }}>
                <ShoppingBag size={18} />
                {cartCount > 0 && <span className="badge-cart">{cartCount}</span>}
              </span>
              <span className="d-desktop-only">BAG</span>
            </button>
          </div>
        </div>
      </div>

      {/* Expandable Mobile Search Bar */}
      {mobileSearchOpen && (
        <div className="mobile-search-expand container" style={{ padding: '0.6rem 1.25rem 0.8rem' }}>
          <form onSubmit={handleSearchSubmit} style={{ position: 'relative', width: '100%' }}>
            <input
              type="text"
              placeholder="Search royal sarees, lehengas, suits..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid var(--gold)',
                color: '#fff',
                padding: '0.55rem 2.5rem 0.55rem 1rem',
                borderRadius: '25px',
                fontSize: '0.82rem'
              }}
            />
            <button
              type="submit"
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                color: 'var(--gold)',
                cursor: 'pointer'
              }}
            >
              <Search size={16} />
            </button>
          </form>
        </div>
      )}

      {/* Primary Navigation Menu (Desktop) */}
      <nav className="nav-menu-bar-container d-desktop-only" aria-label="Main Navigation">
        <div className="container">
          <ul className="nav-ranisahab-menu">
            {navLinks.map((link, idx) => (
              <li key={idx} className="nav-item">
                <Link
                  href={link.href}
                  className={`nav-link ${link.label === 'HOME' ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Sliding Drawer Menu (Rendered via Portal to Document Body) */}
      <MobileMenuDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />

      <style jsx>{`
        @media (max-width: 991.98px) {
          .d-desktop-only {
            display: none !important;
          }
        }
        @media (min-width: 992px) {
          .d-mobile-only {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
