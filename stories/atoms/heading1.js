import React from 'react';
import 'typeface-roboto';

import { boolean, select, text } from '@storybook/addon-knobs/react';
import { ShowStaticMarkup } from 'react-storybook-addon-static-markup';
import { withNotes } from '@storybook/addon-notes';

import instructions from './markdown/heading1.md';
import Heading1 from '../../src/lib/components/atoms/Heading1';

const heading1 = withNotes(instructions)(() => {
  const color = text('color', 'tomato');
  const innerText = text('innerText', 'Hi there');
  const fontFamily = text('fontFamily', 'Roboto');

  return (
    <div style={{ padding: '20px' }}>
      <ShowStaticMarkup>
        <Heading1 fontFamily={fontFamily} color={color}>
          {innerText}
        </Heading1>
      </ShowStaticMarkup>
    </div>
  );
});

export default heading1;
