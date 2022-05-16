import { StylesProvider, createGenerateClassName } from '@material-ui/core'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Components/Header'
import MarketingApp from './Components/MarketingApp'

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
})
function App() {
  return (
    <div>
      <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
          <div>
            <Header />
            <MarketingApp />
          </div>
        </StylesProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
