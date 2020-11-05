import styled from 'styled-components';

import Icon from 'components/atoms/Icon/icon';

import SIZES from 'styles/constants/sizes';
import COLORS from 'styles/constants/colors';
import breakpoint from 'styles/utils/breakpoint';
import typography from 'styles/utils/typography';

const Styled = styled.div`
  top: ${SIZES.headerHeight};
  left: 0;
  right: 0;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: center;
  border-top: 0.1rem solid rgb(229, 233, 239);
  box-shadow: rgba(38, 48, 60, 0.1) 0 1px 1px 0,
    rgba(29, 64, 105, 0.1) 0 1px 0 0;
  background: ${COLORS.white};
  padding: 1rem 2rem;

  ${breakpoint.medium`
    justify-content: flex-end; 
  `}
`;

Styled.SearchField = styled.div`
  background-color: ${COLORS.light};
  border-radius: 1.8rem;
  padding: 0.6rem 1.2rem;
  width: 70%;
  display: flex;

  ${breakpoint.medium`
  justify-content: start; 
  width: 24rem;
  `}
`;

Styled.Icon = styled(Icon)`
  pointer-events: none;
  fill: ${COLORS.grey};
`;

// note: we disable the focus outline to match the Frichti website but
// this is not a recommended practise, a better solution could be to use:
// https://matthiasott.com/notes/focus-visible-is-here
Styled.Input = styled.input`
  flex: 1;
  background: ${COLORS.light};
  border: ${COLORS.light};
  color: ${COLORS.dark};
  ${typography({ fontSize: '1.3rem', fontWeight: 600 })};

  &::placeholder {
    ${typography({ fontSize: '1.3rem', fontWeight: 600 })};
    color: ${COLORS.grey};
  }

  &:focus {
    outline: none;
  }
`;

export default Styled;
