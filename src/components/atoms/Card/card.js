import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Styled from './card.styled';

const Card = ({ children, className, tagName }) => {
  const isPlayable = ['a', 'button', Link].indexOf(tagName) !== -1;
  return (
    <Styled tagName={tagName} isPlayable={isPlayable} className={className}>
      {children}
    </Styled>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  tagName: PropTypes.string,
};

Card.defaultProps = {
  className: undefined,
  tagName: 'div',
};

export default Card;
