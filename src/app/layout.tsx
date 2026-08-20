import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  organizationSchema,
  websiteSchema,
  professionalServiceSchema,
  OG_IMAGE,
} from '@/lib/seo';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Iteralab | Desarrollo de Agentes de IA para Empresas',
    template: '%s | Iteralab',
  },
  description:
    'Iteralab desarrolla agentes de IA para empresas chilenas: agentes comerciales, de operaciones, documentales y de conocimiento que se conectan a tu ERP, tu WhatsApp y tu operación real.',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧪</text></svg>",
  },
  metadataBase: new URL('https://iteralab.cl'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Iteralab | Desarrollo de Agentes de IA para Empresas',
    description:
      'Agentes de IA de producción para tu empresa: Vera, Atlas, Lector y Oráculo. Se conectan a tu ERP y tu WhatsApp para atender, leer, decidir y ejecutar.',
    url: 'https://iteralab.cl',
    siteName: 'Iteralab',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Iteralab - Desarrollo de Agentes de IA para Empresas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iteralab | Desarrollo de Agentes de IA para Empresas',
    description:
      'Cuatro agentes de producción para tu empresa: Vera, Atlas, Lector y Oráculo.',
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <JsonLd data={professionalServiceSchema()} />
      </body>
    </html>
  );
}