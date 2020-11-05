import React from 'react';
import PropTypes from 'prop-types';

import Icons from './icons';

import Styled from './icon.styled';

const Icon = ({
  className, color, icon, width, ...rest
}) => {
  const iconName = Icons[icon];
  return (
    <Styled
      iconName={iconName}
      className={className}
      color={color}
      width={width}
      {...rest}
    />
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['dark', 'secondary', 'primary', 'success', 'white']),
  icon: PropTypes.oneOf(Object.keys(Icons)).isRequired,
  width: PropTypes.number,
};

Icon.defaultProps = {
  className: undefined,
  color: 'dark',
  width: 20,
};

export default Icon;
