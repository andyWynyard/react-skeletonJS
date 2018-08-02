import React from 'react';
import 'typeface-roboto';

import Input from '../../src/lib/components/atoms/Input';

import { boolean, select, text } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';

// import instructions from './markdown/input.md';

const input = withNotes('instructions')(() => {
  const color = text('color', 'rebeccapurple');
  const fontSize = text('fontSize', '15px');
  const border = text('border', '1px solid tomato');
  const borderRadius = text('borderRadius', '3px');
  const width = text('width', '100%');
  const margin = text('margin', '5px');
  const padding = text('padding', '5px 10px');

  const type = select(
    'type',
    [
      'checkbox',
      'button',
      'color',
      'date',
      'datetime-local',
      'email',
      'file',
      'hidden',
      'image',
      'month',
      'number',
      'password',
      'radio',
      'range',
      'reset',
      'search',
      'submit',
      'tel',
      'text',
      'time',
      'url',
      'week'
    ],
    'text'
  );
  const placeholder = text('placeholder', 'Test placeholder');

  return (
    <div style={{ padding: '20px' }}>
      <Input
        color={color}
        fontSize={fontSize}
        border={border}
        borderRadius={borderRadius}
        type={type}
        placeholder={placeholder}
        width={width}
        padding={padding}
        margin={margin}
      />
    </div>
  );
});

export default input;
