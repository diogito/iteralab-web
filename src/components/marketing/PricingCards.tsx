import { Check } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { PRICING, WHATSAPP_LINK } from '@/lib/constants';
import { formatCLP } from '@/lib/utils';

export function PricingCards() {
  return (
    <section id="precios" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Planes Transparentes
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Sin costos ocultos. Sin sorpresas. Precios en pesos chilenos + IVA.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Plan Start */}
          <AnimatedSection delay={0.1}>
            <Card className="p-8 h-full flex flex-col pricing-card">
              <div>
                <h3 className="font-display text-2xl font-bold text-zinc-100">
                  {PRICING.start.name}
                </h3>
                <p className="text-zinc-500 mt-1">{PRICING.start.tagline}</p>

                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-bold text-zinc-100">
                    ${formatCLP(PRICING.start.price)}
                  </span>
                  <span className="text-zinc-400 ml-2">/mes</span>
                </div>
                <p className="text-xs text-zinc-500 mt-1">+ IVA</p>
              </div>

              <ul className="mt-8 space-y-4 flex-grow">
                {PRICING.start.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-indigo-400" />
                    </div>
                    <span className="text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-8"
              >
                <Button variant="secondary" className="w-full">
                  Elegir {PRICING.start.name}
                </Button>
              </a>
            </Card>
          </AnimatedSection>

          {/* Plan Scale */}
          <AnimatedSection delay={0.2}>
            <Card variant="highlight" className="p-8 h-full flex flex-col relative pricing-card">
              <Badge className="absolute -top-3 right-6">
                Popular
              </Badge>

              <div>
                <h3 className="font-display text-2xl font-bold text-zinc-100">
                  {PRICING.scale.name}
                </h3>
                <p className="text-zinc-500 mt-1">{PRICING.scale.tagline}</p>

                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-bold text-indigo-400">
                    ${formatCLP(PRICING.scale.price)}
                  </span>
                  <span className="text-zinc-400 ml-2">/mes</span>
                </div>
                <p className="text-xs text-zinc-500 mt-1">+ IVA</p>
              </div>

              <ul className="mt-8 space-y-4 flex-grow">
                {PRICING.scale.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-indigo-400" />
                    </div>
                    <span className="text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-8"
              >
                <Button className="w-full">
                  Elegir {PRICING.scale.name}
                </Button>
              </a>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
