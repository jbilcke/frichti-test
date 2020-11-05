import styled from 'styled-components';
import breakpoint from 'styles/utils/breakpoint';
import SIZES from 'styles/constants/sizes';

const Styled = styled.article``;

Styled.Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -${SIZES.gutter};
  > * {
    flex: 0 0 calc(100% - ${SIZES.gutter} - ${SIZES.gutter});
    margin: ${SIZES.gutter};

    ${breakpoint.xSmall`
    flex: 0 0 calc(50% - ${SIZES.gutter} - ${SIZES.gutter});
    `}

    ${breakpoint.small`
    flex: 0 0 calc(33% - ${SIZES.gutter} - ${SIZES.gutter});
    `}

    ${breakpoint.medium`
    flex: 0 0 calc(25% - ${SIZES.gutter} - ${SIZES.gutter});
    `}
  }
`;

export default Styled;
