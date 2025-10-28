import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppContextProvider from './AppContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AllRoute } from './routes/route.jsx'



createRoot(document.getElementById('root')).render(
  <AppContextProvider>
    <BrowserRouter><App /><AllRoute /></BrowserRouter>
  </AppContextProvider>
)
