import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const Context = createContext(null)

function ContextProvider({ children }) {
  const [user, setUser] = useState({
    username: '',
    password: '',
    isLogged: false
  })

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default ContextProvider
