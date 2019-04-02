import React from 'react'

import { text, select } from '@storybook/addon-knobs/react'

import H from '../../src/lib/components/atoms/heading'

const heading = () => {
  const innerText = text('innerText', 'Hi there')
  const level = select('Level', [1, 2, 3, 4, 5, 6], 1)
  return (
    <div style={{ padding: '20px' }}>
      <H level={level}>{innerText}</H>
    </div>
  )
}

export default heading
