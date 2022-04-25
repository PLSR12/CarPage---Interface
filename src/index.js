import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify'

import GlobalStyles from './styles/GlobalStyles'
import AppRoutes from './routes'

ReactDOM.render(
  <>
    <AppRoutes />
    <ToastContainer autoClose={2500} theme='colored' />
    <GlobalStyles />
  </>,
  document.getElementById('root')
)
