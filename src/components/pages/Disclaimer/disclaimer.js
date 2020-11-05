import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import Styled from './disclaimer.styled';

const Disclaimer = ({ onExerciseStartClicked }) => {
  const [countdown, setCountdown] = useState(4);

  useEffect(() => {
    let interval = null;
    if (countdown < 4) {
      interval = setInterval(() => setCountdown(countdown - 1), 1000);
    }
    if (countdown === 0) {
      onExerciseStartClicked();
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [countdown, onExerciseStartClicked]);

  const handleClick = useCallback(() => setCountdown(3), [setCountdown]);

  return (
    <Styled>
      <Styled.Content>
        {countdown < 4 ? (
          <Styled.Countdown>{countdown}</Styled.Countdown>
        ) : (
          <>
            <figure>
              <Styled.Logo color="white" icon="frichti-logo" width={250} />
              <figcaption>
                Following the&nbsp;
                <Styled.Code>README.md</Styled.Code>
                &nbsp;tasks,
                <br />
                complete each&nbsp;
                <Styled.Code>@todo</Styled.Code>
                &nbsp;you can find in this project.
              </figcaption>
            </figure>
            <Styled.Start onClick={handleClick} type="button">
              Start!
            </Styled.Start>
          </>
        )}
      </Styled.Content>
      <Styled.Footer>
        <Styled.Link
          href="https://frichti.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          frichti.co
        </Styled.Link>
      </Styled.Footer>
    </Styled>
  );
};

Disclaimer.propTypes = {
  onExerciseStartClicked: PropTypes.func,
};

Disclaimer.defaultProps = {
  onExerciseStartClicked: () => {},
};

export default Disclaimer;
