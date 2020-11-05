import styled from 'styled-components';

import COLORS from 'styles/constants/colors';

const Styled = styled.img`
  background-color: ${COLORS.light};
  height: auto;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  width: 100%;

  ${({ isLoaded }) =>
    (isLoaded
      ? `
      background-color: ${COLORS.grey};
      opacity: 1;
    `
      : '')}
`;

export default Styled;
