import styled from 'styled-components';

import {
  appCountdownZoom,
  appLogoSpin,
} from 'styles/constants/animations';
import COLORS from 'styles/constants/colors';
import typography from 'styles/utils/typography';

import Icon from 'components/atoms/Icon/icon';

const Styled = styled.main`
  background-color: ${COLORS.dark};
  color: white;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
  transition: background-color 0.2s ease-in-out;
`;

Styled.Content = styled.section`
  ${typography({ fontSize: '2.2rem', fontWeight: 'bold' })};
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

Styled.Countdown = styled.h2`
  ${typography({ fontWeight: 'bold', fontSize: '3.2rem' })};
  animation: ${appCountdownZoom} infinite 1s ease-in-out;
`;

Styled.Logo = styled(Icon)`
  animation: ${appLogoSpin} infinite 5s linear;
  height: 8rem;
  margin-bottom: 3.6rem;
  pointer-events: none;
`;

Styled.Code = styled.code`
  color: ${COLORS.primary};
  font-size: 2.2rem;
  font-family: monospace, serif;
`;

Styled.Start = styled.button`
  ${typography({ fontWeight: 'bold', fontSize: '3.2rem' })};
  background: none;
  border: solid 0.2rem white;
  color: white;
  cursor: pointer;
  margin-top: 3.6rem;
  padding: 0.8rem 1.6rem;
  transition: background-color 0.2s ease-in-out;
  outline-color: ${COLORS.primary};

  &:hover {
    background-color: ${COLORS.darkHover};
  }
`;

Styled.Footer = styled.footer`
  padding: 1rem;
`;

Styled.Link = styled.a`
  ${typography({ fontSize: '1.2rem' })};
  color: ${COLORS.lightHover};
  font-weight: bold;
  text-decoration: none;
`;

export default Styled;
