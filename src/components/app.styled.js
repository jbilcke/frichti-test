import styled from 'styled-components';
import SIZES from 'styles/constants/sizes';
import Header from './molecules/Header/header';

const Styled = styled.div`
  padding-top: ${SIZES.headerSearch};
`;

Styled.Header = styled(Header)`
  left: 0;
  position: fixed;
  top: 0;
  z-index: 1;
`;

export default Styled;
