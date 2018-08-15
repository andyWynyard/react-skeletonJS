import React from 'react';
import 'typeface-roboto';

import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs/react';

import boxedHeading from './molecules/boxedHeading';

const stories = storiesOf('Maverick|Molecules', module);

stories.addDecorator(withKnobs);
stories.addDecorator(checkA11y);

stories
  .add('Description', () => (
    <p style={{ padding: '50px 100px', fontFamily: 'Roboto' }}>
      Atoms are the smallest element possible. Add to this only if there is
      nothing smaller you can go. Use these to build larger components.
    </p>
  ))

  .add('boxedHeading', boxedHeading);
