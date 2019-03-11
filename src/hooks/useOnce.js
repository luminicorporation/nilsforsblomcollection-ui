import { useState } from 'react';

export const useOnce = callback => {
  const [executed, done] = useState(false);
  if (!executed) {
    callback();
    done(true);
  }
};
