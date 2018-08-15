import React from 'react';
import 'typeface-roboto';

import { text } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';

import instructions from './markdown/boxedHeading.md';

import BoxedHeading from '../../src/lib/components/molecules/BoxedHeading';

const boxedHeading = withNotes(instructions)(() => {
  const boxBorder = text('boxBorder', '3px solid red');
  const innerText = text('innerText', 'Hi there');
  const borderRadius = text('borderRadius', '3px');
  const boxPadding = text('boxPadding', '30px');
  const fontSize = text('fontSize', '30px');
  const textColor = text('textColor', 'red');
  const headingMargin = text('headingMargin', '50px');
  const fontFamily = text('fontFamily', 'Roboto');
  return (
    <div style={{ padding: '20px' }}>
      <BoxedHeading
        fontSize={fontSize}
        fontFamily={fontFamily}
        headingMargin={headingMargin}
        textColor={textColor}
        boxBorder={boxBorder}
        boxPadding={boxPadding}
        borderRadius={borderRadius}>
        {innerText}
      </BoxedHeading>
    </div>
  );
});

export default boxedHeading;
