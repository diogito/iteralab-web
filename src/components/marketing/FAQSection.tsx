'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { cn } from '@/lib/utils';

export const FAQ_ITEMS = [
  {
    question: '¿Qué es un agente de IA y en qué se diferencia de un chatbot?',
    answer:
      'Un chatbot solo conversa. Un agente ejecuta tareas: se conecta a tus sistemas (ERP, CRM, WhatsApp), lee documentos, registra datos y coordina pasos de un proceso, siguiendo reglas definidas y escalando a una persona cuando corresponde.',
  },
  {
    question: '¿Cuánto tarda la implementación?',
    answer:
      'El primer piloto —un proceso real y acotado— suele estar funcionando en semanas. El plazo depende de la complejidad del proceso y de las integraciones disponibles; lo estimamos en el diagnóstico.',
  },
  {
    question: '¿Qué pasa con mis datos?',
    answer:
      'Quedan bajo tu control. Trabajamos con arquitectura privada en tu infraestructura o en una nube dedicada a tu operación. Tus datos no se usan para entrenar modelos de terceros.',
  },
  {
    question: '¿Con qué sistemas se integra?',
    answer:
      'ERP, CRM, planillas, WhatsApp, correo y APIs internas. Si un sistema no tiene API, evaluamos alternativas como lectura de documentos o acceso directo a su base de datos.',
  },
  {
    question: '¿Necesito equipo técnico interno?',
    answer:
      'No. Nosotros construimos, integramos y mantenemos el agente. Tu equipo lo usa y lo supervisa desde interfaces simples, sin conocimientos de programación.',
  },
  {
    question: '¿Cómo se mide el resultado?',
    answer:
      'Con indicadores acordados antes de partir: horas ahorradas, tiempo de respuesta, tasa de errores y casos procesados. El agente genera sus propios reportes de gestión.',
  },
  {
    question: '¿Cuánto cuesta?',
    answer:
      'Depende del alcance del proceso y de las integraciones requeridas. En el diagnóstico gratuito levantamos el caso y cotizamos un piloto acotado, con precio claro y sin letra chica.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
              Preguntas <span className="text-indigo-600 dark:text-indigo-400">frecuentes</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg">
              Lo que nos preguntan antes de partir.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.question}
                  className={cn(
                    'rounded-2xl border transition-colors duration-300 bg-white dark:bg-zinc-900/50',
                    isOpen
                      ? 'border-indigo-500/50 shadow-lg shadow-zinc-200/50 dark:shadow-none'
                      : 'border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/30'
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display font-semibold text-zinc-900 dark:text-zinc-100">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 transition-transform duration-300',
                        isOpen && 'rotate-180'
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
