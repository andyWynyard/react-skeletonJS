import { storiesOf } from '@storybook/react'
import { checkA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs/react'

import button from './atoms/button'
import errorText from './atoms/errorText'
import heading from './atoms/heading'
import paragraph from './atoms/paragraph'
import input from './atoms/input'
import link from './atoms/link'
import loadingIcon from './atoms/loadingIcon'

const stories = storiesOf('SkeletonJS|Atoms', module)

stories.addDecorator(withKnobs)
stories.addDecorator(checkA11y)

stories
  .add('Button', button)
  .add('ErrorText', errorText)
  .add('Heading', heading)
  .add('Paragraph', paragraph)
  .add('Input', input)
  .add('Link', link)
  .add('Loading Icon', loadingIcon)
