// Single source of truth for the site-wide FAQ.
// Used by the visible FAQSection (accordion), the home FAQPage JSON-LD
// and the llms.txt summary. Keep answers factual and extractable (AEO).

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: '¿Qué es un agente de IA y en qué se diferencia de un chatbot?',
    answer:
      'Un chatbot solo conversa. Un agente ejecuta tareas: se conecta a tus sistemas (ERP, CRM, WhatsApp), lee documentos, registra datos y coordina pasos de un proceso, siguiendo reglas definidas y escalando a una persona cuando corresponde.',
  },
  {
    question: '¿Cuánto tarda la implementación?',
    answer:
      'El primer piloto —un proceso real y acotado— suele estar funcionando en semanas. El plazo depende de la complejidad del proceso y de las integraciones disponibles; lo estimamos en el diagnóstico.',
  },
  {
    question: '¿Qué pasa con mis datos?',
    answer:
      'Quedan bajo tu control. Trabajamos con arquitectura privada en tu infraestructura o en una nube dedicada a tu operación. Tus datos no se usan para entrenar modelos de terceros.',
  },
  {
    question: '¿Con qué sistemas se integra?',
    answer:
      'ERP, CRM, planillas, WhatsApp, correo y APIs internas. Si un sistema no tiene API, evaluamos alternativas como lectura de documentos o acceso directo a su base de datos.',
  },
  {
    question: '¿Necesito equipo técnico interno?',
    answer:
      'No. Nosotros construimos, integramos y mantenemos el agente. Tu equipo lo usa y lo supervisa desde interfaces simples, sin conocimientos de programación.',
  },
  {
    question: '¿Cómo se mide el resultado?',
    answer:
      'Con indicadores acordados antes de partir: horas ahorradas, tiempo de respuesta, tasa de errores y casos procesados. El agente genera sus propios reportes de gestión.',
  },
  {
    question: '¿Cuánto cuesta?',
    answer:
      'Depende del alcance del proceso y de las integraciones requeridas. En el diagnóstico gratuito levantamos el caso y cotizamos un piloto acotado, con precio claro y sin letra chica.',
  },
];