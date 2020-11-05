import styled from 'styled-components';

import breakpoint from 'styles/utils/breakpoint';
import MenuBlock from 'components/templates/MenuBlock/menu-block';

const Styled = styled.main``;

Styled.Content = styled.div`
  background-color: #fafafa;
  display: block;
  padding-top: 12rem;
  padding-left: 2rem;
  padding-right: 2rem;

  ${breakpoint.medium`
  padding-left: 4rem;
  padding-right: 4rem;
  `}
`;

Styled.Block = styled(MenuBlock)`
  margin-bottom: 7.2rem;

  ${breakpoint.medium`
    margin-bottom: 3rem;
  `}

  &:last-child {
    margin-bottom: 0;
  }
`;

export default Styled;
