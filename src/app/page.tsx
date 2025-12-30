import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { HeroCorporate } from '@/components/marketing/HeroCorporate';
import { ServicesGrid } from '@/components/marketing/ServicesGrid';
import { TechStack } from '@/components/marketing/TechStack';
import { Footer } from '@/components/marketing/Footer';
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'Iteralab | Consultora de Ingeniería de Software',
  description: 'Soluciones empresariales, integración de sistemas e IA.',
  openGraph: {
    title: 'Iteralab | Consultora de Ingeniería de Software',
    description: 'Ingeniería de software para empresas que escalan. Integraciones, automatización con IA y modernización digital.',
    url: 'https://iteralab.cl',
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroCorporate />
        <ServicesGrid />
        <TechStack />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
