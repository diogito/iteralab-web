import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { FOOTER_LINKS } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Logo />
            </Link>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-xs">
              Ingeniería de software integral para empresas chilenas.
              Automatización, integraciones y modernización digital.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-display font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              Servicios
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.servicios.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-display font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              Empresa
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <p className="text-center text-zinc-500 text-sm">
            © {currentYear} Iteralab SpA - Santiago, Chile. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
