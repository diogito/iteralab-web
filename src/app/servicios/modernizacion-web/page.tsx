import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Hero } from '@/components/marketing/Hero';
import { TechStack } from '@/components/marketing/TechStack';
import { ComparisonGrid } from '@/components/marketing/ComparisonGrid';
import { PricingCards } from '@/components/marketing/PricingCards';
import { PromoBanner } from '@/components/marketing/PromoBanner';
import { Footer } from '@/components/marketing/Footer';
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'Modernización Web | Iteralab',
  description: 'Desarrollo web de alto rendimiento. Convertimos visitas en clientes con sitios rápidos, seguros y diseñados para vender.',
  openGraph: {
    title: 'Modernización Web | Iteralab',
    description: 'Sitios web de alto rendimiento y SEO técnico para empresas chilenas.',
    url: 'https://iteralab.cl/servicios/modernizacion-web',
  },
};

export default function ModernizacionWebPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <ComparisonGrid />
        <PricingCards />
        <PromoBanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
