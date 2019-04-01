import React from 'react'

import { text, select } from '@storybook/addon-knobs/react'
import { withNotes } from '@storybook/addon-notes'

import Paragraph from '../../src/lib/components/atoms/paragraph'

const paragraph = () => {
  const innerText = text('innerText', 'Hi there')
  return <Paragraph>{innerText}</Paragraph>
}

export default paragraph
