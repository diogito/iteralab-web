'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Plug, Code2, Bot, Shield, Globe, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const services = [
  {
    title: 'Integraciones y APIs',
    description: 'Conectamos tu ERP, CRM y flujos de datos.',
    href: '/servicios/integraciones',
    icon: Plug,
    featured: false,
  },
  {
    title: 'Software a Medida',
    description: 'Plataformas internas y portales corporativos.',
    href: '/servicios/software-a-medida',
    icon: Code2,
    featured: false,
  },
  {
    title: 'IA y Automatización',
    description: 'Chatbots RAG y optimización de procesos.',
    href: '/servicios/ia',
    icon: Bot,
    featured: true,
  },
  {
    title: 'Consultoría Técnica',
    description: 'Auditoría de código, seguridad y CTO on-demand.',
    href: '/servicios/consultoria',
    icon: Shield,
    featured: false,
  },
  {
    title: 'Modernización Web',
    description: 'Sitios de alto rendimiento y SEO técnico.',
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
              Soluciones <span className="text-indigo-600 dark:text-indigo-400">Integrales</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
              Desde la consultoría estratégica hasta la implementación técnica.
              Un solo partner para toda tu transformación digital.
            </p>
          </div>
        </AnimatedSection>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={0.1 * (index + 1)}>
              <Link href={service.href} className="block h-full">
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className={`
                    relative h-full p-6 lg:p-8 rounded-2xl border transition-all duration-300
                    bg-white dark:bg-zinc-900/50 backdrop-blur-sm
                    border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50
                    shadow-lg shadow-zinc-200/50 dark:shadow-none
                    group cursor-pointer
                    ${service.featured ? 'md:col-span-2 lg:col-span-1' : ''}
                  `}
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                      <service.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>

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
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
