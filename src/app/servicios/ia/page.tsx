'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Bot, MessageSquare, FileSearch, Brain, Shield, Building, Truck, Scale, Cpu, Database, Code, ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';
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

const pillars = [
  {
    icon: MessageSquare,
    title: 'Asistentes Comerciales',
    subtitle: 'Ventas 24/7',
    description: 'Nunca más pierdas un cliente por no contestar el WhatsApp a tiempo. Agentes inteligentes que califican leads, agendan reuniones y responden dudas técnicas sin descanso.',
    highlight: 'Respuesta inmediata = más cierres',
  },
  {
    icon: FileSearch,
    title: 'Procesamiento Documental',
    subtitle: 'Back-Office Automatizado',
    description: '¿Sigues digitando facturas o guías de despacho a mano? Nuestra IA extrae datos de PDFs y fotos, y los inyecta en tu ERP automáticamente.',
    highlight: 'Adiós al error de dedo',
  },
  {
    icon: Brain,
    title: 'Cerebros Corporativos',
    subtitle: 'RAG Empresarial',
    description: 'Tus manuales, procedimientos y datos históricos, accesibles en un chat. Convierte tu base de conocimientos en un oráculo instantáneo para tus empleados.',
    highlight: 'Tu empresa, en un prompt',
  },
];

const useCases = [
  {
    icon: Building,
    industry: 'Inmobiliarias',
    useCase: 'Agendamiento automático de visitas desde WhatsApp y portales',
  },
  {
    icon: Truck,
    industry: 'Logística',
    useCase: 'Lectura automática de guías de despacho, patentes y manifiestos',
  },
  {
    icon: Scale,
    industry: 'Legal / Contable',
    useCase: 'Clasificación y extracción de datos de documentos masivos',
  },
];

const techStack = [
  { icon: Cpu, name: 'OpenAI API', description: 'GPT-4 para razonamiento complejo' },
  { icon: Bot, name: 'Anthropic Claude', description: 'Contextos largos y análisis' },
  { icon: Code, name: 'LangChain', description: 'Orquestación de agentes' },
  { icon: Database, name: 'Vector DBs', description: 'Pinecone, Weaviate, pgvector' },
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
                <span className="text-sm font-medium">Inteligencia Artificial Aplicada a Negocios</span>
              </motion.div>

              <motion.h1
                {...fadeInUp}
                animate={fadeInUp.animate}
                transition={transition(0.1)}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
              >
                Tu mejor empleado trabaja 24/7, no se cansa
                <span className="text-indigo-600 dark:text-indigo-400"> y procesa datos en milisegundos.</span>
              </motion.h1>

              <motion.p
                {...fadeInUp}
                animate={fadeInUp.animate}
                transition={transition(0.2)}
                className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto"
              >
                Deja de desperdiciar talento humano en tareas de robot. Implementamos Agentes de IA
                que atienden clientes, leen documentos y automatizan flujos complejos sin supervisión.
              </motion.p>

              <motion.div
                {...fadeInUp}
                animate={fadeInUp.animate}
                transition={transition(0.3)}
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/agendar" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full">
                    Evaluar mis Procesos
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

        {/* Los 3 Pilares de Automatización */}
        <section className="py-24 bg-zinc-100/80 dark:bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                  Los 3 Pilares de <span className="text-indigo-600 dark:text-indigo-400">Automatización</span>
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                  IA que resuelve problemas reales de negocio. Sin hype, sin experimentos. Resultados medibles.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <AnimatedSection key={pillar.title} delay={0.1 * (index + 1)}>
                  <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-lg shadow-zinc-200/50 dark:shadow-none h-full flex flex-col">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6">
                      <pillar.icon className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
                      {pillar.subtitle}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-6 flex-grow">
                      {pillar.description}
                    </p>
                    <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                      <p className="text-green-700 dark:text-green-400 font-medium text-sm">
                        {pillar.highlight}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Realidad vs Hype */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-white to-white dark:from-indigo-500/20 dark:via-zinc-900 dark:to-zinc-900 border-2 border-indigo-500/30 shadow-xl shadow-indigo-500/10">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    <Shield className="w-4 h-4" />
                    Realidad vs Hype
                  </div>
                </div>

                <div className="text-center mt-4">
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
                    No instalamos un <span className="text-red-500 line-through">ChatGPT genérico</span>
                  </h2>

                  <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
                    Construimos <strong className="text-zinc-900 dark:text-zinc-100">Arquitectura de IA privada y segura</strong>,
                    conectada a TUS datos reales y entrenada con TU contexto de negocio.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
                    <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                      <p className="text-red-600 dark:text-red-400 font-medium text-sm flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        ChatGPT público: Tus datos van a OpenAI
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/20">
                      <p className="text-green-700 dark:text-green-400 font-medium text-sm flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        Nuestra IA: Tus datos quedan en TU infraestructura
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                      <p className="text-red-600 dark:text-red-400 font-medium text-sm flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        Respuestas genéricas sin contexto
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/20">
                      <p className="text-green-700 dark:text-green-400 font-medium text-sm flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        Respuestas precisas con tu información interna
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Casos de Uso Reales */}
        <section className="py-24 bg-zinc-100/80 dark:bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                  Casos de <span className="text-indigo-600 dark:text-indigo-400">Uso Real</span>
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                  IA funcionando en empresas chilenas hoy. No proyectos piloto eternos.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6">
              {useCases.map((item, index) => (
                <AnimatedSection key={item.industry} delay={0.1 * (index + 1)}>
                  <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-lg shadow-zinc-200/50 dark:shadow-none h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-zinc-900 dark:text-zinc-100">
                        {item.industry}
                      </h3>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      {item.useCase}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Stack Tecnológico */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                  Stack <span className="text-indigo-600 dark:text-indigo-400">Tecnológico</span>
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                  Esto es ingeniería de producción, no juguetes de laboratorio.
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
                ¿Qué procesos de tu empresa podrían automatizarse?
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
                Te ayudamos a identificar las oportunidades de automatización con mayor ROI.
                Evaluación gratuita de 30 minutos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/agendar" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full">
                    Evaluar mis Procesos
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
