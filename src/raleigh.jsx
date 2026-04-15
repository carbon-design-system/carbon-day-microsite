import React from 'react'
import ReactDOM from 'react-dom/client'
import { Theme } from '@carbon/react'
import Raleigh from './pages/Raleigh.jsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme theme="g100">
      <Raleigh />
    </Theme>
  </React.StrictMode>,
)

// Made with Bob