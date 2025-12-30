import { Check, X } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const comparisons = [
  { feature: 'Código limpio y documentado', freelancer: false, iteralab: true },
  { feature: 'HTTPS grado bancario', freelancer: false, iteralab: true },
  { feature: 'Contrato SLA incluido', freelancer: false, iteralab: true },
  { feature: 'Precio fijo en pesos', freelancer: false, iteralab: true },
  { feature: 'Soporte post-lanzamiento', freelancer: false, iteralab: true },
  { feature: 'Optimización Web Vitals', freelancer: false, iteralab: true },
];

export function ComparisonGrid() {
  return (
    <section className="py-24 bg-zinc-900/50" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              La Brecha que Nos Separa
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Mientras otros entregan código desechable, nosotros construimos
              activos digitales que escalan.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Freelancers Column */}
          <AnimatedSection delay={0.1}>
            <Card variant="muted" className="h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                  <X className="w-5 h-5 text-zinc-500" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-400">
                  Freelancers / Agencias
                </h3>
              </div>

              <ul className="space-y-4">
                {comparisons.map((item) => (
                  <li key={item.feature} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <X className="w-3 h-3 text-red-400" />
                    </div>
                    <span className="text-zinc-500">{item.feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-zinc-800">
                <p className="text-sm text-zinc-500 italic">
                  &ldquo;Código sucio, inseguro, sin soporte, cobros sorpresa.&rdquo;
                </p>
              </div>
            </Card>
          </AnimatedSection>

          {/* Iteralab Column */}
          <AnimatedSection delay={0.2}>
            <Card variant="highlight" className="h-full relative overflow-hidden">
              {/* Glow effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-indigo-400">
                    Iteralab
                  </h3>
                </div>

                <ul className="space-y-4">
                  {comparisons.map((item) => (
                    <li key={item.feature} className="flex items-start gap-3">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-indigo-400" />
                      </div>
                      <span className="text-zinc-200">{item.feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-indigo-500/20">
                  <p className="text-sm text-indigo-300 font-medium">
                    &ldquo;Código limpio, seguro, con SLA y precio fijo.&rdquo;
                  </p>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
