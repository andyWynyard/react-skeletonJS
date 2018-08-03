import React from 'react';
import 'typeface-roboto';

import { ThemeProvider } from 'styled-components';

import { text } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';

import instructions from './markdown/heading1.md';
import Heading1 from '../../src/lib/components/atoms/Heading1';

const heading1 = withNotes(instructions)(() => {
  const color = text('color', 'tomato');
  const innerText = text('innerText', 'Hi there');
  const fontFamily = text('fontFamily', 'Roboto');

  const theme = {
    h1: {
      primaryColor: 'rebeccapurple'
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <ThemeProvider theme={theme}>
        <Heading1 primary>Themed H1</Heading1>
      </ThemeProvider>

      <Heading1 fontFamily={fontFamily} color={color}>
        {innerText}
      </Heading1>
    </div>
  );
});

export default heading1;
