import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  CircleCheck,
  MessageSquare,
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
import { Button } from '@/components/ui/Button';
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat';
import { JsonLd } from '@/components/seo/JsonLd';
import { AGENTS, ACCENT_STYLES, type AgentIconKey } from '@/lib/agents';
import { WHATSAPP_LINK } from '@/lib/constants';
import { agentServiceSchema, faqSchema, breadcrumbSchema } from '@/lib/seo';
import { cn } from '@/lib/utils';

const ICONS: Record<AgentIconKey, LucideIcon> = {
  headset: Headset,
  workflow: Workflow,
  scanline: ScanLine,
  brain: BrainCircuit,
};

interface AgentPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return AGENTS.map((agent) => ({ slug: agent.slug }));
}

export async function generateMetadata({
  params,
}: AgentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const agent = AGENTS.find((candidate) => candidate.slug === slug);
  if (!agent) return {};

  return {
    title: `${agent.name} — ${agent.role}`,
    description: agent.pitch,
    alternates: {
      canonical: `/agentes/${agent.slug}`,
    },
    openGraph: {
      title: `${agent.name} — ${agent.role} | Iteralab`,
      description: agent.tagline,
      url: `https://iteralab.cl/agentes/${agent.slug}`,
      type: 'website',
    },
  };
}

export default async function AgentDetailPage({ params }: AgentPageProps) {
  const { slug } = await params;
  const agent = AGENTS.find((candidate) => candidate.slug === slug);
  if (!agent) notFound();

  const Icon = ICONS[agent.iconKey];
  const accent = ACCENT_STYLES[agent.accent];
  const otherAgents = AGENTS.filter((candidate) => candidate.slug !== agent.slug);

  return (
    <>
      <Navbar />
      <main>
        <JsonLd data={agentServiceSchema(agent)} />
        <JsonLd data={faqSchema(agent.faq)} />
        <JsonLd
          data={breadcrumbSchema([
            { name: 'Inicio', path: '/' },
            { name: 'Agentes', path: '/agentes' },
            { name: agent.name, path: `/agentes/${agent.slug}` },
          ])}
        />
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-50 to-white dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 dark:from-indigo-900/20 via-transparent to-transparent" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 dark:from-indigo-500/15 via-transparent to-transparent blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <Link
                href="/agentes"
                className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mb-10"
              >
                <ArrowLeft className="w-4 h-4" />
                Todos los agentes
              </Link>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Copy */}
              <AnimatedSection delay={0.1}>
                <div className="text-center lg:text-left">
                  <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                    {agent.name}:{' '}
                    <span className="text-gradient">{agent.role}</span>
                  </h1>
                  <p className="mt-4 text-xl sm:text-2xl font-medium text-zinc-700 dark:text-zinc-300">
                    {agent.tagline}
                  </p>
                  <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto lg:mx-0">
                    {agent.pitch}
                  </p>

                  {/* CTAs */}
                  <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link href="/agendar" className="w-full sm:w-auto">
                      <Button size="lg" className="w-full">
                        Agendar diagnóstico
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <Button variant="ghost" size="lg" className="w-full">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Escribir por WhatsApp
                      </Button>
                    </a>
                  </div>

                  {/* Status */}
                  <p
                    className={cn(
                      'mt-8 mono text-xs flex items-center gap-2 justify-center lg:justify-start text-emerald-600 dark:text-emerald-400'
                    )}
                  >
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                    en línea · 24/7
                  </p>
                </div>
              </AnimatedSection>

              {/* Avatar */}
              <AnimatedSection delay={0.2}>
                <div className="flex justify-center">
                  <div
                    className={cn(
                      'w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br p-[3px] glow-card',
                      accent.avatar
                    )}
                  >
                    <div className="w-full h-full rounded-full bg-white dark:bg-zinc-950 flex items-center justify-center">
                      <Icon className={cn('w-24 h-24 sm:w-28 sm:h-28', accent.text)} />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-50/50 to-white dark:from-zinc-950 dark:via-zinc-900/50 dark:to-zinc-950" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                  Qué hace{' '}
                  <span className="text-indigo-600 dark:text-indigo-400">
                    {agent.name}
                  </span>
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {agent.capabilities.map((capability, index) => (
                <AnimatedSection
                  key={capability.title}
                  delay={0.08 * (index % 2)}
                  className="h-full"
                >
                  <div className="relative h-full p-6 rounded-2xl border bg-white dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 shadow-lg shadow-zinc-200/50 dark:shadow-none transition-all duration-300 group">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2 flex items-center gap-2">
                        <CircleCheck
                          className={cn('w-5 h-5 flex-shrink-0', accent.text)}
                        />
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

        {/* How it operates */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                  Cómo{' '}
                  <span className="text-indigo-600 dark:text-indigo-400">opera</span>
                </h2>
              </div>
            </AnimatedSection>

            <div className="relative">
              {/* Connecting line (desktop) */}
              <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {agent.howItWorks.map((step, index) => (
                  <AnimatedSection
                    key={step.title}
                    delay={0.1 * index}
                    className="relative"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div
                        className={cn(
                          'relative z-10 w-14 h-14 rounded-full border bg-white dark:bg-zinc-950 flex items-center justify-center mb-5 shadow-lg shadow-zinc-200/50 dark:shadow-none',
                          accent.ring
                        )}
                      >
                        <span className={cn('font-display font-bold', accent.text)}>
                          {String(index + 1).padStart(2, '0')}
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

        {/* Integrations */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-50/50 to-white dark:from-zinc-950 dark:via-zinc-900/50 dark:to-zinc-950" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                  Se integra{' '}
                  <span className="text-indigo-600 dark:text-indigo-400">con</span>
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
                  {agent.name} se conecta a los sistemas que tu empresa ya usa.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="flex flex-wrap justify-center gap-3">
                {agent.integrations.map((integration) => (
                  <span
                    key={integration}
                    className={cn(
                      'inline-flex items-center rounded-full border px-4 py-2 text-sm',
                      accent.chip
                    )}
                  >
                    {integration}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Ideal for */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                  Dónde{' '}
                  <span className="text-indigo-600 dark:text-indigo-400">brilla</span>
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {agent.idealFor.map((ideal, index) => (
                <AnimatedSection
                  key={`${ideal.industry}-${ideal.example}`}
                  delay={0.1 * index}
                  className="h-full"
                >
                  <div className="relative h-full p-6 lg:p-8 rounded-2xl border bg-white dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 shadow-lg shadow-zinc-200/50 dark:shadow-none transition-all duration-300 group">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                        {ideal.industry}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                        {ideal.example}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-50/50 to-white dark:from-zinc-950 dark:via-zinc-900/50 dark:to-zinc-950" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                  Qué{' '}
                  <span className="text-indigo-600 dark:text-indigo-400">recibes</span>
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {agent.deliverables.map((deliverable, index) => (
                <AnimatedSection
                  key={deliverable}
                  delay={0.08 * (index % 2)}
                  className="h-full"
                >
                  <div className="flex items-start gap-3 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
                    <CircleCheck
                      className={cn('w-5 h-5 mt-0.5 flex-shrink-0', accent.text)}
                    />
                    <span className="text-zinc-700 dark:text-zinc-300 text-sm sm:text-base">
                      {deliverable}
                    </span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement: Piloto → Producción → Escala (no prices) */}
        <EngagementStrip />

        {/* Other agents */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                  Otros{' '}
                  <span className="text-indigo-600 dark:text-indigo-400">agentes</span>
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherAgents.map((other, index) => {
                const OtherIcon = ICONS[other.iconKey];
                const otherAccent = ACCENT_STYLES[other.accent];
                return (
                  <AnimatedSection
                    key={other.slug}
                    delay={0.1 * index}
                    className="h-full"
                  >
                    <Link
                      href={`/agentes/${other.slug}`}
                      className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-2xl"
                    >
                      <div className="relative h-full p-6 rounded-2xl border bg-white dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 shadow-lg shadow-zinc-200/50 dark:shadow-none transition-all duration-300">
                        <div className="flex items-center gap-4 mb-3">
                          <div
                            className={cn(
                              'w-12 h-12 rounded-full bg-gradient-to-br p-[2px] flex-shrink-0',
                              otherAccent.avatar
                            )}
                          >
                            <div className="w-full h-full rounded-full bg-white dark:bg-zinc-950 flex items-center justify-center">
                              <OtherIcon
                                className={cn('w-5 h-5', otherAccent.text)}
                              />
                            </div>
                          </div>
                          <div>
                            <h3 className="font-display text-xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight group-hover:text-indigo-600 dark:group-hover:text-white transition-colors">
                              {other.name}
                            </h3>
                            <span
                              className={cn(
                                'mono text-xs uppercase tracking-wider',
                                otherAccent.text
                              )}
                            >
                              {other.role}
                            </span>
                          </div>
                        </div>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                          {other.tagline}
                        </p>
                        <div
                          className={cn(
                            'flex items-center text-sm font-medium',
                            otherAccent.text
                          )}
                        >
                          <span>Conocer a {other.name}</span>
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
