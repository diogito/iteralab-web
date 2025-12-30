import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consultoría en IA y Automatización | Iteralab',
  description: 'Implementación de Chatbots RAG y Agentes IA.',
  openGraph: {
    title: 'Consultoría en IA y Automatización | Iteralab',
    description: 'Implementación de Chatbots RAG y Agentes IA. Automatiza soporte, ventas y procesamiento de documentos.',
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
