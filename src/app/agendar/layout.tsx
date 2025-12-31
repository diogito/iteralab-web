import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agendar Consultoría | Iteralab',
  description: 'Agenda una consultoría estratégica de 30 minutos para analizar tu infraestructura y definir el plan de acción.',
  openGraph: {
    title: 'Agendar Consultoría | Iteralab',
    description: 'Agenda una consultoría estratégica de 30 minutos para analizar tu infraestructura y definir el plan de acción.',
    url: 'https://iteralab.cl/agendar',
  },
};

export default function AgendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
