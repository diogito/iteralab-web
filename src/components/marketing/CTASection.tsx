import Link from 'next/link';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/Button';
import { WHATSAPP_LINK } from '@/lib/constants';

export function CTASection() {
  return (
    <section className="py-24 bg-zinc-100/80 dark:bg-zinc-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
            ¿Qué proceso de tu empresa{' '}
            <span className="text-indigo-600 dark:text-indigo-400">automatizarías primero?</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
            Agenda un diagnóstico gratuito de 30 minutos. Mapeamos tus procesos y te
            mostramos dónde un agente de IA tendría el mayor impacto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/agendar" className="w-full sm:w-auto">
              <Button size="lg" className="w-full">
                Agendar diagnóstico gratuito
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="ghost" size="lg" className="w-full">
                <MessageSquare className="w-4 h-4 mr-2" />
                Escribir por WhatsApp
              </Button>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
