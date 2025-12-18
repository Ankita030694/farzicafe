import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import WhatsappFAB from './components/WaFAB/WhatsappFab.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <WhatsappFAB number={'+919599889701'}/>
  </StrictMode>,
)
