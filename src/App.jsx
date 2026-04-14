import { Routes, Route } from 'react-router-dom'
import { Theme } from '@carbon/react'
import Home from './pages/Home'
import Raleigh from './pages/Raleigh'

function App() {
  return (
    <Theme theme="g100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/raleigh" element={<Raleigh />} />
      </Routes>
    </Theme>
  )
}

export default App

// Made with Bob
