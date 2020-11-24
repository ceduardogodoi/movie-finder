import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { screen, render, fireEvent } from '@testing-library/react'

import Header from '../../components/Header'

import { Context } from '../../store/AppContext'

describe('Header component scenarios', () => {
  const user = {
    username: 'username',
    password: 'password',
    isLogged: true
  }

  const setUser = jest.fn

  const wrapper = () =>
    render(
      <BrowserRouter>
        <Context.Provider value={{ user, setUser }}>
          <Header />
        </Context.Provider>
      </BrowserRouter>
    )

  it('Renders header correctly', () => {
    wrapper()

    const a = screen.getByText('Logout')
    fireEvent.click(a)

    const headerContainer = screen.getByTestId('header-container')
    expect(headerContainer).toBeInTheDocument()
  })
})
