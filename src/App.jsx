import { Routes, Route } from 'react-router-dom'
import { Theme } from '@carbon/react'
import Home from './pages/Home'

function App() {
  return (
    <Theme theme="g100">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Theme>
  )
}

export default App

// Made with Bob
