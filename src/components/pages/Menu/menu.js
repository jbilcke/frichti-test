import React, { useState } from 'react';
import PropTypes from 'prop-types';
import menuContent from 'constants/mocks/menu.json';
import {
  joinFilters,
  filterProductsByName,
  filterProductsWithoutAllergens,
} from 'helpers/menu/filters';
import SearchBar from 'components/molecules/SearchBar/search-bar';
import Filters from 'components/organisms/Filters/filters';
import Styled from './menu.styled';

/**
 * MenuPage component
 *
 * USER STORY 1 - Search products by name
 * USER STORY 3 - Filter products without some allergens
 */
const Menu = ({ className }) => {
  // for this exercise we can store the filters locally
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState([]);

  // build the filter pipeline
  const filterProducts = joinFilters([
    filterProductsByName(search),
    filterProductsWithoutAllergens(filters),
  ]);

  return (
    <Styled>
      <SearchBar search={search} setSearch={setSearch} />
      <Styled.Content className={className}>
        <Filters filters={filters} setFilters={setFilters} />
        {Object.entries(menuContent).map(([block, { id, label, items }]) => (
          <Styled.Block
            blockId={block}
            key={id}
            title={label}
            products={filterProducts(items)}
          />
        ))}
      </Styled.Content>
    </Styled>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
};

Menu.defaultProps = {
  className: undefined,
};

export default Menu;
