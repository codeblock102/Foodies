import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import Erreur from "./Erreur.tsx";
import Inscription from "./Inscription.tsx";
import OuvrirSession from "./OuvrirSession.tsx";
import Accueil from "./Accueil.tsx";
import Profile from "./Profile.tsx";


// Création initiale du router comme fondation de navigation pour les pages de l'application
const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
    errorElement: <Erreur />,
  },
  {
    path: "/ouvrirSession",
    element: <OuvrirSession />,
  },
  {
    path: "/inscription",
    element: <Inscription />,
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/parametres",
    //element: <ouvrirSession />
  },
  {
    path: "/exploration",
    //element: <ouvrirSession />
  },
  {
    path: "/ajoutPhoto",
    //element: <ouvrirSession />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <NextUIProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </NextUIProvider>
);
