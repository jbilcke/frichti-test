import { keyframes } from 'styled-components';

/**
 * Animations
 */

export const appLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const appCountdownZoom = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(10);
  }
`;
