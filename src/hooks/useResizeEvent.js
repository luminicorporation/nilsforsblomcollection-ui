import { useLayoutEffect } from 'react';

import { useOnce } from './useOnce';

export const useResizeEvent = handler => {
  useOnce(handler); // immediate first paint
  useLayoutEffect(() => {
    window.addEventListener('resize', handler, { passive: true });
    return () => window.removeEventListener('resize', handler);
  }, []);
};
