import React from 'react'

import { text, select } from '@storybook/addon-knobs/react'
import { withNotes } from '@storybook/addon-notes'

import instructions from './markdown/heading1.md'
import Heading from '../../src/lib/components/atoms/Heading'

const heading = withNotes(instructions)(() => {
  const innerText = text('innerText', 'Hi there')
  const level = select('Level', [1, 2, 3, 4, 5, 6], 1)
  return (
    <div style={{ padding: '20px' }}>
      <Heading level={level}>{innerText}</Heading>
    </div>
  )
})

export default heading
