import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Modernización Web | Iteralab',
  description: 'Renovación y diseño web estratégico. Escaneamos tu sitio actual, te mostramos un prototipo funcionando y lo desarrollamos con tecnología moderna.',
  openGraph: {
    title: 'Modernización Web | Iteralab',
    description: 'Tu web es tu vitrina digital. Creamos sitios modernos que generan confianza desde el primer clic.',
    url: 'https://iteralab.cl/servicios/modernizacion-web',
  },
};

export default function ModernizacionWebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
