'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Plug, AlertTriangle, Eye, FileSpreadsheet, Map, ArrowRight, CheckCircle, Shield } from 'lucide-react';
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

const capabilities = [
  {
    icon: Plug,
    title: 'ERPs Antiguos',
    description: 'Softland, Defontana, SAP, sistemas SQL Server. Si tu contador lo usa, nosotros lo conectamos.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Excels y Archivos Planos',
    description: 'Automatizamos la lectura de planillas que hoy se procesan a mano. Cero errores de tipeo.',
  },
  {
    icon: Eye,
    title: 'Visibilidad en Tiempo Real',
    description: 'Dashboards que muestran lo que pasa HOY, no lo que pasó la semana pasada.',
  },
];

export default function IntegracionesPage() {
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
                <Plug className="w-4 h-4" />
                <span className="text-sm font-medium">Conectividad Operacional</span>
              </motion.div>

              <motion.h1
                {...fadeInUp}
                animate={fadeInUp.animate}
                transition={transition(0.1)}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
              >
                Tu negocio funciona bien.
                <span className="text-indigo-600 dark:text-indigo-400"> Con tecnología, funcionará el doble.</span>
              </motion.h1>

              <motion.p
                {...fadeInUp}
                animate={fadeInUp.animate}
                transition={transition(0.2)}
                className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto"
              >
                Rompe el techo de crecimiento. Conectamos tu ERP antiguo, tus Excels y tu operación diaria
                para que dejes de perder dinero en tareas manuales.
              </motion.p>

              <motion.div
                {...fadeInUp}
                animate={fadeInUp.animate}
                transition={transition(0.3)}
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/agendar" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full">
                    Agendar Evaluación
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

        {/* Problem Section - La Resistencia */}
        <section className="py-24 bg-zinc-100/80 dark:bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <AnimatedSection>
                <div className="p-8 rounded-2xl bg-red-500/5 border border-red-500/20">
                  <h3 className="font-display text-xl font-semibold text-red-500 dark:text-red-400 mb-4">
                    La Resistencia al Cambio
                  </h3>
                  <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      &quot;Siempre lo hemos hecho así&quot; - y así seguirás perdiendo horas
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      Miedo a tocar el sistema antiguo que &quot;funciona&quot;
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      Planillas Excel propensas a error que nadie quiere auditar
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      Ceguera de datos: decisiones basadas en información de hace una semana
                    </li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="p-8 rounded-2xl bg-green-500/5 border border-green-500/20">
                  <h3 className="font-display text-xl font-semibold text-green-600 dark:text-green-400 mb-4">
                    Ingeniería de Rescate
                  </h3>
                  <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-zinc-900 dark:text-zinc-100">Integramos lo inintegrable:</strong> Softland, Defontana, SQL Server, Archivos Planos, Maquinaria IoT</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      Sin tocar tu sistema actual - conectamos por encima, sin riesgo
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      Validación automática que detecta errores antes que tu contador
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      Si genera datos, lo conectamos. Punto.
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Plan Maestro Section - La Oferta Irresistible */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-white to-white dark:from-indigo-500/20 dark:via-zinc-900 dark:to-zinc-900 border-2 border-indigo-500/30 shadow-xl shadow-indigo-500/10">
                {/* Badge destacado */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    <Map className="w-4 h-4" />
                    El Plan Maestro
                  </div>
                </div>

                <div className="text-center mt-4">
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                    ¿Miedo a invertir a ciegas?
                    <span className="text-indigo-600 dark:text-indigo-400"> Empieza con el Mapa.</span>
                  </h2>

                  <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
                    No iniciamos escribiendo código. Vamos a tu empresa, mapeamos tus sistemas desconectados
                    y te entregamos un <strong className="text-zinc-900 dark:text-zinc-100">PDF con el Plan Maestro de Arquitectura</strong>.
                    Un diagnóstico técnico completo con presupuesto cerrado.
                  </p>

                  {/* Garantía destacada */}
                  <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/30 text-green-700 dark:text-green-400 px-6 py-3 rounded-xl mb-8">
                    <Shield className="w-5 h-5" />
                    <span className="font-semibold">
                      Garantía Iteralab: Si contratas la implementación, te descontamos el 100% del costo del diagnóstico.
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/agendar" className="w-full sm:w-auto">
                      <Button size="lg" className="w-full">
                        Solicitar Plan Maestro
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-24 bg-zinc-100/80 dark:bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                  ¿Qué <span className="text-indigo-600 dark:text-indigo-400">Conectamos</span>?
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                  Agro, Logística, Industria. Si tu empresa mueve productos o datos, tenemos experiencia.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <AnimatedSection key={capability.title} delay={0.1 * (index + 1)}>
                  <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 transition-colors shadow-lg shadow-zinc-200/50 dark:shadow-none h-full">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4">
                      <capability.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                      {capability.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                Tu competencia ya está automatizando.
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
                Cada día que esperas, pierdes horas en tareas que una máquina hace en segundos.
                La evaluación inicial es gratuita.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/agendar" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full">
                    Agendar Evaluación Gratuita
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
