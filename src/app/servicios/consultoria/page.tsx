'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Shield, Search, Lock, CloudCog, ArrowRight, CheckCircle } from 'lucide-react';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const transition = (delay: number) => ({
  duration: 0.5,
  delay,
  ease: ease as unknown as [number, number, number, number],
});

const benefits = [
  {
    icon: Search,
    title: 'Due Diligence Técnico',
    description: 'Evaluamos código, arquitectura y deuda técnica antes de inversiones o adquisiciones.',
  },
  {
    icon: Lock,
    title: 'Auditoría de Seguridad',
    description: 'Identificamos vulnerabilidades OWASP y configuraciones de riesgo en tu infraestructura.',
  },
  {
    icon: CloudCog,
    title: 'Optimización de Costos Cloud',
    description: 'Reducimos tu factura AWS/GCP hasta un 40% sin sacrificar rendimiento ni disponibilidad.',
  },
];

export default function ConsultoriaPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center pt-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/15 via-zinc-950/0 to-zinc-950/0 blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                {...fadeInUp}
                animate={fadeInUp.animate}
                transition={transition(0)}
                className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-400 px-4 py-2 rounded-full mb-8"
              >
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Consultoría Senior</span>
              </motion.div>

              <motion.h1
                {...fadeInUp}
                animate={fadeInUp.animate}
                transition={transition(0.1)}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                Tu CTO On-Demand.
                <span className="text-indigo-400"> Ingeniería sin Riesgos.</span>
              </motion.h1>

              <motion.p
                {...fadeInUp}
                animate={fadeInUp.animate}
                transition={transition(0.2)}
                className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto"
              >
                Auditoría de código, rescate de proyectos fallidos y diseño de arquitectura cloud.
                Aportamos la experiencia senior que tu equipo necesita.
              </motion.p>

              <motion.div
                {...fadeInUp}
                animate={fadeInUp.animate}
                transition={transition(0.3)}
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/agendar" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full">
                    Agendar Consultoría
                  </Button>
                </Link>
                <Link href="/#servicios" className="w-full sm:w-auto">
                  <Button variant="secondary" size="lg" className="w-full">
                    Ver todos los servicios
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problem vs Solution */}
        <section className="py-24 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <AnimatedSection>
                <div className="p-8 rounded-2xl bg-red-500/5 border border-red-500/20">
                  <h3 className="font-display text-xl font-semibold text-red-400 mb-4">
                    El Problema
                  </h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">✕</span>
                      Equipo técnico junior sin guía arquitectónica
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">✕</span>
                      Proyectos que se retrasan o nunca terminan
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">✕</span>
                      Factura cloud que crece sin control
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">✕</span>
                      Deuda técnica que frena nuevas funcionalidades
                    </li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="p-8 rounded-2xl bg-green-500/5 border border-green-500/20">
                  <h3 className="font-display text-xl font-semibold text-green-400 mb-4">
                    Nuestra Solución
                  </h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      CTO fraccional con experiencia en startups y enterprise
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      Code reviews y mentoring para tu equipo
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      Auditorías con recomendaciones accionables
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      Roadmap técnico alineado con objetivos de negocio
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                  Servicios de <span className="text-indigo-400">Consultoría</span>
                </h2>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                  Experiencia senior disponible cuando la necesitas, sin el costo de un empleado full-time.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <AnimatedSection key={benefit.title} delay={0.1 * (index + 1)}>
                  <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-indigo-500/50 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-indigo-400" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-zinc-100 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-zinc-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                ¿Necesitas una segunda opinión técnica?
              </h2>
              <p className="text-zinc-400 text-lg mb-8">
                Agenda una sesión de diagnóstico gratuita. Analizamos tu situación y te damos recomendaciones concretas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/agendar" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full">
                    Agendar Diagnóstico Gratis
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
