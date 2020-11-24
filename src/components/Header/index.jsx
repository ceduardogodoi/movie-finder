import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { Context } from '../../store/AppContext'

import { Ul, HeaderContainer } from './styles'

function Header() {
  const {
    user: { username, isLogged },
    setUser
  } = useContext(Context)

  function handleLogout() {
    setUser({
      username: '',
      password: '',
      isLogged: false
    })

    localStorage.removeItem('user')
  }

  return (
    <HeaderContainer data-testid="header-container">
      {isLogged && (
        <>
          <h2>Welcome {username}</h2>
          <nav>
            <Ul>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/" onClick={handleLogout}>
                  Logout
                </Link>
              </li>
            </Ul>
          </nav>
        </>
      )}
    </HeaderContainer>
  )
}

export default Header
