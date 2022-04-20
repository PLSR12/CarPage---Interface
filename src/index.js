import React from 'react'
import ReactDOM from 'react-dom'

import GlobalStyles from './styles/GlobalStyles'
import AppRoutes from './routes'

ReactDOM.render(
  <>
    <AppRoutes />
    <GlobalStyles />
  </>,
  document.getElementById('root')
)
