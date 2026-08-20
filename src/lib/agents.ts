// Product catalog: Iteralab's four production AI agents.
// Copy is Spanish (es_CL); identifiers and comments stay in English.

export type AgentAccent = 'indigo' | 'violet' | 'cyan' | 'emerald';

export type AgentIconKey = 'headset' | 'workflow' | 'scanline' | 'brain';

export interface AgentCapability {
  title: string;
  description: string;
}

export interface AgentStep {
  title: string;
  description: string;
}

export interface AgentIdealFor {
  industry: string;
  example: string;
}

export interface Agent {
  slug: string;
  name: string;
  role: string;
  iconKey: AgentIconKey;
  tagline: string;
  pitch: string;
  capabilities: AgentCapability[];
  howItWorks: AgentStep[];
  integrations: string[];
  idealFor: AgentIdealFor[];
  deliverables: string[];
  accent: AgentAccent;
}

export const AGENTS: Agent[] = [
  {
    slug: 'vera',
    name: 'Vera',
    role: 'Agente Comercial',
    iconKey: 'headset',
    tagline: 'Atiende, califica y agenda mientras tu equipo vende.',
    pitch:
      'Vera responde tu WhatsApp y tu web al instante, califica leads con tus criterios y agenda reuniones directo en tu calendario o CRM. Ningún prospecto se enfría por falta de respuesta.',
    capabilities: [
      {
        title: 'Atención multicanal 24/7',
        description:
          'Responde en WhatsApp Business y en tu web al instante, a cualquier hora.',
      },
      {
        title: 'Calificación de leads',
        description:
          'Aplica los criterios de tu negocio para priorizar los prospectos que sí importan.',
      },
      {
        title: 'Agendamiento sincronizado',
        description:
          'Reuniones directo en tu calendario o CRM, sin correos de ida y vuelta.',
      },
      {
        title: 'Seguimiento automático',
        description:
          'Retoma la conversación con prospectos que no respondieron.',
      },
      {
        title: 'Resumen comercial diario',
        description:
          'Tu equipo parte el día con leads, citas y oportunidades en un solo reporte.',
      },
    ],
    howItWorks: [
      {
        title: 'Recibe',
        description: 'La consulta entra por WhatsApp o por tu web, a cualquier hora.',
      },
      {
        title: 'Razona',
        description: 'Califica con tus criterios y resuelve dudas con tu información.',
      },
      {
        title: 'Actúa',
        description:
          'Agenda, registra en el CRM o transfiere a un humano cuando corresponde.',
      },
      {
        title: 'Reporta',
        description: 'Resumen diario de leads, citas y oportunidades para tu equipo.',
      },
    ],
    integrations: [
      'WhatsApp Business API',
      'CRM (HubSpot, Salesforce o planillas)',
      'Google Calendar / Outlook',
      'APIs internas',
    ],
    idealFor: [
      {
        industry: 'Inmobiliario',
        example: 'Agendamiento de visitas y calificación de leads.',
      },
      {
        industry: 'Salud',
        example: 'Citas, confirmaciones y recordatorios.',
      },
      {
        industry: 'Retail',
        example: 'Pedidos, postventa y consultas de catálogo.',
      },
    ],
    deliverables: [
      'Agente configurado con tu tono y criterios',
      'Canales conectados (WhatsApp/web)',
      'Panel de criterios de calificación',
      'Traspaso a humano definido',
      'Bitácora y métricas comerciales',
    ],
    accent: 'violet',
  },
  {
    slug: 'atlas',
    name: 'Atlas',
    role: 'Agente de Operaciones',
    iconKey: 'workflow',
    tagline: 'Coordina tu faena sin perseguir a nadie.',
    pitch:
      'Atlas coordina turnos, cuadrillas, terrenos y bodegas; consolida la información de terreno y genera los reportes de turno solo. Tu operación avanza aunque nadie esté mirando.',
    capabilities: [
      {
        title: 'Gestión de turnos y cuadrillas',
        description:
          'Asigna y confirma turnos y cuadrillas sin perseguir a nadie por teléfono.',
      },
      {
        title: 'Reportes automáticos',
        description:
          'Reportes de turno y parte diario generados sin intervención.',
      },
      {
        title: 'Alertas operativas',
        description:
          'Retrasos, incidentes y quiebres de stock notificados a tiempo.',
      },
      {
        title: 'Coordinación de contratistas',
        description:
          'Contratistas y subcontratos coordinados en un solo canal.',
      },
      {
        title: 'Historial operativo',
        description: 'Todo lo ocurrido en terreno, consultable desde el chat.',
      },
    ],
    howItWorks: [
      {
        title: 'Recibe',
        description: 'Eventos de terreno por WhatsApp o formularios.',
      },
      {
        title: 'Valida',
        description: 'Registra cada evento contra tus reglas de operación.',
      },
      {
        title: 'Actúa',
        description: 'Notifica, reasigna o escala lo crítico a un responsable.',
      },
      {
        title: 'Reporta',
        description: 'Parte diario y KPIs de operación, sin intervención.',
      },
    ],
    integrations: ['WhatsApp', 'ERP y planillas', 'Formularios internos', 'Correo'],
    idealFor: [
      {
        industry: 'Minería y faenas',
        example: 'Reportes de turno y contratistas.',
      },
      {
        industry: 'Construcción',
        example: 'Libro de obra y subcontratos.',
      },
      {
        industry: 'Agricultura',
        example: 'Cuadrillas de cosecha y terrenos.',
      },
    ],
    deliverables: [
      'Agente conectado a tus canales de operación',
      'Reglas de escalamiento definidas',
      'Reportes automáticos (turno/diario/semanal)',
      'Tablero de alertas',
      'Capacitación del equipo en terreno',
    ],
    accent: 'indigo',
  },
  {
    slug: 'lector',
    name: 'Lector',
    role: 'Agente Documental',
    iconKey: 'scanline',
    tagline: 'De la foto o el PDF al ERP, sin digitación manual.',
    pitch:
      'Lector extrae datos de guías de despacho, facturas, contratos y manifiestos con OCR + modelos de lenguaje, los valida contra tus reglas y los inyecta en tu ERP. Adiós al error de dedo.',
    capabilities: [
      {
        title: 'Extracción OCR + LLM',
        description:
          'Lee guías de despacho, facturas, contratos y manifiestos.',
      },
      {
        title: 'Validación con reglas de negocio',
        description:
          'Montos, RUT y folios verificados antes de entrar al sistema.',
      },
      {
        title: 'Inyección directa',
        description:
          'Los datos entran a tu ERP o planillas sin digitación manual.',
      },
      {
        title: 'Gestión de excepciones',
        description: 'Lo dudoso va a revisión humana, nunca directo al sistema.',
      },
      {
        title: 'Trazabilidad total',
        description:
          'Cada documento procesado queda con su bitácora auditable.',
      },
    ],
    howItWorks: [
      {
        title: 'Recibe',
        description: 'El documento llega por correo, WhatsApp o carpeta.',
      },
      {
        title: 'Procesa',
        description: 'OCR + extracción estructurada, con confianza por campo.',
      },
      {
        title: 'Actúa',
        description: 'Registra en el ERP o marca la excepción para revisión.',
      },
      {
        title: 'Reporta',
        description: 'Volúmenes, tasas de error y tiempos de ciclo.',
      },
    ],
    integrations: [
      'ERP (o acceso a su base de datos)',
      'Correo',
      'Carpetas/S3',
      'Gestores documentales',
    ],
    idealFor: [
      {
        industry: 'Logística y transporte',
        example: 'Guías y manifiestos.',
      },
      {
        industry: 'Finanzas y contabilidad',
        example: 'Facturas y rendiciones.',
      },
      {
        industry: 'Agricultura',
        example: 'Documentación de exportación.',
      },
    ],
    deliverables: [
      'Pipeline documental operativo',
      'Reglas de validación de tu negocio',
      'Conexión ERP con manejo de excepciones',
      'Bitácora auditable por documento',
      'Métricas de precisión y ciclo',
    ],
    accent: 'cyan',
  },
  {
    slug: 'oraculo',
    name: 'Oráculo',
    role: 'Agente de Conocimiento',
    iconKey: 'brain',
    tagline: 'Toda tu empresa, respondida en segundos.',
    pitch:
      'Oráculo convierte tus manuales, procedimientos, políticas y catálogos en un chat privado con fuentes citadas. Onboarding, soporte interno y cumplimiento sin depender de quien "se sabe todo".',
    capabilities: [
      {
        title: 'RAG privado',
        description:
          'Busca en tus documentos y procedimientos, dentro de tu infraestructura.',
      },
      {
        title: 'Respuestas con fuente',
        description: 'Cada respuesta cita el documento original: nada de inventos.',
      },
      {
        title: 'Permisos por perfil',
        description: 'Cada equipo ve solo lo que le corresponde.',
      },
      {
        title: 'Mejora continua',
        description: 'La retroalimentación del equipo afina las respuestas.',
      },
      {
        title: 'En tus canales',
        description: 'Web, WhatsApp o chat interno, donde tu equipo ya trabaja.',
      },
    ],
    howItWorks: [
      {
        title: 'Recibe',
        description: 'La pregunta entra por el canal que tu equipo ya usa.',
      },
      {
        title: 'Busca',
        description: 'Recorre tu base de conocimiento privada (RAG).',
      },
      {
        title: 'Responde',
        description:
          'Entrega la respuesta con la fuente citada, o escala si no sabe.',
      },
      {
        title: 'Aprende',
        description: 'Registra brechas de conocimiento para cerrarlas.',
      },
    ],
    integrations: ['Drive / SharePoint / S3', 'Slack / Teams / WhatsApp', 'Intranet o web'],
    idealFor: [
      {
        industry: 'Transversal',
        example: 'Onboarding de personal.',
      },
      {
        industry: 'Transversal',
        example: 'Soporte técnico interno.',
      },
      {
        industry: 'Transversal',
        example: 'Cumplimiento y procedimientos.',
      },
    ],
    deliverables: [
      'Base de conocimiento indexada y versionada',
      'Agente con citación de fuentes',
      'Perfiles de acceso definidos',
      'Panel de brechas de conocimiento',
      'Métricas de uso y satisfacción',
    ],
    accent: 'emerald',
  },
];

// Per-accent utility classes (kept literal so Tailwind can pick them up).
export interface AccentStyles {
  // Gradient stops for the card border wrapper (combine with bg-gradient-to-br).
  cardRing: string;
  // Gradient stops for the avatar ring (combine with bg-gradient-to-br).
  avatar: string;
  // Accent text color.
  text: string;
  // Border color for numbered step circles.
  ring: string;
  // Full chip classes (border/bg/text).
  chip: string;
}

export const ACCENT_STYLES: Record<AgentAccent, AccentStyles> = {
  indigo: {
    cardRing: 'from-indigo-500/60 via-violet-500/30 to-indigo-400/20',
    avatar: 'from-indigo-500 via-violet-500 to-indigo-400',
    text: 'text-indigo-600 dark:text-indigo-400',
    ring: 'border-indigo-500/30',
    chip: 'border-indigo-500/30 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300',
  },
  violet: {
    cardRing: 'from-violet-500/60 via-fuchsia-500/30 to-violet-400/20',
    avatar: 'from-violet-500 via-fuchsia-500 to-violet-400',
    text: 'text-violet-600 dark:text-violet-400',
    ring: 'border-violet-500/30',
    chip: 'border-violet-500/30 bg-violet-500/10 text-violet-700 dark:text-violet-300',
  },
  cyan: {
    cardRing: 'from-cyan-400/60 via-sky-500/30 to-cyan-400/20',
    avatar: 'from-cyan-400 via-sky-500 to-cyan-500',
    text: 'text-cyan-600 dark:text-cyan-400',
    ring: 'border-cyan-500/30',
    chip: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300',
  },
  emerald: {
    cardRing: 'from-emerald-500/60 via-teal-500/30 to-emerald-400/20',
    avatar: 'from-emerald-500 via-teal-500 to-emerald-400',
    text: 'text-emerald-600 dark:text-emerald-400',
    ring: 'border-emerald-500/30',
    chip: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
  },
};
