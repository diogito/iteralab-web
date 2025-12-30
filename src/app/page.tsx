import { Navbar } from '@/components/marketing/Navbar';
import { Hero } from '@/components/marketing/Hero';
import { ComparisonGrid } from '@/components/marketing/ComparisonGrid';
import { PricingCards } from '@/components/marketing/PricingCards';
import { PromoBanner } from '@/components/marketing/PromoBanner';
import { Footer } from '@/components/marketing/Footer';
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ComparisonGrid />
        <PricingCards />
        <PromoBanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
