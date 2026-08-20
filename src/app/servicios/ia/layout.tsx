import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agentes de IA para Empresas | Iteralab',
  description:
    'Desarrollo de agentes de IA para empresas: atención de clientes, procesamiento de documentos y coordinación de operaciones en minería, agricultura, logística y back-office.',
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
  return children;
}
