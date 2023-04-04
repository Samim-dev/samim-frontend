import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './utilitis.css'

// contexts
import { AuthContextProvider } from './context/AuthContext'
import { FormContextProvider } from './context/FormContext'
import { ProfileContextProvider } from './context/ProfileContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <FormContextProvider>
        <ProfileContextProvider>
          <App />
        </ProfileContextProvider>
      </FormContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
