import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Exp8onlineBookstore from './components/Exp7onlineBookstore.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Exp8onlineBookstore />
  </StrictMode>,
)
