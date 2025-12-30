import type { Metadata } from 'next';
import Link from 'next/link';
import { Bot, ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { Button } from '@/components/ui/Button';
import { WHATSAPP_LINK } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'IA & Automatización | Iteralab',
  description: 'Chatbots RAG y optimización de procesos. Implementamos inteligencia artificial en tu empresa.',
};

export default function IAPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-zinc-950 pt-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center mx-auto mb-6">
            <Bot className="w-8 h-8 text-indigo-400" />
          </div>

          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            IA & Automatización
          </h1>

          <p className="text-zinc-400 text-lg mb-8">
            Chatbots RAG y optimización de procesos. Implementamos inteligencia
            artificial para automatizar tareas y mejorar la productividad.
          </p>

          <div className="inline-block bg-indigo-500/10 text-indigo-400 px-4 py-2 rounded-full text-sm font-medium mb-8">
            Próximamente
          </div>

          <p className="text-zinc-500 text-sm mb-8">
            Estamos preparando información detallada sobre este servicio.
            Mientras tanto, contáctanos para una consulta personalizada.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="secondary">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al inicio
              </Button>
            </Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button>
                Consultar ahora
              </Button>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
