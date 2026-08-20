// llms.txt generation for AI crawlers (Perplexity, ChatGPT, Gemini, etc.).
// Keeps a machine-readable summary of the site in sync with the real content.

import { SITE_URL, ORG_NAME } from '@/lib/seo';
import { AGENTS } from '@/lib/agents';
import { FAQ_ITEMS } from '@/lib/faq';

const SUMMARY =
  'Iteralab es una empresa chilena que desarrolla agentes de IA de producción para empresas: atención de clientes, procesamiento documental y coordinación de operaciones, conectados a ERP, WhatsApp y APIs.';

const CONTACT = `Contacto:
- Web: ${SITE_URL}
- Agendar diagnóstico: ${SITE_URL}/agendar
- WhatsApp: https://wa.me/56912345678`;

const SERVICES: { title: string; url: string; summary: string }[] = [
  {
    title: 'Agentes de IA',
    url: '/servicios/ia',
    summary:
      'Agentes de IA que atienden clientes, procesan documentos y coordinan operaciones 24/7.',
  },
  {
    title: 'Integraciones y APIs',
    url: '/servicios/integraciones',
    summary: 'Conexión de ERP, CRM y flujos de datos para eliminar procesos manuales.',
  },
  {
    title: 'Software a Medida',
    url: '/servicios/software-a-medida',
    summary: 'Plataformas internas y portales corporativos a medida.',
  },
  {
    title: 'Consultoría Técnica',
    url: '/servicios/consultoria',
    summary: 'Auditoría de código, arquitectura cloud y seguridad.',
  },
  {
    title: 'Modernización Web',
    url: '/servicios/modernizacion-web',
    summary: 'Renovación y diseño web estratégico de alto rendimiento.',
  },
];

function agentSection(agent: (typeof AGENTS)[number]) {
  const lines = [
    `## ${agent.name} — ${agent.role}`,
    '',
    `${agent.pitch}`,
    '',
    `Tagline: ${agent.tagline}`,
    '',
    'Capacidades:',
    ...agent.capabilities.map((c) => `- ${c.title}: ${c.description}`),
    '',
    'Cómo funciona:',
    ...agent.howItWorks.map((s) => `- ${s.title}: ${s.description}`),
    '',
    `Integraciones: ${agent.integrations.join(', ')}`,
    '',
  ];
  return lines.join('\n');
}

function faqSection() {
  const lines = ['## Preguntas frecuentes', ''];
  for (const item of FAQ_ITEMS) {
    lines.push(`### ${item.question}`, '', item.answer, '');
  }
  return lines.join('\n');
}

export function llmsTxt(): string {
  const lines = [
    `# ${ORG_NAME}`,
    '',
    `> ${SUMMARY}`,
    '',
    '## Qué hace Iteralab',
    '',
    'Iteralab diseña, construye e integra agentes de IA para procesos reales de empresas en Chile. Los agentes se conectan a los sistemas que la empresa ya usa (ERP, CRM, WhatsApp, correo) y operan con arquitectura privada: los datos del cliente no se usan para entrenar modelos de terceros.',
    '',
    'Productos (agentes):',
    ...AGENTS.map(
      (agent) =>
        `- [${agent.name} — ${agent.role}](${SITE_URL}/agentes/${agent.slug}): ${agent.tagline}`
    ),
    '',
    'Servicios:',
    ...SERVICES.map(
      (service) => `- [${service.title}](${SITE_URL}${service.url}): ${service.summary}`
    ),
    '',
    'Páginas clave:',
    `- [Inicio](${SITE_URL}): ${SUMMARY}`,
    `- [Agentes](${SITE_URL}/agentes): Los cuatro agentes de IA de Iteralab: Vera, Atlas, Lector y Oráculo.`,
    `- [Agendar diagnóstico](${SITE_URL}/agendar): Consultoría gratuita para evaluar un proceso a automatizar.`,
    '',
    CONTACT,
    '',
  ];
  return lines.join('\n');
}

export function llmsFullTxt(): string {
  const lines = [
    `# ${ORG_NAME} — Documento completo`,
    '',
    `> ${SUMMARY}`,
    '',
    ...AGENTS.flatMap((agent) => {
      const section = agentSection(agent);
      const faq = agent.faq
        .map((f) => `### ${f.question}\n\n${f.answer}`)
        .join('\n\n');
      return [section, `FAQ ${agent.name}:\n\n${faq}`, '---', ''];
    }),
    faqSection(),
    '## Servicios',
    '',
    ...SERVICES.map((service) => `- ${service.title} (${SITE_URL}${service.url}): ${service.summary}`),
    '',
    CONTACT,
    '',
  ];
  return lines.join('\n');
}