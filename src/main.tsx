import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.tsx'
import './index.css'

// Création initiale du router comme fondation de navigation pour les pages de l'application
const router = createBrowserRouter([{
  path: '/',
  element: <App />
}]); 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
