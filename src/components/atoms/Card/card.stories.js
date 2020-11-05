import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from './card';

const CHILDREN = <p>Hello, it&apos;s Frichti!</p>;

storiesOf('Atoms/Card', module)
  .add('default', () => <Card>{CHILDREN}</Card>)
  .add('with playable tag', () => <Card tagName="button">{CHILDREN}</Card>);
