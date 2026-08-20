import { AnimatedSection } from '@/components/ui/AnimatedSection';

// How an agent gets hired: Piloto → Producción → Escala. No public prices.
const STAGES = [
  {
    number: '01',
    title: 'Piloto',
    description: 'Un proceso real y acotado funcionando en semanas.',
  },
  {
    number: '02',
    title: 'Producción',
    description: 'Integrado a tus sistemas, monitoreado y con supervisión humana.',
  },
  {
    number: '03',
    title: 'Escala',
    description: 'Más procesos y canales. El agente crece con tu operación.',
  },
];

interface EngagementStripProps {
  subtitle?: string;
}

export function EngagementStrip({
  subtitle = 'Sin letra chica: partimos con un piloto acotado y lo llevamos a producción cuando ya está demostrando valor.',
}: EngagementStripProps) {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
              Cómo se{' '}
              <span className="text-indigo-600 dark:text-indigo-400">contrata</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
              {subtitle}
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-7 left-[16.6%] right-[16.6%] h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STAGES.map((stage, index) => (
              <AnimatedSection key={stage.number} delay={0.1 * index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 w-14 h-14 rounded-full border border-indigo-500/30 bg-white dark:bg-zinc-950 flex items-center justify-center mb-5 shadow-lg shadow-zinc-200/50 dark:shadow-none">
                    <span className="font-display font-bold text-indigo-600 dark:text-indigo-400">
                      {stage.number}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed max-w-xs">
                    {stage.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
