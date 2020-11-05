import { createGlobalStyle } from 'styled-components';

import APP from './app.styled';
import RESET from './reset.styled';

const GlobalStyles = createGlobalStyle`
  ${RESET}
  ${APP}
`;

export default GlobalStyles;
