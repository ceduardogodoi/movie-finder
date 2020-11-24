import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { Context } from '../../store/AppContext'

import Input from '../../components/Input'
import Button from '../../components/Button'

import { Main, Container, Fieldset, HeadingContainer } from '../styles'

function Login() {
  const { user, setUser } = useContext(Context)
  const history = useHistory()

  function disable() {
    const { username, password } = user

    return username.length < 1 || password.length < 1
  }

  function handleChange(event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  function handleClick(event) {
    event.preventDefault()

    setUser({
      ...user,
      isLogged: true
    })

    localStorage.setItem(
      'user',
      JSON.stringify({
        ...user,
        isLogged: true
      })
    )

    history.push('/search')
  }

  return (
    <Main>
      <Container>
        <HeadingContainer>
          <h1>Sign in</h1>
          <p>Enter your credentials</p>
        </HeadingContainer>
        <form>
          <Fieldset isDisabled={disable()}>
            <Input
              id="username"
              name="username"
              placeholder="Enter your username"
              autoComplete="username"
              value={user.username}
              onChange={handleChange}
            />
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              value={user.password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              text="Sign in"
              disabled={disable()}
              onClick={handleClick}
            />
          </Fieldset>
        </form>
      </Container>
    </Main>
  )
}

export default Login
