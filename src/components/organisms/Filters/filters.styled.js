import styled, { css } from 'styled-components';
import Icon from 'components/atoms/Icon/icon';
import COLORS from 'styles/constants/colors';
import breakpoint from 'styles/utils/breakpoint';
import typography from 'styles/utils/typography';

const Styled = styled.div``;

Styled.Heart = styled(Icon)`
  pointer-events: none;
  fill: ${COLORS.secondary};
`;

Styled.Title = styled.h3`
  ${typography({ fontSize: '1.4rem', fontWeight: 700 })};
  letter-spacing: 0.8px;
  margin-bottom: 1rem;

  ${breakpoint.medium`
    ${typography({ fontSize: '2.2rem', fontWeight: 700 })};
  `}
`;

Styled.Subtitle = styled.h4`
  display: flex;
  ${typography({ fontSize: '1.3rem', fontWeight: 600 })};
  margin-bottom: 2rem;

  ${breakpoint.medium`
  ${typography({ fontSize: '1.5rem', fontWeight: 600 })};
  `}
`;

Styled.Cross = styled(Icon)`
  fill: ${COLORS.grey};
  margin-left: 0.5rem;
  cursor: pointer;
`;

Styled.Group = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

Styled.Button = styled.button`
  align-items: center;
  border: 0.1rem solid;
  border-radius: 0.4rem;
  display: flex;
  margin: 0 0.8rem 0.8rem 0;
  padding: 0.8rem 1.8rem;
  ${typography({ fontSize: '1.3rem', fontWeight: 600 })};
  cursor: pointer;
  transition: color 0s ease 0s,
    background-color 0.2s cubic-bezier(0.6, 0, 0.2, 1) 0s,
    border-color 0.2s cubic-bezier(0.6, 0, 0.2, 1) 0s;

  &:focus {
    outline: none;
  }

  ${({ isActive }) =>
    (isActive
      ? css`
          background-color: ${COLORS.success};
          border-color: ${COLORS.success};
          color: ${COLORS.white};
          &:hover {
            background-color: ${COLORS.successHover};
            border-color: ${COLORS.successHover};
          }
        `
      : css`
          background-color: ${COLORS.white};
          border-color: ${COLORS.lightGrey};
          color: ${COLORS.dark};
          &:hover {
            background-color: ${COLORS.lightGrey};
          }
        `)}
`;

export default Styled;
