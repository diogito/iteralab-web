import { CircleX, CircleCheck, Shield } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const comparisons = [
  {
    bad: 'Tus datos enviados a servicios públicos',
    good: 'Arquitectura privada: tus datos quedan en tu infraestructura',
  },
  {
    bad: 'Respuestas genéricas sin contexto',
    good: 'Respuestas basadas en TU información y procesos',
  },
  {
    bad: 'Sin control ni trazabilidad',
    good: 'Bitácora de acciones y supervisión humana en decisiones sensibles',
  },
];

const badges = [
  'Modelos en tu infraestructura',
  'Auditoría de acciones',
  'Human-in-the-loop',
];

export function SecuritySection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
              IA seria, <span className="text-indigo-600 dark:text-indigo-400">no juguetes</span>
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-white to-white dark:from-indigo-500/20 dark:via-zinc-900 dark:to-zinc-900 border-2 border-indigo-500/30 shadow-xl shadow-indigo-500/10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                <Shield className="w-4 h-4" />
                Seguridad primero
              </div>
            </div>

            <div className="text-center mt-4">
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
                No instalamos un ChatGPT genérico
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                {comparisons.map((item) => (
                  <div key={item.good} className="contents">
                    <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                      <p className="text-red-600 dark:text-red-400 font-medium text-sm flex items-start gap-2">
                        <CircleX className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        {item.bad}
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/20">
                      <p className="text-green-700 dark:text-green-400 font-medium text-sm flex items-start gap-2">
                        <CircleCheck className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        {item.good}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
