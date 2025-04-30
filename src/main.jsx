// BrowserRouter
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { ExampleContextProvider } from './context/ExampleContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ExampleContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ExampleContextProvider>
  </StrictMode>,
)
