import React from 'react';
import 'typeface-roboto';

import { text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';

import Link from '../../src/lib/components/atoms/Link';
import instructions from './markdown/link.md';

const link = withNotes(instructions)(() => {
  const color = text('color', 'rebeccapurple');
  const href = text('href', 'www.google.com');
  const textDecoration = text('textDecoration', 'none');
  const hoverTextDecoration = text('hoverTextDecoration', 'underline');
  const fontFamily = text('fontFamily', 'Roboto');

  return (
    <div style={{ padding: '20px' }}>
      <Link
        fontFamily={fontFamily}
        href={href}
        color={color}
        textDecoration={textDecoration}
        hoverTextDecoration={hoverTextDecoration}>
        Hi there, I'm a link bro.
      </Link>
    </div>
  );
});

export default link;
