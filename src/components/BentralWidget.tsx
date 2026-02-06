import { useEffect, useRef } from 'react';

interface BentralWidgetProps {
  unitId: string;
  className?: string;
}

const BENTRAL_ID = '5f7a49334d675f4d';
const BENTRAL_KEY = '59a610d78995dcb777244c7971e633e3';

export function BentralWidget({ unitId, className = '' }: BentralWidgetProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            body { margin: 0; padding: 0; font-family: sans-serif; display: flex; justify-content: center; align-items: flex-start; min-height: 100vh; }
            body > * { margin: 0 auto; }
          </style>
        </head>
        <body>
          <script src="//www.bentral.com/service/embed/booking.js?id=${BENTRAL_ID}&unit=${unitId}&lang=sl&key=${BENTRAL_KEY}"><\/script>
        </body>
      </html>
    `;

    iframe.srcdoc = html;
  }, [unitId]);

  return (
    <div className="flex justify-center w-full">
      <iframe
        ref={iframeRef}
        className={`w-full max-w-2xl border-0 rounded-lg ${className}`}
        style={{ minHeight: '500px' }}
        title="Bentral Booking Widget"
      />
    </div>
  );
}
