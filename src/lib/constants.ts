import { AGENTS } from '@/lib/agents';

export const SITE_CONFIG = {
  name: 'Iteralab',
  description: 'Desarrollo de agentes de IA para empresas',
  url: 'https://iteralab.cl',
} as const;

export const WHATSAPP_NUMBER = '56912345678';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Iteralab, quiero automatizar procesos de mi empresa con agentes de IA.')}`;

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
  { label: 'Agentes', href: '/agentes' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Industrias', href: '/#industrias' },
  { label: 'Proceso', href: '/#proceso' },
  { label: 'FAQ', href: '/#faq' },
] as const;

export const FOOTER_LINKS = {
  agentes: AGENTS.map((agent) => ({
    label: `${agent.name} — ${agent.role}`,
    href: `/agentes/${agent.slug}`,
  })),
  servicios: [
    { label: 'Agentes de IA', href: '/servicios/ia' },
    { label: 'Integraciones y APIs', href: '/servicios/integraciones' },
    { label: 'Software a Medida', href: '/servicios/software-a-medida' },
    { label: 'Consultoría Técnica', href: '/servicios/consultoria' },
    { label: 'Modernización Web', href: '/servicios/modernizacion-web' },
  ],
  industrias: [
    { label: 'Minería y faenas', href: '/#industrias' },
    { label: 'Agricultura y agroindustria', href: '/#industrias' },
    { label: 'Construcción y obras', href: '/#industrias' },
    { label: 'Logística y transporte', href: '/#industrias' },
    { label: 'Retail y e-commerce', href: '/#industrias' },
    { label: 'Salud y clínicas', href: '/#industrias' },
    { label: 'Inmobiliario', href: '/#industrias' },
    { label: 'Finanzas y contabilidad', href: '/#industrias' },
  ],
  empresa: [
    { label: 'Sobre Nosotros', href: '/#inicio' },
    { label: 'Agendar Diagnóstico', href: '/agendar' },
    { label: 'Contacto', href: '/#faq' },
  ],
} as const;
