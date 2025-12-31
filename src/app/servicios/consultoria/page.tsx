'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Shield, Users, SearchCheck, Compass, ShieldCheck, FileCheck, Calendar, AlertCircle, Award, ArrowRight } from 'lucide-react';
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

const painScenarios = [
  {
    icon: Users,
    title: 'El Caos Interno',
    question: '¿Tienes desarrolladores pero el proyecto no avanza?',
    description: 'Ponemos orden. Implementamos metodologías probadas (CI/CD, Code Reviews, Sprints) y profesionalizamos tu área TI. Tu equipo aprende a trabajar como los grandes.',
  },
  {
    icon: SearchCheck,
    title: 'Auditoría de Proveedores',
    question: '¿Contrataste una agencia y no sabes si lo que te entregan está bien hecho?',
    description: 'Revisamos el código, la seguridad y la calidad técnica. Te entregamos un informe claro para que no te pasen gato por liebre.',
  },
  {
    icon: Compass,
    title: 'Diseño de Arquitectura',
    question: '¿Vas a construir sin planos?',
    description: 'Antes de escribir una línea de código, diseñamos la arquitectura. Escalabilidad, seguridad y elección de tecnología correcta desde el día 1.',
  },
];

const workFormats = [
  {
    icon: FileCheck,
    title: 'Auditoría Puntual',
    description: 'Revisión profunda de un proyecto específico. Recibes un Informe de Estado con hallazgos críticos y recomendaciones accionables.',
    ideal: 'Ideal para: Due diligence, segunda opinión, pre-lanzamiento',
  },
  {
    icon: Calendar,
    title: 'CTO On-Demand',
    description: 'Fee mensual por acompañamiento estratégico. Reuniones semanales, supervisión de código, mentoría a tu equipo y decisiones arquitectónicas.',
    ideal: 'Ideal para: Empresas sin CTO o con equipo junior',
  },
  {
    icon: AlertCircle,
    title: 'Rescate de Proyectos',
    description: 'Intervención de emergencia en software crítico que falló. Diagnóstico rápido, estabilización y plan de recuperación.',
    ideal: 'Ideal para: Proyectos atrasados, proveedores que abandonaron',
  },
];

export default function ConsultoriaPage() {
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
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Dirección Técnica Externa (CTO as a Service)</span>
              </motion.div>

              <motion.h1
                {...fadeInUp}
                animate={fadeInUp.animate}
                transition={transition(0.1)}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
              >
                Toma decisiones tecnológicas de millón de dólares
                <span className="text-indigo-600 dark:text-indigo-400"> con la seguridad de un experto.</span>
              </motion.h1>

              <motion.p
                {...fadeInUp}
                animate={fadeInUp.animate}
                transition={transition(0.2)}
                className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto"
              >
                ¿Vas a construir un edificio sin arquitecto? No dejes tu software en manos de juniors
                o proveedores sin supervisión. Aportamos la visión senior que tu equipo interno necesita.
              </motion.p>

              <motion.div
                {...fadeInUp}
                animate={fadeInUp.animate}
                transition={transition(0.3)}
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/agendar" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full">
                    Hablar con un Arquitecto
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

        {/* Los 3 Escenarios de Dolor */}
        <section className="py-24 bg-zinc-100/80 dark:bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                  ¿En cuál de estos <span className="text-indigo-600 dark:text-indigo-400">escenarios</span> estás?
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                  No todos los problemas técnicos son iguales. Identificamos el tuyo y aplicamos la solución correcta.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {painScenarios.map((scenario, index) => (
                <AnimatedSection key={scenario.title} delay={0.1 * (index + 1)}>
                  <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-lg shadow-zinc-200/50 dark:shadow-none h-full flex flex-col">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6">
                      <scenario.icon className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                      {scenario.title}
                    </h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">
                      {scenario.question}
                    </p>
                    <p className="text-zinc-600 dark:text-zinc-400 flex-grow">
                      {scenario.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Tu Seguro de Calidad */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-white to-white dark:from-indigo-500/20 dark:via-zinc-900 dark:to-zinc-900 border-2 border-indigo-500/30 shadow-xl shadow-indigo-500/10">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    <ShieldCheck className="w-4 h-4" />
                    Tu Seguro de Calidad
                  </div>
                </div>

                <div className="text-center mt-4">
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
                    Corregir un error de arquitectura en la etapa final
                    <span className="text-red-500"> cuesta 100x más</span> que prevenirlo al inicio.
                  </h2>

                  <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
                    Nuestra consultoría <strong className="text-zinc-900 dark:text-zinc-100">se paga sola</strong> evitando
                    reescrituras, vulnerabilidades de seguridad y proyectos que nunca terminan.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 text-center">
                    <div className="p-4 rounded-xl bg-white/50 dark:bg-zinc-800/50">
                      <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">10x</div>
                      <div className="text-zinc-600 dark:text-zinc-400 text-sm">Más barato prevenir que corregir</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/50 dark:bg-zinc-800/50">
                      <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">60%</div>
                      <div className="text-zinc-600 dark:text-zinc-400 text-sm">De proyectos fallan por mala arquitectura</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/50 dark:bg-zinc-800/50">
                      <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">$0</div>
                      <div className="text-zinc-600 dark:text-zinc-400 text-sm">Costo de la evaluación inicial</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Formatos de Trabajo */}
        <section className="py-24 bg-zinc-100/80 dark:bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                  Formatos de <span className="text-indigo-600 dark:text-indigo-400">Trabajo</span>
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                  Claridad comercial: sabes exactamente qué contratas y qué recibes.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {workFormats.map((format, index) => (
                <AnimatedSection key={format.title} delay={0.1 * (index + 1)}>
                  <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-lg shadow-zinc-200/50 dark:shadow-none h-full flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6">
                      <format.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                      {format.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4 flex-grow">
                      {format.description}
                    </p>
                    <div className="p-3 rounded-xl bg-indigo-500/5 border border-indigo-500/20">
                      <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium">
                        {format.ideal}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Authority Trigger */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                  Más de 10 años diseñando sistemas críticos.
                </h2>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-2">
                  No adivinamos. <strong className="text-zinc-900 dark:text-zinc-100">Aplicamos ingeniería.</strong>
                </p>
                <p className="text-zinc-500 dark:text-zinc-500">
                  Banca, retail, logística, salud. Sistemas que no pueden fallar.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-zinc-100/80 dark:bg-zinc-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                ¿Necesitas una segunda opinión técnica?
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
                30 minutos con un arquitecto senior. Sin costo, sin compromiso.
                Analizamos tu situación y te damos recomendaciones concretas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/agendar" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full">
                    Hablar con un Arquitecto
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
