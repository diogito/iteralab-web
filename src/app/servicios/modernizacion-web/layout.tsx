import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { serviceSchema, breadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Modernización Web | Iteralab',
  description: 'Renovación y diseño web estratégico. Escaneamos tu sitio actual, te mostramos un prototipo funcionando y lo desarrollamos con tecnología moderna.',
  alternates: {
    canonical: '/servicios/modernizacion-web',
  },
  openGraph: {
    title: 'Modernización Web | Iteralab',
    description: 'Tu web es tu vitrina digital. Creamos sitios modernos que generan confianza desde el primer clic.',
    url: 'https://iteralab.cl/servicios/modernizacion-web',
  },
};

export default function ModernizacionWebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: 'Modernización Web',
          description:
            'Renovación y diseño web estratégico: escaneamos tu sitio actual, mostramos un prototipo funcionando y lo desarrollamos con tecnología moderna.',
          serviceType: 'Web Development',
          path: '/servicios/modernizacion-web',
          keywords: ['diseño web', 'sitios de alto rendimiento', 'SEO técnico'],
          category: 'Modernización Web',
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Servicios', path: '/#servicios' },
          { name: 'Modernización Web', path: '/servicios/modernizacion-web' },
        ])}
      />
      {children}
    </>
  );
}
