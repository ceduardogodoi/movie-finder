import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Routes from './Routes'

import ContextProvider from './store/AppContext'

import { GlobalStyles } from './styles'

ReactDOM.render(
  <BrowserRouter>
    <ContextProvider>
      <React.StrictMode>
        <GlobalStyles />
        <Header />
        <Routes />
      </React.StrictMode>
    </ContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
