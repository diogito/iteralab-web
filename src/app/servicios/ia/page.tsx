'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Bot, Brain, FileText, Headphones, ArrowRight, CheckCircle } from 'lucide-react';
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
    icon: Brain,
    title: 'Chatbots con tus Datos',
    description: 'RAG (Retrieval-Augmented Generation) entrenado con tu documentación interna para respuestas precisas.',
  },
  {
    icon: FileText,
    title: 'Procesamiento de Facturas/Docs',
    description: 'Extracción automática de datos de facturas, contratos y documentos con precisión de 99%.',
  },
  {
    icon: Headphones,
    title: 'Asistentes de Operaciones 24/7',
    description: 'Agentes autónomos que resuelven tickets, responden consultas y escalan solo lo necesario.',
  },
];

export default function IAPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center pt-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-50 to-white dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 dark:from-indigo-900/20 via-transparent to-transparent" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 dark:from-indigo-500/15 via-transparent to-transparent blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                {...fadeInUp}
                animate={fadeInUp.animate}
                transition={transition(0)}
                className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full mb-8"
              >
                <Bot className="w-4 h-4" />
                <span className="text-sm font-medium">Inteligencia Artificial Aplicada</span>
              </motion.div>

              <motion.h1
                {...fadeInUp}
                animate={fadeInUp.animate}
                transition={transition(0.1)}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
              >
                Inteligencia Artificial que genera ROI,
                <span className="text-indigo-600 dark:text-indigo-400"> no solo Hype.</span>
              </motion.h1>

              <motion.p
                {...fadeInUp}
                animate={fadeInUp.animate}
                transition={transition(0.2)}
                className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
              >
                Implementamos agentes autónomos y RAG para automatizar soporte,
                ventas y procesamiento de documentos. IA que trabaja, no que impresiona.
              </motion.p>

              <motion.div
                {...fadeInUp}
                animate={fadeInUp.animate}
                transition={transition(0.3)}
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/agendar" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full">
                    Solicitar Demo
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
        <section className="py-24 bg-zinc-100/80 dark:bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <AnimatedSection>
                <div className="p-8 rounded-2xl bg-red-500/5 border border-red-500/20">
                  <h3 className="font-display text-xl font-semibold text-red-500 dark:text-red-400 mb-4">
                    El Problema
                  </h3>
                  <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">✕</span>
                      Equipo de soporte saturado respondiendo las mismas preguntas
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">✕</span>
                      Procesamiento manual de cientos de facturas y documentos
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">✕</span>
                      ChatGPT genérico que no conoce tu empresa
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">✕</span>
                      Proyectos de IA que nunca llegan a producción
                    </li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="p-8 rounded-2xl bg-green-500/5 border border-green-500/20">
                  <h3 className="font-display text-xl font-semibold text-green-600 dark:text-green-400 mb-4">
                    Nuestra Solución
                  </h3>
                  <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      Chatbots RAG entrenados con tu documentación interna
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      Pipelines de extracción automática de datos
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      Modelos fine-tuneados para tu industria
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      MVP funcionando en semanas, no meses
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
                <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                  Casos de <span className="text-indigo-600 dark:text-indigo-400">Uso Práctico</span>
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                  IA que resuelve problemas reales de negocio, no experimentos de laboratorio.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <AnimatedSection key={benefit.title} delay={0.1 * (index + 1)}>
                  <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 transition-colors shadow-lg shadow-zinc-200/50 dark:shadow-none">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-zinc-100/80 dark:bg-zinc-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                ¿Listo para automatizar?
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
                Te mostramos cómo la IA puede impactar tu operación en una consultoría gratuita de 30 minutos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/agendar" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full">
                    Agendar Demo Gratuita
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
