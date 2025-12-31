'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Cal from '@calcom/embed-react';

export function BookingWidget() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-pulse text-zinc-500">Cargando calendario...</div>
      </div>
    );
  }

  return (
    <Cal
      calLink="diogenes-sazo-evvrxf/30min"
      style={{ width: '100%', height: '100%', overflow: 'scroll' }}
      config={{ layout: 'month_view', theme: resolvedTheme === 'dark' ? 'dark' : 'light' }}
    />
  );
}
