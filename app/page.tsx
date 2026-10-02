import TopStrip from '@/components/TopStrip';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import ShopByCategory from '@/components/ShopByCategory';
import PromiseSection from '@/components/PromiseSection';
import RoyalProducts from '@/components/RoyalProducts';
import BridalPackages from '@/components/BridalPackages';
import TrustStrip from '@/components/TrustStrip';
import RealBridesGallery from '@/components/RealBridesGallery';
import BlackFeaturesBar from '@/components/BlackFeaturesBar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 1. Announcement Bar */}
      <TopStrip />

      {/* 2. Regal Header & Navigation */}
      <Navbar />

      {/* 3. Hero Banner Carousel */}
      <HeroSlider />

      {/* 4. Shop by Category 4-Column Showcase */}
      <ShopByCategory />

      {/* 5. One Design, One Bride — Couture Promise & Certificate */}
      <PromiseSection />

      {/* 6. Royal Exclusive Product Collection with Filters & Quick View */}
      <RoyalProducts />

      {/* 7. Bridal Packages Carousel */}
      <BridalPackages />

      {/* 8. Trust Strip (Shipping, Safe Payment, Easy Returns, Fast Delivery) */}
      <TrustStrip />

      {/* 9. Real Brides Gallery & Adoring Client Reviews */}
      <RealBridesGallery />

      {/* 10. Brand Pillars (Premium Quality, Affordable Luxury, Concierge, Handloom) */}
      <BlackFeaturesBar />

      {/* 11. Luxury Royal Footer */}
      <Footer />
    </main>
  );
}
