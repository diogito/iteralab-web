'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

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

export function HeroCorporate() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden" id="inicio">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />

      {/* Decorative gradient orb */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />

      {/* Spotlight effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/15 via-zinc-950/0 to-zinc-950/0 blur-3xl pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            {...fadeInUp}
            animate={fadeInUp.animate}
            transition={transition(0)}
            className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-400 px-4 py-2 rounded-full mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-sm font-medium">Consultora de Ingeniería de Software</span>
          </motion.div>

          {/* H1 Título */}
          <motion.h1
            {...fadeInUp}
            animate={fadeInUp.animate}
            transition={transition(0.1)}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
          >
            Ingeniería de Software para Empresas
            <span className="text-indigo-400"> que Escalan.</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            {...fadeInUp}
            animate={fadeInUp.animate}
            transition={transition(0.2)}
            className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            Unificamos tus sistemas, automatizamos procesos con IA y
            modernizamos tu infraestructura digital.
          </motion.p>

          {/* Botones */}
          <motion.div
            {...fadeInUp}
            animate={fadeInUp.animate}
            transition={transition(0.3)}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#servicios" className="w-full sm:w-auto">
              <Button size="lg" className="w-full">
                Explorar Soluciones
              </Button>
            </a>
            <Link href="/agendar" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full">
                Agendar Consultoría
              </Button>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            {...fadeInUp}
            animate={fadeInUp.animate}
            transition={transition(0.4)}
            className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-zinc-500"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Código Auditable</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Infraestructura Escalable</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Soporte Chile</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
