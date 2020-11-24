import React from 'react'
import { screen, render } from '@testing-library/react'

import ContextProvider from '../../store/AppContext'

describe('AppContext scenarios', () => {
  it('Renders children with ContextProvider', () => {
    render(
      <ContextProvider>
        <h1>Hello World</h1>
      </ContextProvider>
    )

    const h1 = screen.getByText('Hello World')

    expect(h1).toBeInTheDocument()
  })
})
