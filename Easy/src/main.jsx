import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './Components/NavBar'
import Homepage from './Components/Index'
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Nav /> 
      <Homepage />
  </StrictMode>,
)
