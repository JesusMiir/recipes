// BrowserRouter
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { ExampleContextProvider } from './context/ExampleContext.jsx'
import { RecipiesContextProvider } from './context/RecipiesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecipiesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecipiesContextProvider>
  </StrictMode>,
)
