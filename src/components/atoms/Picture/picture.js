import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import Styled from './picture.styled';

const Picture = ({
  alt, className, src, ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const handleLoaded = useCallback(() => setLoaded(true), [setLoaded]);

  return (
    <Styled
      alt={alt}
      className={className}
      isLoaded={loaded}
      src={src}
      onLoad={handleLoaded}
      {...rest}
    />
  );
};

Picture.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
};

Picture.defaultProps = {
  className: undefined,
};

export default Picture;
