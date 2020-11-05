import React from 'react';
import { storiesOf } from '@storybook/react';

import Placeholders from 'helpers/dummy/placeholders';

import Picture from './picture';

const IMG_URL = Placeholders.image(500, 500);

storiesOf('Atoms/Picture', module).add('default', () => (
  <Picture alt="default" src={IMG_URL} />
));
