import type { Metadata } from 'next';
import Link from 'next/link';
import { Code2, ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { Button } from '@/components/ui/Button';
import { WHATSAPP_LINK } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Software a Medida | Iteralab',
  description: 'Plataformas internas y portales corporativos. Desarrollo de software personalizado para tu empresa.',
};

export default function SoftwareAMedidaPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-zinc-950 pt-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center mx-auto mb-6">
            <Code2 className="w-8 h-8 text-indigo-400" />
          </div>

          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Software a Medida
          </h1>

          <p className="text-zinc-400 text-lg mb-8">
            Plataformas internas y portales corporativos. Desarrollamos soluciones
            personalizadas que se adaptan a tus procesos de negocio.
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
