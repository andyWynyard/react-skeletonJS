import React from 'react';
import { ThemeProvider } from 'styled-components';

import 'typeface-roboto';

import { boolean, object, text } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';

import instructions from './markdown/button.md';
import Button from '../../src/lib/components/atoms/Button';

const button = withNotes(instructions)(() => {
  const innerText = text('Text', 'Hio there');
  const border = text('border', '3px dotted tomato');
  const color = text('color', 'tomato');
  const borderRadius = text('borderRadius', '100px');
  const padding = text('padding', '10px 20px');
  const backgroundColor = text('backgroundColor', 'white');
  const hoverBorder = text('hoverBorder', '1px solid black', 'Hover');
  const hoverColor = text('hoverColor', 'blue', 'Hover');
  const hoverBackgroundColor = text('hoverBackgroundColor', 'tomato', 'Hover');

  const primaryColor = 'green';
  const secondaryColor = 'tomato';

  const theme = object(
    'Theme',
    {
      button: {
        primaryColor: primaryColor,
        secondaryColor: secondaryColor,
        buttonBorder: '1px solid',
        buttonRadius: '3px',
        buttonPadding: '10px 20px',
        buttonFontSize: '50px',
        buttonBackgroundColor: '#fff',
        hoverColorPrimary: 'white',
        hoverColorSecondary: 'white'
      }
    },
    'Theme'
  );

  return (
    <div style={{ padding: '20px' }}>
      <ThemeProvider theme={theme.button}>
        <div>
          <Button primary>Primary Themed Button</Button>
          <br />
          <br />
          <Button secondary>Secondary Themed Button</Button>
        </div>
      </ThemeProvider>
      <br />
      <br />
      <Button
        hoverBackgroundColor={hoverBackgroundColor}
        hoverColor={hoverColor}
        hoverBorder={hoverBorder}
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        border={border}
        color={color}
        padding={padding}>
        {innerText}
      </Button>
    </div>
  );
});

export default button;
