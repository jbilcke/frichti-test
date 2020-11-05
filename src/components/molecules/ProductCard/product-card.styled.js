import styled from 'styled-components';

import COLORS from 'styles/constants/colors';
import calcAspectRatio from 'styles/utils/aspect-ratio';
import breakpoint from 'styles/utils/breakpoint';
import typography from 'styles/utils/typography';

import Picture from 'components/atoms/Picture/picture';

const Styled = {};

Styled.ThumbnailContainer = styled.div`
  padding-top: ${calcAspectRatio({ width: 280, height: 180 })};
  position: relative;
  width: 100%;
`;

Styled.Thumbnail = styled(Picture)`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

Styled.Support = styled.figcaption`
  display: flex;
  flex-direction: column;
  height: 12rem;
  padding: 1.3rem;

  ${breakpoint.medium`
  height: 14rem;
  padding: 1.6rem;
  `}
`;

Styled.Title = styled.h3`
  ${typography({ fontSize: '1.4rem', fontWeight: 900 })};
  color: ${COLORS.dark};
  flex: 1;
  margin-bottom: 0.4rem;

  ${breakpoint.small`
  ${typography({ fontSize: '1.6rem', fontWeight: 900 })};
  `}

  ${breakpoint.medium`
  ${typography({ fontSize: '1.8rem', fontWeight: 900 })};
  `}
`;

Styled.Unit = styled.p`
  ${typography({
    fontSize: '1.2rem',
    fontWeight: 500,
    textTransform: 'uppercase',
  })};
  color: ${COLORS.grey};
  margin-bottom: 0.4rem;
`;

Styled.Price = styled.p`
  ${typography({ fontSize: '1.3rem', fontWeight: 700 })};
  color: ${COLORS.dark};

  ${breakpoint.medium`
  ${typography({ fontSize: '1.5rem', fontWeight: 700 })};
  `}
`;

export default Styled;
