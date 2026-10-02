'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919131551183?text=Hi%20RANISAHAB%2C%20I%20have%20an%20enquiry%20regarding%20your%20couture%20collection."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-btn"
      aria-label="Chat with Rani Sahab Concierge on WhatsApp"
    >
      <MessageSquare size={26} />
      <span className="whatsapp-tooltip">ROYAL CONCIERGE CHAT</span>
    </a>
  );
}
