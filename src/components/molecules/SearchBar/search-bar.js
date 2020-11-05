import React from 'react';
import PropTypes from 'prop-types';
import Styled from './search-bar.styled';

/**
 * SearchBar component
 *
 * USER STORY 1 - Search products by name
 */
const SearchBar = ({ search, setSearch }) => (
  <Styled>
    <Styled.SearchField>
      <Styled.Icon icon="search" width={24} />
      <Styled.Input
        placeholder="Rechercher un produit.."
        value={search}
        onChange={({ currentTarget: { value } }) => setSearch(value)}
      />
    </Styled.SearchField>
  </Styled>
);

SearchBar.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
};

SearchBar.defaultProps = {
  search: '',
  setSearch: () => {},
};

export default SearchBar;
