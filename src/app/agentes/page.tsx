import Link from 'next/link';
import {
  ArrowRight,
  CircleCheck,
  Headset,
  Workflow,
  ScanLine,
  BrainCircuit,
  type LucideIcon,
} from 'lucide-react';
import { Navbar } from '@/components/marketing/Navbar';
import { CTASection } from '@/components/marketing/CTASection';
import { EngagementStrip } from '@/components/marketing/EngagementStrip';
import { Footer } from '@/components/marketing/Footer';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat';
import { AGENTS, ACCENT_STYLES, type AgentIconKey } from '@/lib/agents';
import { cn } from '@/lib/utils';

const ICONS: Record<AgentIconKey, LucideIcon> = {
  headset: Headset,
  workflow: Workflow,
  scanline: ScanLine,
  brain: BrainCircuit,
};

export default function AgentesIndexPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-50 to-white dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 dark:from-indigo-900/20 via-transparent to-transparent" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 dark:from-indigo-500/15 via-transparent to-transparent blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                  Cuatro agentes.{' '}
                  <span className="text-gradient">Toda tu operación.</span>
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400">
                  Productos listos para conectarse a tu realidad: elige por dónde
                  empezar o combina agentes.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Product cards */}
        <section className="pb-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {AGENTS.map((agent, index) => {
                const Icon = ICONS[agent.iconKey];
                const accent = ACCENT_STYLES[agent.accent];
                return (
                  <AnimatedSection
                    key={agent.slug}
                    delay={0.1 * (index % 2)}
                    className="h-full"
                  >
                    <Link
                      href={`/agentes/${agent.slug}`}
                      className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-2xl"
                    >
                      {/* Gradient border wrapper */}
                      <div
                        className={cn(
                          'relative h-full rounded-2xl bg-gradient-to-br p-[1px] glow-card',
                          accent.cardRing
                        )}
                      >
                        <div className="relative h-full rounded-[15px] bg-white/95 dark:bg-zinc-950/90 backdrop-blur p-6 lg:p-8 overflow-hidden flex flex-col">
                          {/* Hover tint */}
                          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          <div className="relative z-10 flex flex-col flex-1">
                            {/* Avatar + identity */}
                            <div className="flex items-center gap-4 mb-4">
                              <div
                                className={cn(
                                  'w-14 h-14 rounded-full bg-gradient-to-br p-[2px] flex-shrink-0',
                                  accent.avatar
                                )}
                              >
                                <div className="w-full h-full rounded-full bg-white dark:bg-zinc-950 flex items-center justify-center">
                                  <Icon
                                    className={cn('w-6 h-6', accent.text)}
                                  />
                                </div>
                              </div>
                              <div>
                                <h2 className="font-display text-2xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
                                  {agent.name}
                                </h2>
                                <span
                                  className={cn(
                                    'mono text-xs uppercase tracking-wider',
                                    accent.text
                                  )}
                                >
                                  {agent.role}
                                </span>
                              </div>
                            </div>

                            {/* Tagline */}
                            <p className="text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed mb-3">
                              {agent.tagline}
                            </p>

                            {/* Top capabilities */}
                            <ul className="space-y-2 mb-6">
                              {agent.capabilities.slice(0, 3).map((capability) => (
                                <li
                                  key={capability.title}
                                  className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                                >
                                  <CircleCheck
                                    className={cn(
                                      'w-4 h-4 mt-0.5 flex-shrink-0',
                                      accent.text
                                    )}
                                  />
                                  {capability.title}
                                </li>
                              ))}
                            </ul>

                            {/* Affordance */}
                            <div
                              className={cn(
                                'mt-auto pt-4 border-t border-zinc-200/70 dark:border-zinc-800/70 flex items-center text-sm font-medium',
                                accent.text
                              )}
                            >
                              <span>Conocer a {agent.name}</span>
                              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* How it gets hired: Piloto → Producción → Escala (no prices) */}
        <EngagementStrip />

        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
