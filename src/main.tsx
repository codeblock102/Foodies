import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, redirect, RouterProvider, useParams } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import Erreur from "./Erreur.tsx";
import Inscription from "./avant-connection/Inscription.tsx";
import OuvrirSession from "./avant-connection/OuvrirSession.tsx";
import Accueil from "./View/Accueil.tsx";
import Profile from "./View/Profile.tsx";
import Parametres from "./View/Parametres.tsx";
import Exploration from "./View/Exploration.tsx";
import AjoutPhoto from "./View/AjoutPhoto.tsx";
import Cookies from 'js-cookie';

export const ContextUtil = createContext<any>(undefined);
// // Vérifie si l'utilisateur est logger en regardant les cookies du navigateur. Elle contient l'id de l'utilisateur. Si elle est vide, alors l'utilisateur n'est pas logger
// Vériifier avec cookies????
function verifierUtil() {
  return Cookies.get('util-id');
}
let utilVerifier;

export default function Main() {

  const queryClient = new QueryClient();

  // Prendre le localstorage l'utilisateur 
  const utilisateurString: string | null = localStorage.getItem('utilisateur');

  const [util, setUtil] = useState(utilisateurString);

  useEffect(() => {
    // Vérifier si la valeur est null
    if (utilisateurString !== null) {
      setUtil(utilisateurString);
    } else {
      setUtil(null);
    }

  }, [])


  // Création initiale du router comme fondation de navigation pour les pages de l'application
  const router = createBrowserRouter([
    {
      path: "/",
      element: <OuvrirSession />,
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
      loader: async () => {
        utilVerifier = verifierUtil();
        if (!utilVerifier) {
          return redirect("/");
        }
        return null;
      }
    },
    {
      path: "/profile/:nom_util",
      element: <Profile />,
    },
    {
      path: "/parametres",
      element: <Parametres />,
      // loader: async () =>{
      //   utilVerifier = verifierUtil();
      //   if(!utilVerifier){
      //     return redirect("/");
      //   }
      // }
    },
    {
      path: "/exploration",
      element: <Exploration />,
      // loader: async () =>{
      //   utilVerifier = verifierUtil();
      //   if(!utilVerifier){
      //     return redirect("/");
      //   }
      //   return null;
      // }
    },
    {
      path: "/ajoutPhoto",
      element: <AjoutPhoto />,
      // loader: async () =>{
      //   utilVerifier = verifierUtil();
      //   if(!utilVerifier){
      //     return redirect("/");
      //   }
      //   return null;
      // }
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

  return (
    <NextUIProvider>
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <ContextUtil.Provider value={{ util, setUtil }}>
            <RouterProvider router={router} />
          </ContextUtil.Provider>
        </QueryClientProvider>
      </React.StrictMode>
    </NextUIProvider>

  );
}
ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);
