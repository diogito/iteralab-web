import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consultoría Técnica y CTO on-demand | Iteralab',
  description: 'Auditoría de código, arquitectura cloud y seguridad.',
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
  return children;
}
