import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { serviceSchema, breadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Consultoría Técnica y CTO on-demand | Iteralab',
  description: 'Auditoría de código, arquitectura cloud y seguridad.',
  alternates: {
    canonical: '/servicios/consultoria',
  },
  openGraph: {
    title: 'Consultoría Técnica y CTO on-demand | Iteralab',
    description: 'Auditoría de código, arquitectura cloud y seguridad. Aportamos la experiencia senior que tu equipo necesita.',
    url: 'https://iteralab.cl/servicios/consultoria',
  },
};

export default function ConsultoriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: 'Consultoría Técnica y CTO on-demand',
          description:
            'Auditoría de código, arquitectura cloud y seguridad, con experiencia senior a disposición de tu equipo.',
          serviceType: 'Technical Consulting',
          path: '/servicios/consultoria',
          keywords: ['auditoría de código', 'arquitectura cloud', 'CTO on-demand'],
          category: 'Consultoría Técnica',
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Servicios', path: '/#servicios' },
          { name: 'Consultoría Técnica', path: '/servicios/consultoria' },
        ])}
      />
      {children}
    </>
  );
}
