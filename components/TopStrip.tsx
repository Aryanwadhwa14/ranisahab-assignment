'use client';

import React from 'react';
import { Crown, Sparkles } from 'lucide-react';

export default function TopStrip() {
  return (
    <div className="top-strip">
      <div className="container">
        <span>
          <Crown size={14} style={{ color: 'var(--gold)' }} />
          FREE EXPRESS SHIPPING ABOVE ₹5,000 &nbsp;✦&nbsp; 100% PURE SILK &amp; HANDLOOM GUARANTEE &nbsp;✦&nbsp; MASTER WEAVERS GUILD
          <Sparkles size={13} style={{ color: 'var(--gold)' }} />
        </span>
      </div>
    </div>
  );
}
