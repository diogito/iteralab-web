import { AnimatedSection } from '@/components/ui/AnimatedSection';

const steps = [
  {
    number: '01',
    title: 'Diagnóstico',
    description:
      'Mapeamos tus procesos y detectamos las oportunidades de automatización con mayor ROI. Gratis, 30 minutos.',
  },
  {
    number: '02',
    title: 'Piloto',
    description:
      'Tu primer agente funcionando en semanas, sobre un proceso real y acotado.',
  },
  {
    number: '03',
    title: 'Producción',
    description:
      'Lo integramos a tus sistemas, con monitoreo, bitácora y supervisión humana donde corresponde.',
  },
  {
    number: '04',
    title: 'Escalamiento',
    description:
      'Nuevos procesos, canales y áreas. El agente crece con tu operación.',
  },
];

export function ProcessSection() {
  return (
    <section id="proceso" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
              Cómo <span className="text-indigo-600 dark:text-indigo-400">trabajamos</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
              Un camino acotado y medible, desde la primera conversación hasta la operación.
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <AnimatedSection key={step.number} delay={0.1 * index} className="relative">
                <div className="flex flex-col items-center text-center lg:items-center">
                  <div className="relative z-10 w-14 h-14 rounded-full border border-indigo-500/30 bg-white dark:bg-zinc-950 flex items-center justify-center mb-5 shadow-lg shadow-zinc-200/50 dark:shadow-none">
                    <span className="font-display font-bold text-indigo-600 dark:text-indigo-400">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    {step.description}
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
