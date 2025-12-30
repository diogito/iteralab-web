import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Integración de Sistemas y APIs | Iteralab',
  description: 'Conecta tu ERP, CRM y flujos de datos.',
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
  return children;
}
