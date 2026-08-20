import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agentes de IA | Productos Iteralab',
  description:
    'Cuatro agentes de IA listos para tu operación: Vera (comercial), Atlas (operaciones), Lector (documentos) y Oráculo (conocimiento). Piloto acotado, producción y escala.',
  openGraph: {
    title: 'Agentes de IA | Productos Iteralab',
    description:
      'Cuatro agentes de IA listos para conectarse a tu realidad: Vera, Atlas, Lector y Oráculo. Elige por dónde empezar o combina agentes.',
    url: 'https://iteralab.cl/agentes',
  },
};

export default function AgentesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
