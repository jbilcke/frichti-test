import React from 'react';
import { addDecorator } from '@storybook/react';

import GlobalStyles from '../src/styles/globals/globals.styled';

addDecorator((storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
));
