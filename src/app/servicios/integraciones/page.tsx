'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Plug, RefreshCw, Zap, Database, ArrowRight, CheckCircle } from 'lucide-react';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat';
import { WHATSAPP_LINK } from '@/lib/constants';

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
    icon: RefreshCw,
    title: 'Sincronización Bidireccional',
    description: 'Tus sistemas se actualizan en ambas direcciones, eliminando inconsistencias y trabajo duplicado.',
  },
  {
    icon: Zap,
    title: 'Webhooks en Tiempo Real',
    description: 'Eventos instantáneos que disparan acciones automáticas sin delays ni procesos batch.',
  },
  {
    icon: Database,
    title: 'Migración de Datos Legacy',
    description: 'Extraemos y transformamos datos de sistemas antiguos sin perder información crítica.',
  },
];

export default function IntegracionesPage() {
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
                <Plug className="w-4 h-4" />
                <span className="text-sm font-medium">Integraciones Empresariales</span>
              </motion.div>

              <motion.h1
                {...fadeInUp}
                animate={fadeInUp.animate}
                transition={transition(0.1)}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                Conectamos tu Ecosistema.
                <span className="text-indigo-400"> Eliminamos el Caos Manual.</span>
              </motion.h1>

              <motion.p
                {...fadeInUp}
                animate={fadeInUp.animate}
                transition={transition(0.2)}
                className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto"
              >
                APIs, ERPs y CRMs hablando el mismo idioma. Deja de copiar datos
                en Excel y empieza a operar en tiempo real.
              </motion.p>

              <motion.div
                {...fadeInUp}
                animate={fadeInUp.animate}
                transition={transition(0.3)}
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full">
                    Solicitar Diagnóstico
                  </Button>
                </a>
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
                      Datos duplicados en múltiples sistemas
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">✕</span>
                      Horas perdidas copiando información manualmente
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">✕</span>
                      Errores humanos en la transcripción de datos
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">✕</span>
                      Información desactualizada entre departamentos
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
                      Fuente única de verdad sincronizada
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      Automatización total del flujo de datos
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      Validación automática y detección de errores
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      Actualización en tiempo real para todos
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
                  Capacidades <span className="text-indigo-400">Técnicas</span>
                </h2>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                  Integramos cualquier sistema con APIs REST, GraphQL, SOAP o conexiones directas a base de datos.
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
                ¿Listo para unificar tus sistemas?
              </h2>
              <p className="text-zinc-400 text-lg mb-8">
                Agenda una consultoría gratuita y te mostraremos cómo conectar tu ecosistema digital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full">
                    Agendar Consultoría
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
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
