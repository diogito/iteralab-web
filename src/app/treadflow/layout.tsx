import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'TreadFlow | Gestión de Flotas Inteligente',
  description: 'Control total de tu flota vehicular. Monitoreo de neumáticos, mantenciones y rendimiento en tiempo real.',
  openGraph: {
    title: 'TreadFlow | Gestión de Flotas Inteligente',
    description: 'Control total de tu flota vehicular. Monitoreo de neumáticos, mantenciones y rendimiento en tiempo real.',
  },
};

export default function TreadFlowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* TreadFlow Header - Minimal */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-black/90 backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link href="/treadflow" className="flex items-center gap-2 group">
            {/* TreadFlow Logo */}
            <div className="relative">
              <span className="font-display text-2xl font-black tracking-tight">
                <span className="text-[#39FF14]">Tread</span>
                <span className="text-white">Flow</span>
              </span>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 blur-lg bg-[#39FF14]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* TreadFlow Footer - Minimal */}
      <footer className="border-t border-zinc-800/50 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-zinc-600 text-xs tracking-wide">
            Powered by{' '}
            <Link 
              href="/" 
              className="text-zinc-500 hover:text-[#39FF14] transition-colors font-medium"
            >
              Iteralab
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
