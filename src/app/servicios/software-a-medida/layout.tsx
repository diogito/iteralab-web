import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { serviceSchema, breadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Desarrollo de Software a Medida | Iteralab',
  description: 'Software empresarial personalizado y escalable.',
  alternates: {
    canonical: '/servicios/software-a-medida',
  },
  openGraph: {
    title: 'Desarrollo de Software a Medida | Iteralab',
    description: 'Construimos activos digitales de tu propiedad que escalan con tu negocio.',
    url: 'https://iteralab.cl/servicios/software-a-medida',
  },
};

export default function SoftwareAMedidaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: 'Desarrollo de Software a Medida',
          description:
            'Plataformas internas y portales corporativos desarrollados a medida, de propiedad del cliente y escalables con el negocio.',
          serviceType: 'Custom Software Development',
          path: '/servicios/software-a-medida',
          keywords: ['software a medida', 'plataformas internas', 'portales corporativos'],
          category: 'Software a Medida',
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Servicios', path: '/#servicios' },
          { name: 'Software a Medida', path: '/servicios/software-a-medida' },
        ])}
      />
      {children}
    </>
  );
}
