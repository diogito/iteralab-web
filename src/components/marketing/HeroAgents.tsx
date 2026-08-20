'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FileText,
  ScanLine,
  Database,
  Bell,
  CircleCheck,
  LoaderCircle,
} from 'lucide-react';
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

const TRUST_ITEMS = [
  'Tus datos en tu infraestructura',
  'Operan 24/7 sin descanso',
  'Supervisados por humanos',
];

const PIPELINE_STEPS = [
  { icon: FileText, label: 'Guía de despacho recibida' },
  { icon: ScanLine, label: 'Datos extraídos y validados' },
  { icon: Database, label: 'Registrado en el ERP' },
  { icon: Bell, label: 'Equipo notificado' },
];

const LOG_LINES = [
  '[agente] guía recibida → extrayendo datos… ok',
  '[agente] lead calificado → reunión agendada… ok',
  '[agente] turno asignado → cuadrilla notificada… ok',
  '[agente] consulta respondida → RAG privado… ok',
];

type StepStatus = 'completed' | 'active' | 'pending';

function ConsoleLog() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const line = LOG_LINES[lineIndex % LOG_LINES.length] ?? '';

  // Lightweight typewriter: type one char at a time, hold, then cycle.
  useEffect(() => {
    if (charCount < line.length) {
      const timeout = setTimeout(() => setCharCount((count) => count + 1), 40);
      return () => clearTimeout(timeout);
    }
    const timeout = setTimeout(() => {
      setLineIndex((index) => (index + 1) % LOG_LINES.length);
      setCharCount(0);
    }, 2200);
    return () => clearTimeout(timeout);
  }, [charCount, line.length]);

  return (
    <div className="mt-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/70 px-4 py-3 overflow-hidden">
      <p className="mono text-xs text-emerald-600 dark:text-emerald-400/90 break-words min-w-0 w-full">
        {line.slice(0, charCount)}
        <span className="inline-block w-1.5 h-3.5 ml-0.5 align-middle bg-emerald-500 dark:bg-emerald-400 animate-cursor-blink" />
      </p>
    </div>
  );
}

function AgentConsole() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((current) => (current + 1) % (PIPELINE_STEPS.length + 1));
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const statusOf = (index: number): StepStatus => {
    if (index < activeStep) return 'completed';
    if (index === activeStep) return 'active';
    return 'pending';
  };

  return (
    <div className="glass rounded-2xl border border-zinc-200 dark:border-indigo-500/20 shadow-xl shadow-zinc-200/50 dark:shadow-indigo-500/10 p-6">
      {/* Console header */}
      <div className="flex items-start gap-3 pb-4 border-b border-zinc-200 dark:border-zinc-800">
        <span className="relative flex h-2.5 w-2.5 mt-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <div>
          <p className="font-display font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
            Agente de Operaciones — Faena Norte
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
            Conectado a ERP · WhatsApp
          </p>
        </div>
      </div>

      {/* Pipeline steps */}
      <div className="pt-4 space-y-2">
        {PIPELINE_STEPS.map((step, index) => {
          const status = statusOf(index);
          return (
            <div
              key={step.label}
              className={`flex items-center gap-3 rounded-xl border px-4 py-3 transition-all duration-500 ${
                status === 'completed'
                  ? 'border-emerald-500/30 bg-emerald-500/5'
                  : status === 'active'
                    ? 'border-indigo-500/40 bg-indigo-500/10'
                    : 'border-zinc-200 dark:border-zinc-800 opacity-50'
              }`}
            >
              <step.icon className="w-4 h-4 text-zinc-500 dark:text-zinc-400 flex-shrink-0" />
              <span className="text-sm text-zinc-700 dark:text-zinc-300 flex-1">
                {step.label}
              </span>
              {status === 'completed' && (
                <CircleCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              )}
              {status === 'active' && (
                <LoaderCircle className="w-4 h-4 text-indigo-500 animate-spin flex-shrink-0" />
              )}
            </div>
          );
        })}
      </div>

      {/* Live agent log (typewriter) */}
      <ConsoleLog />

      {/* Console footer */}
      <p className="pt-4 text-xs text-zinc-500 dark:text-zinc-400 text-center animate-pulse-soft">
        Procesando automáticamente, sin intervención manual
      </p>
    </div>
  );
}

export function HeroAgents() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden" id="inicio">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-50 to-white dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950" />

      {/* Decorative gradient orb */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 dark:from-indigo-900/20 via-transparent to-transparent" />

      {/* Spotlight effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 dark:from-indigo-500/15 via-transparent to-transparent blur-3xl pointer-events-none" />

      {/* Secondary violet/cyan orbs */}
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-violet-500/10 dark:bg-violet-600/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-32 w-[450px] h-[450px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/5 blur-3xl pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32 md:pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-w-0">
          {/* Left column: copy */}
          <div className="min-w-0 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              {...fadeInUp}
              animate={fadeInUp.animate}
              transition={transition(0)}
              className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-sm font-medium">Iteralab · Estudio de Agentes de IA</span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              {...fadeInUp}
              animate={fadeInUp.animate}
              transition={transition(0.1)}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
            >
              Tu empresa, operada por{' '}
              <span className="text-gradient">agentes de IA</span>.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              {...fadeInUp}
              animate={fadeInUp.animate}
              transition={transition(0.2)}
              className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto lg:mx-0"
            >
              No vendemos software genérico. Construimos agentes de inteligencia
              artificial que atienden, leen, deciden y ejecutan — conectados a tu
              ERP, tu WhatsApp y tu operación real.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeInUp}
              animate={fadeInUp.animate}
              transition={transition(0.3)}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/agendar" className="w-full sm:w-auto">
                <Button size="lg" className="w-full">
                  Crear mi agente
                </Button>
              </Link>
              <a href="#agentes" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full">
                  Ver agentes en acción
                </Button>
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              {...fadeInUp}
              animate={fadeInUp.animate}
              transition={transition(0.4)}
              className="mt-12 flex flex-col md:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 md:gap-6 text-sm text-zinc-500"
            >
              {TRUST_ITEMS.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CircleCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column: agent console */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition(0.4)}
            className="min-w-0 max-w-md mx-auto w-full lg:max-w-none"
          >
            <AgentConsole />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
