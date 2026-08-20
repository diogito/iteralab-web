'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Bot } from 'lucide-react';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { AgentRoster } from '@/components/marketing/AgentRoster';
import { AgentCapabilities } from '@/components/marketing/AgentCapabilities';
import { IndustriesSection } from '@/components/marketing/IndustriesSection';
import { SecuritySection } from '@/components/marketing/SecuritySection';
import { ProcessSection } from '@/components/marketing/ProcessSection';
import { TechStack } from '@/components/marketing/TechStack';
import { CTASection } from '@/components/marketing/CTASection';
import { Button } from '@/components/ui/Button';
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
                <span className="text-sm font-medium">Agentes de IA para Procesos</span>
              </motion.div>

              <motion.h1
                {...fadeInUp}
                animate={fadeInUp.animate}
                transition={transition(0.1)}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
              >
                Agentes de IA que
                <span className="text-gradient"> trabajan por ti</span> 24/7.
              </motion.h1>

              <motion.p
                {...fadeInUp}
                animate={fadeInUp.animate}
                transition={transition(0.2)}
                className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto"
              >
                Libera a tu equipo del trabajo repetitivo. Diseñamos agentes de IA que
                atienden clientes, procesan documentos y coordinan operaciones,
                integrados a tus sistemas y con tus datos bajo tu control.
              </motion.p>

              <motion.div
                {...fadeInUp}
                animate={fadeInUp.animate}
                transition={transition(0.3)}
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/agendar" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full">
                    Agendar diagnóstico gratuito
                  </Button>
                </Link>
                <a href="#industrias" className="w-full sm:w-auto">
                  <Button variant="secondary" size="lg" className="w-full">
                    Ver casos por industria
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        <AgentRoster />
        <AgentCapabilities />
        <IndustriesSection />
        <SecuritySection />
        <ProcessSection />
        <TechStack />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
