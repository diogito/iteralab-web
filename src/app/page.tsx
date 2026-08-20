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
import { JsonLd } from '@/components/seo/JsonLd';
import { FAQ_ITEMS } from '@/lib/faq';
import { AGENTS } from '@/lib/agents';
import { itemListSchema, faqSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Iteralab | Desarrollo de Agentes de IA para Empresas',
  description:
    'Cuatro agentes de producción para tu empresa: Vera, Atlas, Lector y Oráculo. Trabajadores digitales que atienden, leen, deciden y ejecutan — conectados a tu ERP, tu WhatsApp y tu operación real. Minería, agricultura, logística y back-office.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Iteralab | Desarrollo de Agentes de IA para Empresas',
    description:
      'Cuatro agentes de producción: Vera, Atlas, Lector y Oráculo. Atienden, leen, deciden y ejecutan — conectados a ERP y WhatsApp, con tus datos bajo tu control.',
    url: 'https://iteralab.cl',
  },
};

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
      <JsonLd
        data={itemListSchema(
          AGENTS.map((agent) => ({
            name: `${agent.name} — ${agent.role}`,
            description: agent.tagline,
            path: `/agentes/${agent.slug}`,
          }))
        )}
      />
      <JsonLd data={faqSchema(FAQ_ITEMS, '#faq')} />
    </>
  );
}
