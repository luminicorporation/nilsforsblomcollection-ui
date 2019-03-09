import { isMobile } from 'react-device-detect';

export const onMobile = str => (isMobile ? str : '');
export const onDesktop = str => (!isMobile ? str : '');
