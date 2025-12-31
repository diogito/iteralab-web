'use client';

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { BookingWidget } from '@/components/booking/BookingWidget';
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

export default function AgendarPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-zinc-950 pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              {...fadeInUp}
              animate={fadeInUp.animate}
              transition={transition(0)}
              className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full mb-6"
            >
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">Consultoría Gratuita</span>
            </motion.div>

            <motion.h1
              {...fadeInUp}
              animate={fadeInUp.animate}
              transition={transition(0.1)}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-zinc-100"
            >
              Agenda tu Consultoría{' '}
              <span className="text-indigo-600 dark:text-indigo-400">Estratégica</span>
            </motion.h1>

            <motion.p
              {...fadeInUp}
              animate={fadeInUp.animate}
              transition={transition(0.2)}
              className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
            >
              30 minutos para analizar tu infraestructura y definir el plan de acción.
            </motion.p>
          </div>

          {/* Calendar Widget */}
          <motion.div
            {...fadeInUp}
            animate={fadeInUp.animate}
            transition={transition(0.3)}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 overflow-hidden min-h-[700px] shadow-lg shadow-zinc-200/50 dark:shadow-none"
          >
            <BookingWidget />
          </motion.div>

          {/* Additional Info */}
          <motion.p
            {...fadeInUp}
            animate={fadeInUp.animate}
            transition={transition(0.4)}
            className="text-center text-zinc-500 text-sm mt-8"
          >
            ¿Prefieres escribirnos directamente? Usa el botón de WhatsApp en la esquina.
          </motion.p>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
