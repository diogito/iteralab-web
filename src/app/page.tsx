import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { HeroAgents } from '@/components/marketing/HeroAgents';
import { AgentRoster } from '@/components/marketing/AgentRoster';
import { AgentCapabilities } from '@/components/marketing/AgentCapabilities';
import { ServicesGrid } from '@/components/marketing/ServicesGrid';
import { IndustriesSection } from '@/components/marketing/IndustriesSection';
import { ProcessSection } from '@/components/marketing/ProcessSection';
import { SecuritySection } from '@/components/marketing/SecuritySection';
import { TechStack } from '@/components/marketing/TechStack';
import { FAQSection } from '@/components/marketing/FAQSection';
import { CTASection } from '@/components/marketing/CTASection';
import { Footer } from '@/components/marketing/Footer';
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'Iteralab | Desarrollo de Agentes de IA para Empresas',
  description:
    'Cuatro agentes de producción para tu empresa: Vera, Atlas, Lector y Oráculo. Trabajadores digitales que atienden, leen, deciden y ejecutan — conectados a tu ERP, tu WhatsApp y tu operación real. Minería, agricultura, logística y back-office.',
  openGraph: {
    title: 'Iteralab | Desarrollo de Agentes de IA para Empresas',
    description:
      'Cuatro agentes de producción: Vera, Atlas, Lector y Oráculo. Atienden, leen, deciden y ejecutan — conectados a ERP y WhatsApp, con tus datos bajo tu control.',
    url: 'https://iteralab.cl',
  },
};

// Keep in sync with FAQ_ITEMS in src/components/marketing/FAQSection.tsx
const faqItems = [
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

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroAgents />
        <AgentRoster />
        <AgentCapabilities />
        <ServicesGrid />
        <IndustriesSection />
        <ProcessSection />
        <SecuritySection />
        <TechStack />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
