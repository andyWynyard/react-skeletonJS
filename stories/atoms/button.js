import React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs/react';
import { ShowStaticMarkup } from 'react-storybook-addon-static-markup';
import { withNotes } from '@storybook/addon-notes';

import instructions from './markdown/button.md';
import Button from '../../src/lib/components/atoms/Button';

const button = withNotes(instructions)(() => {
  const innerText = text('Text', 'CONTENT');
  const border = text('border', '3px dotted tomato');
  const color = text('color', 'tomato');
  const borderRadius = text('borderRadius', '100px');
  const padding = text('padding', '10px 20px');
  const backgroundColor = text('backgroundColor', 'white');
  const hoverBorder = text('hoverBorder', '1px solid black', 'Hover');
  const hoverColor = text('hoverColor', 'blue', 'Hover');
  const hoverBackgroundColor = text('hoverBackgroundColor', 'tomato', 'Hover');

  return (
    <div style={{ padding: '20px' }}>
      <ShowStaticMarkup>
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
      </ShowStaticMarkup>
    </div>
  );
});

export default button;
