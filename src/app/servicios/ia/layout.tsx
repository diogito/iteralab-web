import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { serviceSchema, breadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Agentes de IA para Empresas | Iteralab',
  description:
    'Desarrollo de agentes de IA para empresas: atención de clientes, procesamiento de documentos y coordinación de operaciones en minería, agricultura, logística y back-office.',
  alternates: {
    canonical: '/servicios/ia',
  },
  openGraph: {
    title: 'Agentes de IA para Empresas | Iteralab',
    description:
      'Agentes de IA que atienden, procesan documentos y coordinan tu operación 24/7. Para minería, agricultura, logística y back-office.',
    url: 'https://iteralab.cl/servicios/ia',
  },
};

export default function IALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: 'Desarrollo de Agentes de IA para Empresas',
          description:
            'Agentes de IA que atienden clientes, procesan documentos y coordinan operaciones 24/7, conectados a ERP, WhatsApp y APIs.',
          serviceType: 'AI Agent Development',
          path: '/servicios/ia',
          keywords: ['agentes de IA', 'automatización de procesos', 'RAG empresarial'],
          category: 'Agentes de IA',
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Servicios', path: '/#servicios' },
          { name: 'Agentes de IA', path: '/servicios/ia' },
        ])}
      />
      {children}
    </>
  );
}
