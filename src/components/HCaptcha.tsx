
import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

declare global {
  interface Window {
    hcaptcha: any;
  }
}

interface HCaptchaProps {
  siteKey: string;
  onVerify: (token: string) => void;
  onError?: (error: any) => void;
  onExpired?: () => void;
  size?: 'normal' | 'compact' | 'invisible';
  theme?: 'light' | 'dark';
}

export interface HCaptchaRef {
  execute: () => void;
  reset: () => void;
}

const HCaptcha = forwardRef<HCaptchaRef, HCaptchaProps>(({
  siteKey,
  onVerify,
  onError,
  onExpired,
  size = 'normal',
  theme = 'light'
}, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

  useImperativeHandle(ref, () => ({
    execute: () => {
      if (window.hcaptcha && widgetId.current !== null) {
        window.hcaptcha.execute(widgetId.current);
      }
    },
    reset: () => {
      if (window.hcaptcha && widgetId.current !== null) {
        window.hcaptcha.reset(widgetId.current);
      }
    }
  }));

  useEffect(() => {
    const loadHCaptcha = () => {
      if (window.hcaptcha && containerRef.current) {
        try {
          widgetId.current = window.hcaptcha.render(containerRef.current, {
            sitekey: siteKey,
            callback: onVerify,
            'error-callback': onError,
            'expired-callback': onExpired,
            size: size,
            theme: theme
          });
        } catch (error) {
          console.error('Error rendering hCaptcha:', error);
          if (onError) onError(error);
        }
      }
    };

    if (window.hcaptcha) {
      loadHCaptcha();
    } else {
      // Load hCaptcha script if not already loaded
      const script = document.createElement('script');
      script.src = 'https://js.hcaptcha.com/1/api.js';
      script.async = true;
      script.defer = true;
      script.onload = loadHCaptcha;
      document.head.appendChild(script);
    }

    return () => {
      if (window.hcaptcha && widgetId.current !== null) {
        try {
          window.hcaptcha.remove(widgetId.current);
        } catch (error) {
          console.error('Error removing hCaptcha:', error);
        }
      }
    };
  }, [siteKey, onVerify, onError, onExpired, size, theme]);

  return <div ref={containerRef} />;
});

HCaptcha.displayName = 'HCaptcha';

export default HCaptcha;
