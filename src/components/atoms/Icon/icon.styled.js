import React from 'react';
import styled from 'styled-components';

import COLORS from 'styles/constants/colors';

const Styled = styled(({ color, iconName: IconName, ...rest }) => (
  <IconName {...rest} />
))`
  height: auto;
  fill: ${({ color }) => COLORS[color] || COLORS.dark};
`;

export default Styled;
