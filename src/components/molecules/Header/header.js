import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/atoms/Icon/icon';

import menuContent from 'constants/mocks/menu.json';

import Styled from './header.styled';

const Header = ({ className, firstName }) => {
  const [index, setIndex] = useState(0);
  const handleClicked = useCallback(
    () => setIndex((index + 1) % firstName.length),
    [index, setIndex, firstName],
  );
  const slugs = Object.keys(menuContent);

  return (
    <Styled className={className}>
      <Styled.Logo>
        <Icon icon="frichti-text" width={100} />
      </Styled.Logo>
      <Styled.Categories>
        {slugs.map((slug) => (
          <Styled.Category key={slug}>
            <Styled.Link href={`#${slug}`}>
              {menuContent[slug].label}
            </Styled.Link>
          </Styled.Category>
        ))}
      </Styled.Categories>
      <Styled.FirstName
        type="button"
        onClick={handleClicked}
        title="Hello you!"
      >
        {firstName[index]}
      </Styled.FirstName>
    </Styled>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  firstName: PropTypes.array,
};

Header.defaultProps = {
  className: undefined,
  firstName: ['Jane Doe', 'John Doe'],
};

export default Header;
