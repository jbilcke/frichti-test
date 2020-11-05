import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ALLERGENS from 'constants/filters/allergens';
import Filters from './filters';

storiesOf('Organisms/Filters', module)
  .add('default', () => (
    <Filters filters={[]} setFilters={action('setFilters')} />
  ))
  .add('fixed to all enabled', () => (
    <Filters filters={ALLERGENS} setFilters={action('setFilters')} />
  ));
