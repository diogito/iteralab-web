import Link from 'next/link';
import { FOOTER_LINKS } from '@/lib/constants';
import { Badge } from '@/components/ui/Badge';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🧪</span>
              <span className="font-display text-xl font-bold text-zinc-100">
                Iteralab
              </span>
            </Link>
            <p className="text-zinc-400 text-sm max-w-xs">
              Arquitectura digital que vende. Modernización web con estándares
              de Silicon Valley y soporte local en Chile.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-display font-semibold text-zinc-100 mb-4">
              Servicios
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.servicios.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors inline-flex items-center gap-2"
                  >
                    {link.label}
                    {'badge' in link && link.badge && (
                      <Badge variant="outline" className="text-xs py-0.5 px-2">
                        {link.badge}
                      </Badge>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-display font-semibold text-zinc-100 mb-4">
              Empresa
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-800">
          <p className="text-center text-zinc-500 text-sm">
            © {currentYear} Iteralab SpA - Santiago, Chile. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
