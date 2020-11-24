import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton } from './styles'

function Button({ text, ...props }) {
  return <StyledButton {...props}>{text}</StyledButton>
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Button
