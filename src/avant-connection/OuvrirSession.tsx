import "../global.css";
import "./OuvrirSession.scss";
import { Input } from "@nextui-org/react";
import { Link, Form, useNavigate,Navigate } from "react-router-dom";
import img from "../assets/connectionImg-mobile.jpeg";
import "../fonts.scss";
import { useState, useEffect,useContext } from "react";
import {ContextUtil} from '../main';
import Cookies from 'js-cookie';


export default function OuvrirSession() {

  const {util, setUtil} = useContext(ContextUtil);
  const naviguer = useNavigate();
  let reponseJson:any;

  async function gererSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const reponse = await fetch("http://localhost:3000/api/auth/ouvrirSession", {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formulaire),
      });
       reponseJson = await reponse.json();
       console.log(reponseJson);
       setUtil(await reponseJson);
      
      return reponseJson;
    } catch (error) {
      console.error("Erreur de soumission de formulaire:", error);
    }
  }

  useEffect(() => {
    if(util && Object.keys(util).length > 0) {
      console.log(typeof util);
      naviguer("/accueil");
      localStorage.setItem("utilisateur",JSON.stringify(util));
    }else{
      console.log("pas cool");
    }
   
}, [util]);

  
  const [formulaire, setFormulaire] = useState({
    nom_util: "",
    mdp: "",
  });

  function gererChangements(e: any) {
    setFormulaire({
      ...formulaire,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div
      className="OuvrirSession h-screen flex  items-center flex-col  m-auto bg-cover z-0 text-white"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="overlay h-screen w-screen bg-black z-10 absolute opacity-30"></div>
      <h1 className="mt-44 z-20 logo">Foodies</h1>
      <Form
        onSubmit={gererSubmit}
        method="post"
        className="flex space-between space-y-6 mt-8 "
      >
        <Input
          type="text"
          name="nom_util"
          className="max-w-xs m-auto z-20"
          label="Username"
          onChange={gererChangements}
          value={formulaire.nom_util}
        />
        <Input
          type="password"
          name="mdp"
          className="max-w-xs m-auto z-20"
          label="Mot de passe"
          onChange={gererChangements}
          value={formulaire.mdp}
        />
        <input
          type="submit"
          className="w-48 m-auto bouttonSubmit z-20 h-11 font-bold text-black rounded-full bold"
          value="Ouvrir une session"
        />
      </Form>

      <Link
        to="/inscription"
        className="mt-8 font-bold underline z-20 text-white"
      >
        Inscrivez-Vous
      </Link>
    </div>
  );
}
