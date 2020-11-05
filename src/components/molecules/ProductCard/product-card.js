import React from 'react';
import PropTypes from 'prop-types';

import Card from 'components/atoms/Card/card';

import Styled from './product-card.styled';

/**
 * ProductCard component
 *
 * USER STORY 2 - Make menu mobile-first
 */
const ProductCard = ({
  className, imageUrl, price, title, unit,
}) => {
  const finalPrice = (price / 100).toFixed(2).toString().replace('.', ',');
  return (
    <Card className={className}>
      <figure>
        <Styled.ThumbnailContainer>
          <Styled.Thumbnail src={imageUrl} alt={title} />
        </Styled.ThumbnailContainer>
        <Styled.Support>
          <Styled.Title>{title}</Styled.Title>
          {!!unit && <Styled.Unit>{unit}</Styled.Unit>}
          <Styled.Price>{`${finalPrice}€`}</Styled.Price>
        </Styled.Support>
      </figure>
    </Card>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  unit: PropTypes.string,
};

ProductCard.defaultProps = {
  className: undefined,
  unit: null,
};

export default ProductCard;
