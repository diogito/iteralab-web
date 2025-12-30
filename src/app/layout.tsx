import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
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
  title: 'Iteralab | Ingeniería de Software para Empresas',
  description: 'Deuda técnica cero. Modernizamos tu infraestructura web con estándares de Silicon Valley y soporte local en Chile.',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧪</text></svg>",
  },
  metadataBase: new URL('https://iteralab.cl'),
  openGraph: {
    title: 'Iteralab | Ingeniería de Software para Empresas',
    description: 'Arquitectura digital que vende. Modernización web para empresas chilenas.',
    url: 'https://iteralab.cl',
    siteName: 'Iteralab',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iteralab | Ingeniería de Software para Empresas',
    description: 'Arquitectura digital que vende.',
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
    <html lang="es" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-zinc-950 text-zinc-100 antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Iteralab',
              description: 'Consultora de Ingeniería de Software y Modernización Web.',
              url: 'https://iteralab.cl',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'CL',
                addressRegion: 'Santiago',
              },
              priceRange: '$$',
            }),
          }}
        />
      </body>
    </html>
  );
}
