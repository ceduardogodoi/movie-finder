import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Context } from '../../store/AppContext'

import Login from '../../pages/Login'

describe('Login page scenarios', () => {
  const user = {
    username: '',
    password: '',
    isLogged: false
  }

  const setUser = jest.fn

  const wrapper = () =>
    render(
      <Context.Provider value={{ user, setUser }}>
        <Login />
      </Context.Provider>
    )

  const changeUsername = value => {
    const username = screen.getByPlaceholderText('Enter your username')
    userEvent.type(username, {
      target: {
        value
      }
    })
  }

  const changePassword = value => {
    const password = screen.getByPlaceholderText('Enter your password')
    userEvent.type(password, {
      target: {
        value
      }
    })
  }

  it('Renders Login page correctly', () => {
    wrapper()

    const h1 = screen.getByText('Sign in', {
      selector: 'h1'
    })

    expect(h1).toBeInTheDocument()
  })

  it("Enters username only and verifies that 'Sign in' button is disabled", () => {
    wrapper()

    changeUsername('username')
    changePassword('password')

    const button = screen.getByText('Sign in', {
      selector: 'button'
    })

    expect(button).not.toBeDisabled()
  })
})
