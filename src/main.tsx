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
import Exploration from "./View/Exploration.tsx";
import AjoutPhoto from "./AjoutPhoto.tsx";
import Cookies from 'js-cookie';


// // Vérifie si l'utilisateur est logger en regardant les cookies du navigateur. Elle contient l'id de l'utilisateur. Si elle est vide, alors l'utilisateur n'est pas logger
// Vériifier avec cookies????
function verifierUtil(){
   return Cookies.get('util-id');
}
let utilVerifier;

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
      utilVerifier = verifierUtil();
      if(!utilVerifier){
        return redirect("/");
      }
      return null;
    }
  },
  {
    path: "/parametres",
    element: <Parametres />,
    loader: async () =>{
      utilVerifier = verifierUtil();
      if(!utilVerifier){
        return redirect("/");
      }
    }
  },
  {
    path: "/exploration",
    element: <Exploration />,
    loader: async () =>{
      utilVerifier = verifierUtil();
      if(!utilVerifier){
        return redirect("/");
      }
      return null;
    }
  },
  {
    path: "/ajoutPhoto",
    element: <AjoutPhoto />,
    loader: async () =>{
      utilVerifier = verifierUtil();
      if(!utilVerifier){
        return redirect("/");
      }
      return null;
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
