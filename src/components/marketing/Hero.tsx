'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
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

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden" id="inicio">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />

      {/* Decorative gradient orb */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />

      {/* Spotlight effect behind H1 */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-zinc-950/0 to-zinc-950/0 blur-3xl pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Badge WaaS */}
            <motion.div
              {...fadeInUp}
              animate={fadeInUp.animate}
              transition={transition(0)}
              className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-400 px-4 py-2 rounded-full mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-sm font-medium">WaaS - Web as a Service</span>
            </motion.div>

            {/* H1 Título */}
            <motion.h1
              {...fadeInUp}
              animate={fadeInUp.animate}
              transition={transition(0.1)}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Proyecta la satisfacción que tu empresa
              <span className="text-indigo-400"> merece.</span>
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              {...fadeInUp}
              animate={fadeInUp.animate}
              transition={transition(0.2)}
              className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-xl"
            >
              Desarrollo web de alto rendimiento. Convertimos visitas en clientes
              con sitios rápidos, seguros y diseñados para vender.
            </motion.p>

            {/* Botones */}
            <motion.div
              {...fadeInUp}
              animate={fadeInUp.animate}
              transition={transition(0.3)}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a href="#precios" className="w-full sm:w-auto">
                <Button size="lg" className="w-full">
                  Ver Planes
                </Button>
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full">
                  Agendar Llamada
                </Button>
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              {...fadeInUp}
              animate={fadeInUp.animate}
              transition={transition(0.4)}
              className="mt-12 flex items-center gap-6 text-sm text-zinc-500"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Máxima Seguridad</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>99.9% Uptime Garantizado</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Soporte Chile</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Visual - CSS Gradient Art */}
          <AnimatedSection delay={0.2} className="hidden lg:block">
            <div className="relative">
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-8 border border-zinc-700/50 shadow-2xl">
                {/* Browser dots */}
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
                </div>

                {/* Code-like content */}
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-400">const</span>
                    <span className="text-zinc-300">performance</span>
                    <span className="text-zinc-500">=</span>
                    <span className="text-green-400">&apos;100/100&apos;</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-400">const</span>
                    <span className="text-zinc-300">security</span>
                    <span className="text-zinc-500">=</span>
                    <span className="text-green-400">&apos;A+&apos;</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-400">const</span>
                    <span className="text-zinc-300">uptime</span>
                    <span className="text-zinc-500">=</span>
                    <span className="text-green-400">&apos;99.99%&apos;</span>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-500/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-600/10 rounded-full blur-3xl"></div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-6 right-8 bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg shadow-indigo-500/25">
                Web Vitals 100
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
