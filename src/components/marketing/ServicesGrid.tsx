'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bot, Plug, Code2, Shield, Globe, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { cn } from '@/lib/utils';

const services = [
  {
    title: 'Agentes de IA para Procesos',
    overline: '',
    description:
      'El corazón de Iteralab: agentes que atienden, procesan y coordinan. El resto de nuestros servicios existen para que tus agentes operen sobre sistemas sólidos.',
    href: '/servicios/ia',
    icon: Bot,
    featured: true,
  },
  {
    title: 'Integraciones y APIs',
    overline: 'Fundación',
    description: 'Conectamos tu ERP/CRM para que tus agentes actúen.',
    href: '/servicios/integraciones',
    icon: Plug,
    featured: false,
  },
  {
    title: 'Software a Medida',
    overline: 'Fundación',
    description: 'Construimos las piezas que tu agente necesita.',
    href: '/servicios/software-a-medida',
    icon: Code2,
    featured: false,
  },
  {
    title: 'Consultoría Técnica',
    overline: 'Fundación',
    description: 'Definimos qué procesos automatizar primero.',
    href: '/servicios/consultoria',
    icon: Shield,
    featured: false,
  },
  {
    title: 'Modernización Web',
    overline: 'Fundación',
    description: 'Una base rápida y segura para operar.',
    href: '/servicios/modernizacion-web',
    icon: Globe,
    featured: false,
  },
];

export function ServicesGrid() {
  return (
    <section id="servicios" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-50/50 to-white dark:from-zinc-950 dark:via-zinc-900/50 dark:to-zinc-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
              Todo gira en torno a tus <span className="text-gradient">agentes</span>.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
              Agentes de IA al centro, y cada servicio construido para sostenerlos.
              Un solo partner para automatizar tu operación.
            </p>
          </div>
        </AnimatedSection>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              delay={0.1 * (index % 3)}
              className={service.featured ? 'h-full md:col-span-2 lg:col-span-2' : 'h-full'}
            >
              <Link href={service.href} className="block h-full">
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    'relative h-full rounded-2xl group cursor-pointer',
                    service.featured &&
                      'bg-gradient-to-br from-indigo-500/70 via-violet-500/50 to-cyan-400/50 p-[1px] glow-card'
                  )}
                >
                  <div
                    className={cn(
                      'relative h-full p-6 lg:p-8 rounded-2xl border transition-all duration-300 backdrop-blur-sm',
                      service.featured
                        ? 'rounded-[15px] border-transparent bg-white dark:bg-zinc-950/95'
                        : 'bg-white dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 shadow-lg shadow-zinc-200/50 dark:shadow-none glow-card'
                    )}
                  >
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                        <service.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                      </div>

                      {/* Overline */}
                      {service.overline && (
                        <p className="text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-medium mb-1.5">
                          {service.overline}
                        </p>
                      )}

                      {/* Content */}
                      <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-indigo-600 dark:group-hover:text-white transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>

                      {/* Arrow */}
                      <div className="flex items-center text-indigo-600 dark:text-indigo-400 text-sm font-medium">
                        <span>Ver más</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Featured badge */}
                    {service.featured && (
                      <div className="absolute top-4 right-4 bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-medium px-2 py-1 rounded-full">
                        Destacado
                      </div>
                    )}
                  </div>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
