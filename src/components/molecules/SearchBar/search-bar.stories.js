import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SearchBar from './search-bar';

storiesOf('Molecules/SearchBar', module)
  .add('default', () => <SearchBar search="" setSearch={action('setSearch')} />)
  .add('with value', () => (
    <SearchBar search="carotte rapée" setSearch={action('setSearch')} />
  ));
