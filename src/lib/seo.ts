// Structured data builders (JSON-LD) for AEO / SEO.
// Every node uses an @id anchored on the canonical origin so search engines
// and AI answer engines can resolve entities (Organization) consistently.

import { SITE_CONFIG, WHATSAPP_NUMBER } from '@/lib/constants';
import type { Agent } from '@/lib/agents';

export const SITE_URL = SITE_CONFIG.url;
export const ORG_NAME = 'Iteralab';
export const ORG_LEGAL_NAME = 'Iteralab SpA';
export const OG_IMAGE = `${SITE_URL}/opengraph-image`;

interface FAQEntry {
  question: string;
  answer: string;
}

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: ORG_NAME,
  legalName: ORG_LEGAL_NAME,
  url: SITE_URL,
  logo: OG_IMAGE,
  image: OG_IMAGE,
  description: SITE_CONFIG.description,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CL',
    addressRegion: 'Santiago',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    telephone: `+${WHATSAPP_NUMBER}`,
    url: `https://wa.me/${WHATSAPP_NUMBER}`,
    areaServed: 'CL',
    availableLanguage: 'Spanish',
  },
});

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: ORG_NAME,
  description: SITE_CONFIG.description,
  inLanguage: 'es-CL',
  publisher: { '@id': `${SITE_URL}/#organization` },
});

export const professionalServiceSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#professional-service`,
  name: ORG_NAME,
  description:
    'Desarrollo de agentes de IA para empresas: atención de clientes, procesamiento documental y coordinación de operaciones en Chile.',
  url: SITE_URL,
  image: OG_IMAGE,
  areaServed: { '@type': 'Country', name: 'Chile' },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CL',
    addressRegion: 'Santiago',
  },
  telephone: `+${WHATSAPP_NUMBER}`,
  priceRange: '$$',
});

export const breadcrumbSchema = (
  items: { name: string; path: string }[]
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});

export const faqSchema = (
  items: FAQEntry[],
  speakableSelector?: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  ...(speakableSelector
    ? { speakable: { '@type': 'SpeakableSpecification', cssSelector: [speakableSelector] } }
    : {}),
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
});

export const itemListSchema = (
  items: { name: string; description: string; path: string }[]
) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Service',
      name: item.name,
      description: item.description,
      url: `${SITE_URL}${item.path}`,
    },
  })),
});

export const serviceSchema = (params: {
  name: string;
  description: string;
  serviceType: string;
  path: string;
  keywords?: string[];
  category?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: params.name,
  description: params.description,
  url: `${SITE_URL}${params.path}`,
  serviceType: params.serviceType,
  ...(params.keywords?.length ? { keywords: params.keywords.join(', ') } : {}),
  ...(params.category ? { category: params.category } : {}),
  provider: { '@id': `${SITE_URL}/#organization` },
  areaServed: { '@type': 'Country', name: 'Chile' },
});

export const agentServiceSchema = (agent: Agent) =>
  serviceSchema({
    name: `${agent.name} — ${agent.role}`,
    description: agent.pitch,
    serviceType: agent.role,
    path: `/agentes/${agent.slug}`,
    keywords: [agent.tagline, agent.role],
    category: 'Agentes de IA',
  });