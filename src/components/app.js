import React, { useState, useCallback } from 'react';

import { readCookie, createCookie } from 'helpers/browser/cookies';

import DisclaimerPage from './pages/Disclaimer/disclaimer';
import MenuPage from './pages/Menu/menu';
import Styled from './app.styled';

const ARE_YOU_READY = readCookie('frichti_exercise_started') || false;

/*
 * App container
 * @fixme: set "ARE_YOU_READY" flag to true or <AppDisclaimer /> component
 */
const App = () => {
  const [isReady, setReady] = useState(ARE_YOU_READY);
  const handleStartExercise = useCallback(() => {
    // Set cookie for 3 hours
    createCookie('frichti_exercise_started', true, 0.125);
    // Display exercise content
    setReady(true);
  }, [setReady]);

  return isReady ? (
    <Styled>
      <Styled.Header />
      <MenuPage />
    </Styled>
  ) : (
    <DisclaimerPage onExerciseStartClicked={handleStartExercise} />
  );
};

export default App;
