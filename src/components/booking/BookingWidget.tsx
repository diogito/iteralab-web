'use client';

import Cal from '@calcom/embed-react';

export function BookingWidget() {
  return (
    <Cal
      calLink="diogenes-sazo-evvrxf/30min"
      style={{ width: '100%', height: '100%', overflow: 'scroll' }}
      config={{ layout: 'month_view', theme: 'dark' }}
    />
  );
}
