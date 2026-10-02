'use client';

import React from 'react';
import { Truck, ShieldCheck, RotateCcw, Clock } from 'lucide-react';

export default function TrustStrip() {
  const trustItems = [
    {
      icon: <Truck size={22} />,
      title: 'FREE SHIPPING',
      subtitle: 'ALL OVER INDIA'
    },
    {
      icon: <ShieldCheck size={22} />,
      title: 'SECURE PAYMENT',
      subtitle: '100% SAFE & ENCRYPTED'
    },
    {
      icon: <RotateCcw size={22} />,
      title: 'EASY RETURNS',
      subtitle: 'NO QUESTIONS ASKED'
    },
    {
      icon: <Clock size={22} />,
      title: 'ON TIME DELIVERY',
      subtitle: '5-7 DAYS EXPRESS'
    }
  ];

  return (
    <div className="trust-strip-banner">
      <div className="container">
        <div className="trust-grid">
          {trustItems.map((item, idx) => (
            <div key={idx} className="trust-item-col">
              <div className="trust-icon-bubble">
                {item.icon}
              </div>
              <div className="trust-text-block">
                <span className="trust-title">{item.title}</span>
                <span className="trust-sub">{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
