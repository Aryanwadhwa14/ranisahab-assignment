export interface Product {
  id: number;
  code: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'sarees' | 'lehengas' | 'suits' | 'bridal' | 'kurtis';
  badge?: 'NEW ARRIVAL' | 'EXCLUSIVE' | 'TRENDING' | 'BESTSELLER' | 'FESTIVE' | 'HANDCRAFTED' | 'PURE SILK' | 'POPULAR';
  fabric: string;
  color: string;
  work: string;
  description: string;
}

export interface BridalPackage {
  id: string;
  title: string;
  price: number;
  image: string;
  popular?: boolean;
  features: string[];
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  city: string;
  outfit: string;
  rating: number;
}

export const HERO_SLIDES = [
  {
    id: 1,
    tag: "ROYAL BANARASI HERITAGE",
    title: "PURE BANARASI SILK & HANDLOOM SAREES",
    subtitle: "Woven by 5th Generation Master Weavers of Varanasi",
    image: "https://ranisahab.com/uploads/banners/1789115259_6aa3bb7b33668.jpg",
    link: "#products",
    linkText: "EXPLORE SAREES",
    secondaryLink: "#packages",
    secondaryText: "BRIDAL PACKAGES"
  },
  {
    id: 2,
    tag: "COUTURE BRIDAL EXCLUSIVITY",
    title: "ONE DESIGN, ONE BRIDE",
    subtitle: "Never Recreated. Forever Yours. With Certificate of Authenticity",
    image: "https://ranisahab.com/uploads/banners/1789898940_6aafb0bc247f2.jpg",
    link: "#promise",
    linkText: "DISCOVER THE PROMISE",
    secondaryLink: "#packages",
    secondaryText: "BOOK BRIDAL CONSULTATION"
  },
  {
    id: 3,
    tag: "ROYAL CELEBRATIONS",
    title: "REGAL ANARKALIS & VELVET ENSEMBLES",
    subtitle: "Intricate Zardozi & Hand Katdana Embroidery for Grand Occasions",
    image: "https://ranisahab.com/images/slider_banner_3.png",
    link: "#products",
    linkText: "SHOP DESIGNER SUITS",
    secondaryLink: "#gallery",
    secondaryText: "VIEW REAL BRIDES"
  }
];

export const CATEGORIES = [
  {
    number: "01",
    id: "sarees",
    title: "SAREES",
    description: "Silks · Georgettes · Banarasi",
    image: "https://ranisahab.com/uploads/categories/1789095238_6aa36d466ce2c.jpg",
    count: "48 Designs"
  },
  {
    number: "02",
    id: "suits",
    title: "SUITS",
    description: "Anarkalis · Salwar · Palazzo",
    image: "https://ranisahab.com/uploads/categories/1789095290_6aa36d7a6a0f5.jpg",
    count: "36 Ensembles"
  },
  {
    number: "03",
    id: "lehengas",
    title: "LEHENGAS",
    description: "Bridal · Party · Festive",
    image: "https://ranisahab.com/images/cat_lehenga.png",
    count: "24 Creations"
  },
  {
    number: "04",
    id: "bridal",
    title: "BRIDAL COLLECTION",
    description: "One Design · One Bride · Forever",
    image: "https://ranisahab.com/images/cat_bridal.png",
    count: "Exclusive Bespoke",
    featured: true
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 55,
    code: "RS-PRD-55",
    name: "RaniSahab Royal Zari & Sequin Star Georgette Lehenga Choli",
    price: 4999,
    originalPrice: 8999,
    image: "https://ranisahab.com/uploads/products/1790073094_6ab2590643044.jpg",
    category: "lehengas",
    badge: "NEW ARRIVAL",
    fabric: "Pure Georgette with Satin Lining",
    color: "Imperial Maroon & Gold",
    work: "Intricate Zari with Sequin Star Spray",
    description: "A showstopping bridal ensemble with dense zari borders, hand-finished tassels, and matching embroidered blouse piece with soft tulle dupatta."
  },
  {
    id: 54,
    code: "RS-PRD-54",
    name: "Rangrez Kediya Mirror Work Palazzo SET by RaniSahab",
    price: 2499,
    originalPrice: 4299,
    image: "https://ranisahab.com/uploads/products/1790050410_6ab2006aa55df.jpg",
    category: "suits",
    badge: "NEW ARRIVAL",
    fabric: "Pure Cotton Slub",
    color: "Multi-Color Royal Festive",
    work: "Authentic Kutch Hand Mirror Work",
    description: "Traditional Gujarati flared kediya top accented with real mirror embroidery, styled with contemporary flared palazzo pants and latkan tassels."
  },
  {
    id: 53,
    code: "RS-PRD-53",
    name: "Rani Glow Pure Fox Georgette Embroidery Gown Set",
    price: 2999,
    originalPrice: 5499,
    image: "https://ranisahab.com/uploads/products/1790049199_6ab1fbaf37d44.jpg",
    category: "suits",
    badge: "TRENDING",
    fabric: "Premium Fox Georgette",
    color: "Wine Burgundy",
    work: "Resham Thread & Light Sequin Detailing",
    description: "Elegantly flowing floor-length evening gown featuring intricate neckline zardozi work and a lightweight coordinating dupatta for reception soirees."
  },
  {
    id: 52,
    code: "RS-PRD-52",
    name: "Premium Taby Silk Mirror Work Lehenga by RaniSahab",
    price: 4499,
    originalPrice: 7999,
    image: "https://ranisahab.com/uploads/products/1790043926_6ab1e7161ba32.jpg",
    category: "lehengas",
    badge: "EXCLUSIVE",
    fabric: "Taby Silk with Cancan",
    color: "Emerald Forest Green",
    work: "Heavy Mirror Embellishment with Zari Border",
    description: "An opulent Taby Silk creation radiating royalty with dense mirror work along the lehenga ghera, paired with an embroidered artisan choli."
  },
  {
    id: 51,
    code: "RS-PRD-51",
    name: "“Noor-e-Chanderi” Designer Saree by RANISAHAB",
    price: 2999,
    originalPrice: 5199,
    image: "https://ranisahab.com/uploads/products/1789896037_6aafa565d0478.jpg",
    category: "sarees",
    badge: "NEW ARRIVAL",
    fabric: "Handwoven Chanderi Silk",
    color: "Royal Ivory Gold",
    work: "Gold Foil Motif with Meenakari Weave",
    description: "Crafted with lightweight handspun Chanderi silk yarn, boasting delicate temple zari borders and a regal contrasting unstitched blouse fabric."
  },
  {
    id: 50,
    code: "RS-PRD-50",
    name: "Navratri Celebration Kora Cotton Embroidered Lehenga Set",
    price: 4999,
    originalPrice: 8499,
    image: "https://ranisahab.com/uploads/products/1789895203_6aafa22383fbd.jpg",
    category: "lehengas",
    badge: "FESTIVE",
    fabric: "Kora Cotton with Handloom Border",
    color: "Mustard Gold & Ruby",
    work: "Embroidered Bootis & Threadwork",
    description: "Spun from breathable organic kora cotton with vivid thread embroidery, designed for joyous festive dances and traditional celebrations."
  },
  {
    id: 49,
    code: "RS-PRD-49",
    name: "RaniSahab Floral Katdana Handwork Designer Saree",
    price: 4999,
    originalPrice: 9999,
    image: "https://ranisahab.com/uploads/products/1789809923_6aae5503a1e25.jpg",
    category: "sarees",
    badge: "HANDCRAFTED",
    fabric: "Organza Silk",
    color: "Blush Peach Champagne",
    work: "Hand Cutdana & Sequin Floral Jaal",
    description: "Sheer organza drape shimmering with 120 hours of manual cutdana beadwork by master artisans, finished with scalloped border borders."
  },
  {
    id: 48,
    code: "RS-PRD-48",
    name: "Trending Designer Fox Georgette Top Sharara with Dupatta",
    price: 3999,
    originalPrice: 6999,
    image: "https://ranisahab.com/uploads/products/1789269012_6aa614141ba61.jpg",
    category: "suits",
    badge: "NEW ARRIVAL",
    fabric: "Pure Fox Georgette",
    color: "Royal Teal Blue",
    work: "Heavy Zari Gotta Work on Flared Sharara",
    description: "A regal sharara silhouette designed with tiered flare, ornate gottapatti borders, and a matching kurta adorned with floral needlework."
  },
  {
    id: 44,
    code: "RS-PRD-44",
    name: "Rani Mahal Pure Soft Erode Gold Tissue Saree with Tassels",
    price: 1999,
    originalPrice: 3899,
    image: "https://ranisahab.com/uploads/products/1789035531_6aa2840b94ffc.jpg",
    category: "sarees",
    badge: "PURE SILK",
    fabric: "Tissue Silk",
    color: "Metallic Liquid Gold",
    work: "Gold Weave with Handcrafted Pallu Tassels",
    description: "Lustrous liquid gold tissue saree woven with pure metallic fibers, offering an ultra-lightweight drape and an opulent royal sheen."
  },
  {
    id: 43,
    code: "RS-PRD-43",
    name: "Rani Mahal Premium Linen Cotton Floral Digital Print Saree",
    price: 1999,
    originalPrice: 3499,
    image: "https://ranisahab.com/uploads/products/1789035531_6aa2840b94ffc.jpg",
    category: "sarees",
    badge: "BESTSELLER",
    fabric: "Organic Linen Cotton",
    color: "Pastel Lavender Floral",
    work: "High-Definition Digital Floral Artwork",
    description: "Natural organic linen blended with soft combed cotton, offering unmatched breathability with subtle zari temple piping along edges."
  },
  {
    id: 42,
    code: "RS-PRD-42",
    name: "Designer Natural Silk Embroidered Palazzo With Kundan Dupatta",
    price: 2999,
    originalPrice: 5999,
    image: "https://ranisahab.com/uploads/products/1788879909_6aa02425a04e9.jpg",
    category: "suits",
    badge: "EXCLUSIVE",
    fabric: "Natural Raw Silk & Organza",
    color: "Deep Plum Velvet",
    work: "Kundan Inlay & Sequence Embroidery",
    description: "Exquisite raw silk ensemble accompanied by a sheer organza dupatta framed with hand-embroidered kundan stone work."
  },
  {
    id: 40,
    code: "RS-PRD-40",
    name: "Designer Sequence Embroidered Crunchy Top Palazzo Set",
    price: 2999,
    originalPrice: 5499,
    image: "https://ranisahab.com/uploads/products/1788879091_6aa020f3b1576.jpg",
    category: "suits",
    badge: "POPULAR",
    fabric: "Crunchy Silk Georgette",
    color: "Ruby Red",
    work: "Dense Tone-on-Tone Sequin Work",
    description: "Glamorous party-ready coordinates with micro-sequin motifs, flared comfortable palazzo, and handcrafted neckline highlights."
  }
];

export const BRIDAL_PACKAGES: BridalPackage[] = [
  {
    id: "rani-package",
    title: "RANI PACKAGE",
    price: 29999,
    image: "https://ranisahab.com/images/pkg_silver.png",
    popular: false,
    features: [
      "Luxury Bridal Makeup by Senior Stylists",
      "Premium International HD Finish",
      "Professional Haute Hairstyling & Extensions",
      "Saree / Lehenga Royal Draping",
      "Premium Mink False Lashes",
      "Bridal Jewellery Setting & Pinning",
      "Hair Accessories Placement",
      "Complete Skin Preparation & Hydration",
      "Bridal Touch-Up Kit for Wedding Day"
    ]
  },
  {
    id: "qween-package",
    title: "RANISAHAB QWEEN PACKAGE",
    price: 79999,
    image: "https://ranisahab.com/images/pkg_royal.png",
    popular: true,
    features: [
      "Custom-Made Couture Bridal Lehenga (Included)",
      "HD Airbrush Waterproof Bridal Makeup",
      "Waterproof & 16-Hour Sweatproof Finish",
      "Professional Hair Couture & Real Flower Setting",
      "Premium Korean Contact Lenses",
      "Royal Bridal Jewellery Consultation & Draping",
      "1 Haldi Handloom Saree GIFT (100% FREE)",
      "Premium Handcrafted Chudi Set",
      "RaniSahab Official Physical Authenticity Certificate",
      "Luxury Bridal Gift Hamper & Keepsake Box",
      "Dedicated RaniSahab Personal Bridal Valet & Team"
    ]
  },
  {
    id: "maharani-package",
    title: "MAHARANI PACKAGE",
    price: 49999,
    image: "https://ranisahab.com/images/pkg_silver.png",
    popular: false,
    features: [
      "HD Bridal Makeup with Diamond Glow Finish",
      "Waterproof, Tear-Proof & Long-Lasting",
      "Professional Designer Hairstyling",
      "Double Dupatta & Lehenga Royal Draping",
      "Premium Weightless False Lashes",
      "Bridal Jewellery Placement & Mathapatti Setting",
      "Deluxe Skin Prep & Facial Sculpting",
      "Emergency Touch-Up Kit for the Bride",
      "1 Haldi Saree FREE with Purchase",
      "RaniSahab Certified Authenticity Card"
    ]
  }
];

export const REAL_BRIDES = [
  {
    id: 1,
    image: "https://ranisahab.com/images/hero_bride.png",
    bride: "Rhea Singhania",
    city: "Udaipur Royal Palace Wedding",
    outfit: "Custom Crimson Zardozi Lehenga"
  },
  {
    id: 2,
    image: "https://ranisahab.com/images/promise_bride.png",
    bride: "Dr. Ananya Mathur",
    city: "Jaipur Heritage Fort",
    outfit: "One Design, One Bride Bespoke Creation"
  },
  {
    id: 3,
    image: "https://ranisahab.com/images/cat_bridal.png",
    bride: "Pooja Vashishta",
    city: "New Delhi Vivanta Soiree",
    outfit: "Pure Banarasi Kadhwa Bridal Saree"
  },
  {
    id: 4,
    image: "https://ranisahab.com/images/cat_lehenga.png",
    bride: "Meera Agarwal",
    city: "Jodhpur Destination Wedding",
    outfit: "Emerald & Gold Mirror Work Couture"
  },
  {
    id: 5,
    image: "https://ranisahab.com/images/pkg_royal.png",
    bride: "Simran Kohli",
    city: "Chandigarh Grand Reception",
    outfit: "Ranisahab Qween Package Ensemble"
  },
  {
    id: 6,
    image: "https://ranisahab.com/images/cat_saree.png",
    bride: "Kavita Reddy",
    city: "Hyderabad Royal Gala",
    outfit: "Pure Kanjivaram Gold Zari Saree"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "RANISAHAB made my dream wedding outfit come true! The quality, the design, everything was beyond perfection. Knowing no other bride will ever wear my sketch gave me absolute chills. I felt like a true queen on my big day.",
    author: "Neha Sharma",
    city: "Mumbai",
    outfit: "Bespoke Bridal Lehenga",
    rating: 5
  },
  {
    id: 2,
    quote: "The handloom Banarasi silk drape was so soft, royal, and lightweight. The gold zari has that pure antique glow you only see in heirloom pieces. Delivered within 3 days to Bengaluru with impeccable packing!",
    author: "Dr. Suniti Rao",
    city: "Bengaluru",
    outfit: "Pure Banarasi Silk Saree",
    rating: 5
  },
  {
    id: 3,
    quote: "Booked the Qween Bridal Package for my sister. The team took care of every single minute detail from jewelry styling to draping. It was an unforgettable royal experience.",
    author: "Priyanka Deshmukh",
    city: "Pune",
    outfit: "Qween Package Experience",
    rating: 5
  }
];

export const TRUST_BADGES = [
  {
    icon: "Truck",
    title: "FREE SHIPPING",
    subtitle: "ALL OVER INDIA"
  },
  {
    icon: "ShieldCheck",
    title: "SECURE PAYMENT",
    subtitle: "100% SAFE & ENCRYPTED"
  },
  {
    icon: "RotateCcw",
    title: "EASY RETURNS",
    subtitle: "NO QUESTIONS ASKED"
  },
  {
    icon: "Clock",
    title: "ON TIME DELIVERY",
    subtitle: "5-7 DAYS EXPRESS"
  }
];

export const BLACK_FEATURES = [
  {
    icon: "Gem",
    title: "PREMIUM QUALITY",
    desc: "You Deserve The Best"
  },
  {
    icon: "Tag",
    title: "AFFORDABLE LUXURY",
    desc: "Direct From Master Weavers"
  },
  {
    icon: "Headphones",
    title: "CONCIERGE SUPPORT",
    desc: "We Are Always Here For You"
  },
  {
    icon: "Sparkles",
    title: "100% HANDLOOM",
    desc: "Authentic Silk Mark Verified"
  }
];
