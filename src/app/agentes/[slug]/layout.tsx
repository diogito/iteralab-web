import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Agentes de IA | Iteralab',
    template: '%s | Iteralab',
  },
};

export default function AgentDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
