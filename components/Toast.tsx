'use client';

import React from 'react';
import { Crown } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

export default function Toast() {
  const { toast } = useShop();

  if (!toast) return null;

  return (
    <div className={`royal-toast ${toast.visible ? 'show' : ''}`} role="alert">
      <Crown size={18} />
      <span>{toast.message}</span>
    </div>
  );
}
