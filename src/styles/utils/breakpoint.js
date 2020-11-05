import { css } from 'styled-components';

import { BREAKPOINTS } from 'styles/constants/breakpoints';

/**
 * Use breakpoints in your styled component
 * Use: breakpoints.[breakpoint]`style`
 * @type {{}}
 */
const breakpoint = Object.keys(BREAKPOINTS).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${BREAKPOINTS[label]}) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

export default breakpoint;
