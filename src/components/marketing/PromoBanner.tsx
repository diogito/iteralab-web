import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { WHATSAPP_LINK } from '@/lib/constants';

export function PromoBanner() {
  return (
    <section className="py-10 sm:py-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 via-indigo-800/20 to-indigo-900/30" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Oferta Especial</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
              Habilitación Costo{' '}
              <span className="text-indigo-600 dark:text-indigo-400">$0</span>
            </h2>

            <p className="text-zinc-600 dark:text-zinc-400 mb-2 max-w-xl mx-auto">
              Contrata cualquier plan anual y te regalamos la habilitación completa.
            </p>
            <p className="text-indigo-600 dark:text-indigo-300 font-semibold mb-8">
              Ahorra $300.000 CLP
            </p>

            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                Aprovechar Oferta
              </Button>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
