import Link from 'next/link';
import {
  Headset,
  Workflow,
  ScanLine,
  BrainCircuit,
  ArrowRight,
} from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const agents = [
  {
    slug: 'vera',
    name: 'Vera',
    role: 'Agente Comercial',
    icon: Headset,
    pitch: 'Atiende tu WhatsApp y tu web, califica leads y agenda reuniones.',
    skills: ['WhatsApp', 'Califica leads', 'Agenda'],
  },
  {
    slug: 'atlas',
    name: 'Atlas',
    role: 'Agente de Operaciones',
    icon: Workflow,
    pitch: 'Coordina turnos, terrenos, cuadrillas y bodegas; reporta solo.',
    skills: ['Turnos', 'Reportes', 'Alertas'],
  },
  {
    slug: 'lector',
    name: 'Lector',
    role: 'Agente Documental',
    icon: ScanLine,
    pitch: 'Lee guías, facturas y contratos; los inyecta al ERP sin digitación.',
    skills: ['OCR', 'ERP', 'Validación'],
  },
  {
    slug: 'oraculo',
    name: 'Oráculo',
    role: 'Agente de Conocimiento',
    icon: BrainCircuit,
    pitch: 'Responde con tus manuales y procedimientos (RAG privado).',
    skills: ['RAG', 'Manuales', 'Soporte interno'],
  },
];

export function AgentRoster() {
  return (
    <section id="agentes" className="py-24 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.04] dark:via-indigo-500/[0.07] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[420px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-500/10 dark:from-violet-500/15 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
              Conoce a tu nuevo equipo{' '}
              <span className="text-gradient">de agentes.</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
              Cada agente es un trabajador digital especializado, entrenado con tu
              contexto y conectado a tus sistemas.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {agents.map((agent, index) => (
            <AnimatedSection key={agent.name} delay={0.1 * (index % 2)} className="h-full">
              <Link
                href={`/agentes/${agent.slug}`}
                className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-2xl"
              >
              {/* Gradient border wrapper */}
              <div className="relative h-full rounded-2xl bg-gradient-to-br from-indigo-500/50 via-violet-500/30 to-cyan-400/30 p-[1px] glow-card">
                <div className="relative h-full rounded-[15px] bg-white/95 dark:bg-zinc-950/90 backdrop-blur p-6 lg:p-8 overflow-hidden">
                  {/* Hover tint */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    {/* Avatar + identity */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 p-[2px] flex-shrink-0">
                        <div className="w-full h-full rounded-full bg-white dark:bg-zinc-950 flex items-center justify-center">
                          <agent.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
                          {agent.name}
                        </h3>
                        <span className="mono text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                          {agent.role}
                        </span>
                      </div>
                    </div>

                    {/* Pitch */}
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mb-4">
                      {agent.pitch}
                    </p>

                    {/* Skill chips */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {agent.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 px-3 py-1 text-xs text-zinc-600 dark:text-zinc-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Status line + affordance */}
                    <div className="flex items-center justify-between gap-3">
                      <p className="mono text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                        </span>
                        en línea · 24/7
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                        Conocer a {agent.name}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
