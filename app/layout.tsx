import type { Metadata } from 'next';
import { Cinzel, Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ShopProvider } from '@/context/ShopContext';
import CartDrawer from '@/components/CartDrawer';
import WishlistDrawer from '@/components/WishlistDrawer';
import QuickViewModal from '@/components/QuickViewModal';
import ProcessModal from '@/components/ProcessModal';
import CertificateModal from '@/components/CertificateModal';
import ConsultationModal from '@/components/ConsultationModal';
import Toast from '@/components/Toast';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const cinzel = Cinzel({
  variable: '--font-label',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'RANISAHAB — Luxury Fashion for Every Woman | Sarees, Lehengas & Bridal Wear',
  description:
    'Explore RANISAHAB’s exclusive collection of pure Banarasi silk sarees, customized bridal lehengas, and royal wedding outfits. Handcrafted by master weavers.',
  keywords: [
    'RANISAHAB',
    'bridal sarees',
    'wedding lehenga',
    'Banarasi silk sarees',
    'designer suits',
    'luxury bridal wear',
    'Indian bridal house',
    'boutique clothing',
    'pure handloom',
    'zardozi couture'
  ],
  authors: [{ name: 'RANISAHAB Luxury Bridal House' }],
  openGraph: {
    title: 'RANISAHAB — Luxury Fashion for Every Woman',
    description: 'Pure Banarasi silk sarees, customized bridal lehengas, and royal wedding outfits.',
    url: 'https://ranisahab.com',
    siteName: 'RANISAHAB',
    images: [
      {
        url: 'https://ranisahab.com/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'RANISAHAB Luxury Bridal House',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: 'https://ranisahab.com/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable} ${plusJakarta.variable}`}>
      <body>
        <ShopProvider>
          {children}
          <CartDrawer />
          <WishlistDrawer />
          <QuickViewModal />
          <ProcessModal />
          <CertificateModal />
          <ConsultationModal />
          <Toast />
          <FloatingWhatsApp />
        </ShopProvider>
      </body>
    </html>
  );
}
