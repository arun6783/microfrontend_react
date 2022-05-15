import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Components/Header'
import MarketingApp from './Components/MarketingApp'

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />

          <MarketingApp />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
