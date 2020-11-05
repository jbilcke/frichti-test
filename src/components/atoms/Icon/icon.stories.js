import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, number } from '@storybook/addon-knobs';

import Icon from './icon';
import Icons from './icons';

const ICONS_LIST = Object.keys(Icons);

storiesOf('Atoms/Icon', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Icon
      icon={select('icon', ICONS_LIST, ICONS_LIST[0])}
      width={number('width', 50, {
        range: false,
        min: 20,
        max: 500,
        step: 4,
      })}
      color={select(
        'color',
        ['dark', 'secondary', 'primary', 'success', 'white'],
        'dark',
      )}
    />
  ));
