import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.tsx'
import './index.css'
import Erreur from './Erreur.tsx'
import Inscription from './Inscription.tsx'

// Création initiale du router comme fondation de navigation pour les pages de l'application
const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <Erreur />
},
{
  path: '/creerCompte',
  //element: <ouvrirSession />
},
{
  path: '/inscription',
  element: <Inscription />
},
{
  path: '/profile',
  //element: <ouvrirSession />
},
{
  path: '/parametres',
  //element: <ouvrirSession />
},
{
  path: '/exploration',
  //element: <ouvrirSession />
},
{
  path: '/ajoutPhoto',
  //element: <ouvrirSession />
},
]); 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
