import React from 'react'
import { render, screen } from '@testing-library/react'

import Input from '../../components/Input'

describe('Input component scenarios', () => {
  it('Renders input correctly', () => {
    render(<Input placeholder="placeholder" />)

    const input = screen.getByPlaceholderText('placeholder')

    expect(input).toBeInTheDocument()
  })
})
