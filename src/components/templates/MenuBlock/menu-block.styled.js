import styled from 'styled-components';
import typography from 'styles/utils/typography';
import breakpoint from 'styles/utils/breakpoint';
import COLORS from 'styles/constants/colors';

const Styled = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
`;

Styled.Title = styled.h2`
  width: fit-content;
  ${typography({ fontWeight: 'bold', fontSize: '2rem' })};
  margin-bottom: 0.8rem;
  color: ${COLORS.dark};
  box-shadow: rgb(253, 241, 141) 0 -1rem inset, rgb(253, 241, 141) 0 0 inset;

  ${breakpoint.small`
    ${typography({ fontWeight: 'bold', fontSize: '2.4rem' })};
  `}

  ${breakpoint.medium`
    ${typography({ fontWeight: 'bold', fontSize: '2.6rem' })};
  `}
`;

Styled.Quantity = styled.p`
  ${typography({ fontWeight: 'bold', fontSize: '1.3rem' })};
  color: ${COLORS.grey};
  margin-bottom: 1.2rem;
  text-transform: uppercase;
`;

export default Styled;
