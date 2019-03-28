import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import 'typeface-raleway'

const TextWrapper = ({ children, className }) => {
  const css = classNames('text', className)
  const Tag = `p`
  return <Tag className={css}>{children}</Tag>
}

TextWrapper.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}

const Paragraph = styled(TextWrapper)`
  font-family: 'Raleway';
  margin-top: 0;
`

export default Paragraph
