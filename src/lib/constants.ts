export const SITE_CONFIG = {
  name: 'Iteralab',
  description: 'Ingeniería de Software para Empresas',
  url: 'https://iteralab.cl',
} as const;

export const WHATSAPP_NUMBER = '56912345678';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Iteralab, quisiera una auditoría.')}`;

export const PRICING = {
  start: {
    name: 'Plan Start',
    tagline: 'Para Negocios que Inician',
    price: 29990,
    features: [
      'Landing page high-speed',
      'Diseño responsive premium',
      'Hosting incluido',
      'HTTPS grado bancario',
      'Soporte por email',
    ],
  },
  scale: {
    name: 'Plan Scale',
    tagline: 'Para Empresas en Crecimiento',
    price: 59990,
    popular: true,
    features: [
      'Todo en Plan Start',
      'Multi-página (hasta 10)',
      'Blog integrado',
      'Analítica avanzada',
      'Soporte prioritario',
      'Actualizaciones mensuales',
    ],
  },
} as const;

export const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
] as const;

export const FOOTER_LINKS = {
  servicios: [
    { label: 'Soluciones Web', href: '#servicios' },
    { label: 'Consultoría IA', href: '#', badge: 'Coming Soon' },
    { label: 'Auditoría de Seguridad', href: '#' },
  ],
  empresa: [
    { label: 'Sobre Nosotros', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contacto', href: '#contacto' },
  ],
} as const;
