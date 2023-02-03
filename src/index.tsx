import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Router } from './navigation/routing'
import { ModalProvider } from './providers/modal'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ModalProvider>
      <Router />
    </ModalProvider>
  </React.StrictMode>
)
