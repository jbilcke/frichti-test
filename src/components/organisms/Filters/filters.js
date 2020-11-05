import React from 'react';
import PropTypes from 'prop-types';

import ALLERGENS from 'constants/filters/allergens';

import Styled from './filters.styled';

/**
 * formatAllergies
 *
 * Format selected allergies
 *
 * @param {Array} filters
 */
const formatAllergies = (filters) => {
  if (filters.length === 0) {
    return 'Allergies';
  }
  const plural = filters.length > 1 ? 's' : '';
  return `${filters.length} allergène${plural} masqué${plural}`;
};

/**
 * Filters component
 *
 * USER STORY 3 - Filter products without some allergens
 */
const Filters = ({ filters, setFilters }) => (
  <Styled>
    <Styled.Title>
      <Styled.Heart icon="heart" width={18} />
      {' '}
      Mes Préférences
    </Styled.Title>
    <Styled.Subtitle>
      {formatAllergies(filters)}
      {' '}
      {!!filters.length && (
        <Styled.Cross icon="cross" width={16} onClick={() => setFilters([])} />
      )}
    </Styled.Subtitle>
    <Styled.Group>
      {ALLERGENS.map((allergen) => (
        <Styled.Button
          key={allergen}
          isActive={filters.includes(allergen)}
          onClick={() =>
            setFilters(
              filters.includes(allergen) // check if toggled on or off
                ? filters.filter((filter) => filter !== allergen) // then remove
                : filters.concat(allergen), // or keep
            )}
        >
          {allergen}
        </Styled.Button>
      ))}
    </Styled.Group>
  </Styled>
);

Filters.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  setFilters: PropTypes.func,
};

Filters.defaultProps = {
  filters: [],
  setFilters: () => {},
};

export default Filters;
