'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code2, FileSpreadsheet, CreditCard, Building2, Blocks, Server, Database, Smartphone, Container, ArrowRight, CheckCircle } from 'lucide-react';
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

const techStack = [
  {
    icon: Server,
    name: '.NET Core',
    description: 'Backend robusto y escalable',
  },
  {
    icon: Smartphone,
    name: 'Flutter',
    description: 'Apps móviles para terreno',
  },
  {
    icon: Database,
    name: 'SQL Server',
    description: 'Base de datos empresarial',
  },
  {
    icon: Container,
    name: 'Docker',
    description: 'Despliegue estandarizado',
  },
];

export default function SoftwareAMedidaPage() {
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
                <Code2 className="w-4 h-4" />
                <span className="text-sm font-medium">Desarrollo de Software Corporativo</span>
              </motion.div>

              <motion.h1
                {...fadeInUp}
                animate={fadeInUp.animate}
                transition={transition(0.1)}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
              >
                No te adaptes al software.
                <span className="text-indigo-600 dark:text-indigo-400"> Haz que el software se adapte a tu negocio.</span>
              </motion.h1>

              <motion.p
                {...fadeInUp}
                animate={fadeInUp.animate}
                transition={transition(0.2)}
                className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto"
              >
                Deja de luchar con Excels que colapsan o sistemas arrendados rígidos.
                Diseñamos la herramienta exacta que tu operación necesita. Tuyo, sin licencias mensuales eternas.
              </motion.p>

              <motion.div
                {...fadeInUp}
                animate={fadeInUp.animate}
                transition={transition(0.3)}
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/agendar" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full">
                    Cotizar mi Proyecto
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

        {/* El Doble Problema: Excel vs SaaS */}
        <section className="py-24 bg-zinc-100/80 dark:bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                  El <span className="text-red-500 dark:text-red-400">Doble Problema</span>
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                  Tu empresa está atrapada entre dos males: herramientas que se quedan cortas o sistemas que te cobran de más.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Dolor 1: Excel */}
              <AnimatedSection>
                <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-lg shadow-zinc-200/50 dark:shadow-none h-full">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6">
                    <FileSpreadsheet className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                    El Techo del Excel
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                    ¿Tu negocio depende de una planilla que solo una persona entiende?
                    Si se borra una fórmula, se detiene la operación.
                  </p>
                  <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                    <p className="text-red-600 dark:text-red-400 font-medium text-sm">
                      El Excel no es una base de datos. Es una bomba de tiempo.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Dolor 2: SaaS */}
              <AnimatedSection delay={0.1}>
                <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-lg shadow-zinc-200/50 dark:shadow-none h-full">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6">
                    <CreditCard className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                    La Trampa del Arriendo
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                    ¿Pagas mensualidades por un software gigante del que solo usas el 10%?
                    ¿Tienes que cambiar tu forma de trabajar porque el sistema no te deja hacer lo que quieres?
                  </p>
                  <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                    <p className="text-red-600 dark:text-red-400 font-medium text-sm">
                      Estás pagando por funciones que nunca usarás. Para siempre.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* La Solución: Construye tu Activo */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-white to-white dark:from-indigo-500/20 dark:via-zinc-900 dark:to-zinc-900 border-2 border-indigo-500/30 shadow-xl shadow-indigo-500/10">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    <Building2 className="w-4 h-4" />
                    La Solución
                  </div>
                </div>

                <div className="text-center mt-4">
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
                    Construye tu <span className="text-indigo-600 dark:text-indigo-400">Activo Digital</span>
                  </h2>

                  <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
                    Igual que construyes un galpón o compras maquinaria, el software a medida es
                    <strong className="text-zinc-900 dark:text-zinc-100"> patrimonio de tu empresa</strong>.
                    Una inversión que se queda contigo.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-6 text-left">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-zinc-700 dark:text-zinc-300 text-sm">Escala contigo sin cobros extra por usuario</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-zinc-700 dark:text-zinc-300 text-sm">Hace exactamente lo que tu operación necesita</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-zinc-700 dark:text-zinc-300 text-sm">El código es tuyo, sin dependencia de terceros</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Metodología: Desarrollo Modular Progresivo */}
        <section className="py-24 bg-zinc-100/80 dark:bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full mb-6">
                  <Blocks className="w-4 h-4" />
                  <span className="text-sm font-medium">Nuestra Metodología</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
                  Desarrollo Modular <span className="text-indigo-600 dark:text-indigo-400">Progresivo</span>
                </h2>

                <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-6">
                  El mayor miedo es un proyecto largo y costoso que nunca termina.
                  Por eso trabajamos diferente:
                </p>

                <p className="text-zinc-700 dark:text-zinc-300 text-lg font-medium mb-8">
                  No necesitas invertir millones el primer día. Trabajamos por módulos.
                  Primero el núcleo crítico (MVP), lo pruebas, lo usas, y luego expandimos.
                </p>

                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
                  <p className="text-green-700 dark:text-green-400 font-semibold">
                    Resultados visibles en semanas, no en años.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="space-y-4">
                  {[
                    { step: '1', title: 'Diagnóstico', desc: 'Entendemos tu operación y definimos el alcance mínimo viable' },
                    { step: '2', title: 'MVP en Producción', desc: 'Construimos el núcleo y lo pones a trabajar en semanas' },
                    { step: '3', title: 'Iteración', desc: 'Ajustamos según feedback real de tu equipo' },
                    { step: '4', title: 'Expansión', desc: 'Agregamos módulos según necesidades comprobadas' },
                  ].map((item, index) => (
                    <div
                      key={item.step}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-lg shadow-zinc-200/50 dark:shadow-none"
                    >
                      <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-zinc-900 dark:text-zinc-100">
                          {item.title}
                        </h4>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Stack Tecnológico */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                  Tecnología <span className="text-indigo-600 dark:text-indigo-400">Empresarial</span>
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                  Construimos con herramientas probadas en entornos corporativos exigentes.
                  Robustez, seguridad y escalabilidad garantizadas.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStack.map((tech, index) => (
                <AnimatedSection key={tech.name} delay={0.1 * (index + 1)}>
                  <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 transition-colors shadow-lg shadow-zinc-200/50 dark:shadow-none text-center h-full">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 mx-auto">
                      <tech.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                      {tech.name}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                      {tech.description}
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
                ¿Listo para dejar de arrendar y empezar a construir?
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
                Conversemos sobre tu operación. Te entregamos una propuesta técnica y económica sin compromiso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/agendar" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full">
                    Cotizar mi Proyecto
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
