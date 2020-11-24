import React from 'react'
import { screen, render } from '@testing-library/react'

import Button from '../../components/Button'

describe('Button component scenarios', () => {
  const wrapper = ({ text = 'Button', size } = {}) =>
    render(<Button text={text} size={size} />)

  it('Renders default button correctly', () => {
    wrapper()

    const button = screen.getByText('Button')

    expect(button).toBeInTheDocument()
  })

  it('Renders small button correctly', () => {
    wrapper({ size: 'small' })

    const button = screen.getByText('Button')

    expect(button).toBeInTheDocument()
  })
})
