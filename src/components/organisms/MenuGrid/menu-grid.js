import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from 'components/molecules/ProductCard/product-card';

import Styled from './menu-grid.styled';

const MenuGrid = ({ className, products }) => (
  <Styled className={className}>
    <Styled.Container>
      {products.map((item) => (
        <ProductCard
          key={item.product.productId}
          price={item.product.price}
          imageUrl={item.product.images[0]}
          title={item.product.title}
          unit={item.product.unit.singular}
        />
      ))}
    </Styled.Container>
  </Styled>
);

MenuGrid.propTypes = {
  products: PropTypes.array,
  className: PropTypes.string,
};

MenuGrid.defaultProps = {
  className: undefined,
  products: [],
};

export default MenuGrid;
