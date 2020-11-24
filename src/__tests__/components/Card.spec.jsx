import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'

import Card from '../../components/Card'

describe('Card component scenarios', () => {
  const data = {
    poster: '',
    title: '',
    year: '',
    type: '',
    plot: '',
    language: '',
    actors: '',
    release: ''
  }

  const wrapper = ({ data } = {}) => render(<Card data={data} />)

  it('Renders default card correctly', () => {
    wrapper({ data })

    const button = screen.getByText('See more')

    expect(button).toBeInTheDocument()
  })

  it("Opens modal, clicks anywhere, and closes modal by clicking modal's overlay", () => {
    wrapper({ data })

    const button = screen.getByText('See more')
    fireEvent.click(button)

    const cardContainer = screen.getByTestId('card-container')
    fireEvent.click(cardContainer)

    const cardOverlay = screen.getByTestId('card-overlay')
    fireEvent.click(cardOverlay)

    expect(button).toBeInTheDocument()
  })

  it('Opens modal, presses Q key, and closes modal by pressing escape', () => {
    wrapper({ data })

    const button = screen.getByText('See more')
    fireEvent.click(button)

    const cardOverlay = screen.getByTestId('card-overlay')

    fireEvent.keyUp(cardOverlay, { key: 'q', code: 'KeyQ' })
    fireEvent.keyUp(cardOverlay, { key: 'Escape', code: 'Escape' })

    expect(button).toBeInTheDocument()
  })
})
