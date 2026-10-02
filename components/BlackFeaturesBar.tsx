'use client';

import React from 'react';
import { Gem, Tag, Headphones, Sparkles } from 'lucide-react';

export default function BlackFeaturesBar() {
  const features = [
    {
      icon: <Gem size={22} />,
      title: 'PREMIUM QUALITY',
      desc: 'You Deserve The Best'
    },
    {
      icon: <Tag size={22} />,
      title: 'AFFORDABLE LUXURY',
      desc: 'Direct From Master Weavers'
    },
    {
      icon: <Headphones size={22} />,
      title: 'CUSTOMER SUPPORT',
      desc: 'Dedicated Bridal Concierge'
    },
    {
      icon: <Sparkles size={22} />,
      title: '100% HANDLOOM',
      desc: 'Silk Mark Certified Weaves'
    }
  ];

  return (
    <div className="black-features-bar">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2rem'
        }}>
          {features.map((feat, idx) => (
            <div key={idx} className="feature-pill-item">
              <div className="feature-pill-icon">
                {feat.icon}
              </div>
              <div>
                <h6>{feat.title}</h6>
                <p>{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
