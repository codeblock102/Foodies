import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import { useState} from "react";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import Erreur from "./Erreur.tsx";
import Inscription from "./avant-connection/Inscription.tsx";
import OuvrirSession from "./avant-connection/OuvrirSession.tsx";
import Accueil from "./View/Accueil.tsx";
import Profile from "./View/Profile.tsx";
import Parametres from "./Parametres.tsx";
import Exploration from "./Exploration.tsx";
import AjoutPhoto from "./AjoutPhoto.tsx";

// // Vérifie si l'utilisateur est logger. Elle contient les infos de l'utilisateur. Si elle est vide, alors l'utilisateur n'est pas logger
// Vériifier avec cookies????
let utilLogger:object;

// Création initiale du router comme fondation de navigation pour les pages de l'application
const router = createBrowserRouter([
  {
    path: "/",
    element: <OuvrirSession/>,
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
    element: <Profile />,
    loader: async () =>{
      if(!utilLogger){
        return redirect("/");
      }
    }
  },
  {
    path: "/parametres",
    element: <Parametres />,
    loader: async () =>{
      if(!utilLogger){
        return redirect("/");
      }
    }
  },
  {
    path: "/exploration",
    element: <Exploration />,
    loader: async () =>{
      if(!utilLogger){
        return redirect("/");
      }
    }
  },
  {
    path: "/ajoutPhoto",
    element: <AjoutPhoto />,
    loader: async () =>{
      if(!utilLogger){
        return redirect("/");
      }
    }
  },
  {
    path: "/accueil",
    element: <Accueil />,
    // loader: async () =>{
    //   if(!utilLogger){
    //     return redirect("/");
    //   }
    // }
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <NextUIProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </NextUIProvider>
);
