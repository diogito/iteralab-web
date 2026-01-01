'use client';

import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '@/lib/constants';

export function WhatsAppFloat() {
  const baseStyles = `
    fixed bottom-6 right-6 z-50
    bg-emerald-500 hover:bg-emerald-600
    shadow-lg shadow-emerald-500/30
    transition-all duration-300
    hover:scale-105
    focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-zinc-950
  `;

  return (
    <>
      {/* Mobile: Burbuja pequeña con solo icono */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hablar con un Ingeniero por WhatsApp"
        className={`
          ${baseStyles}
          flex md:hidden
          items-center justify-center
          w-12 h-12 rounded-full
        `}
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>

      {/* Desktop: Botón completo con texto */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hablar con un Ingeniero por WhatsApp"
        className={`
          ${baseStyles}
          hidden md:flex
          items-center gap-3
          pl-4 pr-5 py-3 rounded-full
        `}
      >
        <MessageCircle className="w-5 h-5 text-white" />
        <span className="text-white font-medium text-sm">
          Hablar con un Ingeniero
        </span>
      </a>
    </>
  );
}
