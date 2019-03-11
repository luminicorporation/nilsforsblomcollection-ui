import { useLayoutEffect } from 'react';

export const useResizeEvent = handler => {
  useLayoutEffect(() => {
    handler(null);
    window.addEventListener('resize', handler, { passive: true });
    return () => window.removeEventListener('resize', handler);
  }, []);
};
