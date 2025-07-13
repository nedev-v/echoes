import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import '../styles/reset.css'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './screens/shared/contexts/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <App/>
    </AuthProvider>
  </StrictMode>,
)
