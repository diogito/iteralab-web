import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Desarrollo de Software a Medida | Iteralab',
  description: 'Software empresarial personalizado y escalable.',
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
  return children;
}
