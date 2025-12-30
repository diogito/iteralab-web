import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Iteralab - Ingeniería de Software para Empresas';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#09090b',
          backgroundImage: 'radial-gradient(circle at 25% 25%, #312e81 0%, transparent 50%), radial-gradient(circle at 75% 75%, #1e1b4b 0%, transparent 50%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 80,
              marginBottom: 20,
            }}
          >
            🧪
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: '#fafafa',
              marginBottom: 16,
              letterSpacing: '-0.02em',
            }}
          >
            Iteralab
          </div>
          <div
            style={{
              fontSize: 32,
              color: '#a1a1aa',
              marginBottom: 40,
            }}
          >
            Ingeniería de Software para Empresas
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              backgroundColor: '#6366f1',
              paddingLeft: 24,
              paddingRight: 24,
              paddingTop: 12,
              paddingBottom: 12,
              borderRadius: 12,
            }}
          >
            <span
              style={{
                fontSize: 24,
                color: '#ffffff',
                fontWeight: 600,
              }}
            >
              Arquitectura Digital que Vende
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
