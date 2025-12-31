'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Monitor, Smartphone, Zap, AlertTriangle, CheckCircle, Search, Layout, Code2, Award, TrendingUp, Clock, Building2, ShoppingBag, Target, ArrowRight, Eye } from 'lucide-react';
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

const methodology = [
  {
    icon: Search,
    step: '01',
    title: 'Diagnóstico Express',
    description: 'Escaneamos tu web actual y te mostramos exactamente qué está mal. Velocidad, móvil, SEO, diseño. Gratis, sin compromiso.',
  },
  {
    icon: Layout,
    step: '02',
    title: 'Prototipo Real',
    description: 'No vendemos PowerPoints. Te mostramos TU sitio nuevo funcionando en un enlace privado. Si no te gusta, no pagas nada.',
  },
  {
    icon: Code2,
    step: '03',
    title: 'Desarrollo Moderno',
    description: 'Next.js, Tailwind, optimización SEO incluida. Hosting y dominio gestionado. Entrega en semanas, no meses.',
  },
];

const benefits = [
  {
    icon: Award,
    title: 'Imagen Profesional',
    description: 'Primera impresión correcta. Tu web refleja la calidad real de tu empresa, no el diseño de hace 10 años.',
  },
  {
    icon: TrendingUp,
    title: 'Más Conversiones',
    description: 'Visitantes que se convierten en consultas. Llamados a acción claros, formularios que funcionan, WhatsApp integrado.',
  },
  {
    icon: Clock,
    title: 'Velocidad Real',
    description: 'Google te premia con mejor posicionamiento. Tus usuarios no abandonan por frustración. Tecnología optimizada para tiempos de respuesta inmediatos.',
  },
];

const useCases = [
  {
    icon: Building2,
    title: 'Sitios Corporativos',
    description: 'Para empresas establecidas que necesitan presencia seria. Múltiples páginas, servicios, equipo, contacto.',
  },
  {
    icon: ShoppingBag,
    title: 'Catálogos Digitales',
    description: 'Para distribuidores que quieren mostrar productos. Fotos, fichas técnicas, PDF descargables, sin ecommerce complejo.',
  },
  {
    icon: Target,
    title: 'Landing Pages',
    description: 'Para campañas de marketing específicas. Una página, un objetivo, máxima conversión. Ideal para promociones.',
  },
];

export default function ModernizacionWebPage() {
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
                <Monitor className="w-4 h-4" />
                <span className="text-sm font-medium">Renovación y Diseño Web Estratégico</span>
              </motion.div>

              <motion.h1
                {...fadeInUp}
                animate={fadeInUp.animate}
                transition={transition(0.1)}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
              >
                ¿Tu sitio web actual representa
                <span className="text-indigo-600 dark:text-indigo-400"> la calidad real de tu empresa?</span>
              </motion.h1>

              <motion.p
                {...fadeInUp}
                animate={fadeInUp.animate}
                transition={transition(0.2)}
                className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto"
              >
                Tu web es tu vitrina digital. Si luce de 2015, tus clientes asumen que tu negocio
                también está atrasado. Creamos sitios modernos que generan confianza desde el primer clic.
              </motion.p>

              <motion.div
                {...fadeInUp}
                animate={fadeInUp.animate}
                transition={transition(0.3)}
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/agendar" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full">
                    Ver mi Diagnóstico Gratis
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

        {/* La Web Zombie - Problem vs Solution */}
        <section className="py-24 bg-zinc-100/80 dark:bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                  ¿Tu web es una <span className="text-red-500">Zombie</span>?
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                  Si tu sitio no vende, solo ocupa espacio en internet. Compara y decide.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection>
                <div className="p-8 rounded-2xl bg-red-500/5 border border-red-500/20 h-full">
                  <h3 className="font-display text-xl font-semibold text-red-500 dark:text-red-400 mb-6">
                    Señales de Web Obsoleta
                  </h3>
                  <ul className="space-y-4 text-zinc-600 dark:text-zinc-400">
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-zinc-900 dark:text-zinc-100">No se ve bien en celular</strong> — Google te penaliza y pierdes el 70% de tus visitas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-zinc-900 dark:text-zinc-100">Carga lento</strong> — Cada segundo extra = 7% menos conversiones</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-zinc-900 dark:text-zinc-100">Diseño anticuado</strong> — Los usuarios lo notan en 0.05 segundos y desconfían</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-zinc-900 dark:text-zinc-100">Sin llamados a acción claros</strong> — Las visitas llegan pero no contactan</span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="p-8 rounded-2xl bg-green-500/5 border border-green-500/20 h-full">
                  <h3 className="font-display text-xl font-semibold text-green-600 dark:text-green-400 mb-6">
                    Web que Trabaja para Ti
                  </h3>
                  <ul className="space-y-4 text-zinc-600 dark:text-zinc-400">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-zinc-900 dark:text-zinc-100">Mobile-first</strong> — Diseñado primero para celular, donde están tus clientes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-zinc-900 dark:text-zinc-100">Carga instantánea y fluida</strong> — Tecnología moderna, hosting optimizado</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-zinc-900 dark:text-zinc-100">Diseño profesional</strong> — Percepción de empresa seria y confiable</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-zinc-900 dark:text-zinc-100">CTAs estratégicos</strong> — Botones, formularios y WhatsApp que convierten</span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Metodología - Sin Riesgo */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-white to-white dark:from-indigo-500/20 dark:via-zinc-900 dark:to-zinc-900 border-2 border-indigo-500/30 shadow-xl shadow-indigo-500/10">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    <Eye className="w-4 h-4" />
                    Sin Riesgo: Ves el resultado antes de pagar
                  </div>
                </div>

                <div className="text-center mt-4 mb-12">
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                    Nuestra Metodología
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
                    No pedimos un peso hasta que veas tu nuevo sitio funcionando.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {methodology.map((step, index) => (
                    <div key={step.title} className="text-center">
                      <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-4 mx-auto">
                        <step.icon className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                        PASO {step.step}
                      </div>
                      <h3 className="font-display text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Beneficios Tangibles */}
        <section className="py-24 bg-zinc-100/80 dark:bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                  Beneficios <span className="text-indigo-600 dark:text-indigo-400">Tangibles</span>
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                  No solo te damos una web bonita. Te damos una herramienta de ventas.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <AnimatedSection key={benefit.title} delay={0.1 * (index + 1)}>
                  <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-lg shadow-zinc-200/50 dark:shadow-none h-full">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6">
                      <benefit.icon className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      {benefit.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Casos de Uso */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                  ¿Qué tipo de <span className="text-indigo-600 dark:text-indigo-400">sitio</span> necesitas?
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                  Cada negocio es distinto. Te recomendamos la solución que realmente necesitas.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <AnimatedSection key={useCase.title} delay={0.1 * (index + 1)}>
                  <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 transition-colors shadow-lg shadow-zinc-200/50 dark:shadow-none h-full">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4">
                      <useCase.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                      {useCase.description}
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
                ¿Quieres ver cómo luciría tu sitio renovado?
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
                Te enviamos un diagnóstico gratuito con propuesta visual en 48 horas.
                Sin compromiso, sin letra chica.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/agendar" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full">
                    Solicitar Diagnóstico Gratis
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
