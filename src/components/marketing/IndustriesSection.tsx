import {
  Mountain,
  Sprout,
  HardHat,
  Truck,
  ShoppingCart,
  Stethoscope,
  Building2,
  Calculator,
} from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { cn } from '@/lib/utils';

const industries = [
  {
    icon: Mountain,
    title: 'Minería y faenas',
    description: 'Agentes que acompañan la operación de turno en terreno y oficina.',
    examples: [
      'Reportes de turno automáticos',
      'Registro de charlas de seguridad y ART',
      'Coordinación de contratistas',
    ],
    suggestedAgents: 'Atlas + Lector',
    featured: true,
  },
  {
    icon: Sprout,
    title: 'Agricultura y agroindustria',
    description: 'Del campo a la planilla: trazabilidad sin digitación.',
    examples: [
      'Partes de cosecha y trazabilidad',
      'Coordinación de temporeros',
      'Documentación de exportación',
    ],
    suggestedAgents: 'Lector + Atlas',
    featured: true,
  },
  {
    icon: HardHat,
    title: 'Construcción y obras',
    description: 'La obra documentada y coordinada al día.',
    examples: [
      'Libro de obra diario',
      'Coordinación de subcontratos',
      'Control de documentación de seguridad',
    ],
    suggestedAgents: 'Atlas + Lector',
    featured: false,
  },
  {
    icon: Truck,
    title: 'Logística y transporte',
    description: 'Documentos leídos y despachos seguidos en tiempo real.',
    examples: [
      'Lectura de guías y manifiestos',
      'Seguimiento de despachos',
      'Atención a transportistas',
    ],
    suggestedAgents: 'Lector + Vera',
    featured: false,
  },
  {
    icon: ShoppingCart,
    title: 'Retail y e-commerce',
    description: 'Ventas y postventa atendidas sin espera.',
    examples: [
      'Agente de ventas y postventa',
      'Control de inventario',
      'Respuestas sobre pedidos',
    ],
    suggestedAgents: 'Vera + Atlas',
    featured: false,
  },
  {
    icon: Stethoscope,
    title: 'Salud y clínicas',
    description: 'Agenda clínica full, con menos inasistencias.',
    examples: [
      'Agendamiento y confirmación de citas',
      'Recepción de pacientes',
      'Recordatorios',
    ],
    suggestedAgents: 'Vera + Oráculo',
    featured: false,
  },
  {
    icon: Building2,
    title: 'Inmobiliario',
    description: 'Cada lead atendido y seguido hasta la visita.',
    examples: [
      'Calificación de leads',
      'Agendamiento de visitas',
      'Seguimiento de cotizaciones',
    ],
    suggestedAgents: 'Vera + Lector',
    featured: false,
  },
  {
    icon: Calculator,
    title: 'Finanzas y contabilidad',
    description: 'Documentos ordenados y cierres sin trasnoche.',
    examples: [
      'Extracción de facturas y rendiciones',
      'Clasificación documental',
      'Reportes para cierres',
    ],
    suggestedAgents: 'Lector + Atlas',
    featured: false,
  },
];

interface IndustriesSectionProps {
  id?: string;
  className?: string;
}

export function IndustriesSection({ id = 'industrias', className }: IndustriesSectionProps) {
  return (
    <section id={id} className={cn('py-24 relative', className)}>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-50/50 to-white dark:from-zinc-950 dark:via-zinc-900/50 dark:to-zinc-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
              Agentes para <span className="text-indigo-600 dark:text-indigo-400">tu industria</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
              Cada rubro tiene sus procesos. Estos son los que automatizamos primero.
            </p>
          </div>
        </AnimatedSection>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {industries.map((industry, index) => (
            <AnimatedSection
              key={industry.title}
              delay={0.08 * (index % 3)}
              className={cn('h-full', industry.featured && 'md:col-span-2 lg:col-span-2')}
            >
              <div className="relative h-full p-6 lg:p-8 rounded-2xl border transition-all duration-300 bg-white dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 shadow-lg shadow-zinc-200/50 dark:shadow-none group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                      <industry.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                      {industry.title}
                    </h3>
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                    {industry.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {industry.examples.map((example) => (
                      <span
                        key={example}
                        className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 px-3 py-1 text-xs text-zinc-600 dark:text-zinc-300"
                      >
                        {example}
                      </span>
                    ))}
                  </div>

                  {/* Suggested agent micro-line */}
                  <p className="mt-4 pt-3 border-t border-zinc-200/70 dark:border-zinc-800/70 mono text-xs text-zinc-500 dark:text-zinc-400">
                    agente sugerido:{' '}
                    <span className="text-indigo-600 dark:text-indigo-400">
                      {industry.suggestedAgents}
                    </span>
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
