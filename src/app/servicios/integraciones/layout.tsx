import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { serviceSchema, breadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Integración de Sistemas y APIs | Iteralab',
  description: 'Conecta tu ERP, CRM y flujos de datos.',
  alternates: {
    canonical: '/servicios/integraciones',
  },
  openGraph: {
    title: 'Integración de Sistemas y APIs | Iteralab',
    description: 'Conecta tu ERP, CRM y flujos de datos. Eliminamos el caos manual con integraciones empresariales.',
    url: 'https://iteralab.cl/servicios/integraciones',
  },
};

export default function IntegracionesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: 'Integración de Sistemas y APIs',
          description:
            'Conexión de ERP, CRM y flujos de datos para eliminar procesos manuales, con ingeniería de rescate sin tocar los sistemas existentes.',
          serviceType: 'Systems Integration',
          path: '/servicios/integraciones',
          keywords: ['integración ERP', 'APIs', 'automatización'],
          category: 'Integración de Sistemas',
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Servicios', path: '/#servicios' },
          { name: 'Integraciones y APIs', path: '/servicios/integraciones' },
        ])}
      />
      {children}
    </>
  );
}
