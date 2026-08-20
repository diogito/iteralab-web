import {
  MessageSquare,
  FileSearch,
  Plug,
  Workflow,
  BarChart3,
  Brain,
} from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const capabilities = [
  {
    icon: MessageSquare,
    title: 'Atiende y vende 24/7',
    description:
      'Responde consultas, califica leads y agenda reuniones por WhatsApp y web.',
  },
  {
    icon: FileSearch,
    title: 'Lee documentos',
    description:
      'Extrae datos de guías de despacho, facturas, contratos y fotos, sin digitación manual.',
  },
  {
    icon: Plug,
    title: 'Conecta tus sistemas',
    description:
      'Opera con tu ERP, CRM, planillas y canales de mensajería como un empleado más.',
  },
  {
    icon: Workflow,
    title: 'Coordina operaciones',
    description:
      'Turnos, terrenos, cuadrillas y bodegas con seguimiento en tiempo real.',
  },
  {
    icon: BarChart3,
    title: 'Reporta solo',
    description:
      'Informes diarios y alertas generados automáticamente desde la operación.',
  },
  {
    icon: Brain,
    title: 'Aprende de tu empresa',
    description:
      'Responde con tus manuales, procedimientos e histórico — RAG corporativo privado.',
  },
];

export function AgentCapabilities() {
  return (
    <section id="capacidades" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
              ¿Qué puede hacer un agente{' '}
              <span className="text-indigo-600 dark:text-indigo-400">por tu negocio?</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
              Capacidades reales de automatización, listas para conectarse a tu operación.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <AnimatedSection key={capability.title} delay={0.1 * (index % 3)} className="h-full">
              <div className="relative h-full p-6 lg:p-8 rounded-2xl border transition-all duration-300 bg-white dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 shadow-lg shadow-zinc-200/50 dark:shadow-none group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                    <capability.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    {capability.description}
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
