import { Input, Button, ButtonGroup } from "@nextui-org/react";
import "../global.css";
import "./OuvrirSession.scss";
import { Link, Form } from "react-router-dom";
import img from "../assets/connectionImg-mobile.jpeg";
import { useState, useMemo } from "react";

export default function Inscription() {
  // Fonction qui gère la soumission du formulaire
  async function gererSubmit(e: React.FormEvent<HTMLFormElement>) {
    // Empêcher le
    e.preventDefault();

    try {
      // Requête au serveur
      const reponse = await fetch("http://localhost:3000/inscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formulaire),
      });

      // Réponse du serveur
      const data = await reponse.text();
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }
  // Fonction qui traque ce qui est écrit dans les champs de saisie
  const [formulaire, setFormulaire] = useState({
    prenom: "",
    nom: "",
    nomUtil: "",
    courriel: "",
    motDePasse: "",
    date: "",
  });
  // fonction qui cherche les charactères qui peuvent mettre à risque la bd et retourne le charactère si elle le trouve ou retourne 0 si elle ne le trouve pas
  const validerCourriel = (valeur: string) => valeur.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (formulaire.courriel === "") {
      return false;
    }
    
    return validerCourriel(formulaire.courriel) ? false : true;
  }, [formulaire.courriel]);

  const verifierInput = (input:string) => input.match(/^[A-Z0-9._%+-]+$/i);

  function validerInput(input:string){
      if(input === ""){
        return false;
      }

    return verifierInput(input) ? false : true;
  }
  // Fonction qui enregistre les changements dans les champs d'input
  function gererChangements(e: any) {
    setFormulaire({
      ...formulaire,
      [e.target.name]: e.target.value,
    });
  }


  return (
    <div
      className="Inscription h-screen flex  items-center flex-col  m-auto bg-cover z-0 text-white"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="overlay h-screen w-screen bg-black z-10 absolute opacity-30"></div>
      <h1 className="mt-36 z-20 logo">Foodies</h1>
      <h2 className="z-20">Créer un Compte</h2>
      <Form
        onSubmit={gererSubmit}
        method="post"
        className="flex space-between space-y-6  "
      >
        <Input
        isRequired
          type="text"
          name="prenom"
          className="max-w-xs m-auto z-20"
          label="Prénom"
          onChange={gererChangements}
          value={formulaire.prenom}
          isInvalid={validerInput(formulaire.prenom)}
          errorMessage={isInvalid && "Entrez un prénom valide"}

        />
        <Input
        isRequired
          type="text"
          name="nom"
          className="max-w-xs m-auto z-20"
          label="Nom"
          onChange={gererChangements}
          value={formulaire.nom}
          isInvalid={validerInput(formulaire.nom)}
          errorMessage={isInvalid && "Entrez un nom valide"}
        />
        <Input
        isRequired
          type="text"
          name="nomUtil"
          className="max-w-xs m-auto z-20 "
          label="Nom_Utilisateur"
          onChange={gererChangements}
          value={formulaire.nomUtil}
          isInvalid={validerInput(formulaire.nomUtil)}
          errorMessage={isInvalid && "Entrez un nom d'utilisateur valide"}
        />
        <Input
        isRequired
          type="email"
          name="courriel"
          className="max-w-xs m-auto z-20"
          label="Courriel"
          onChange={gererChangements}
          value={formulaire.courriel}
          isInvalid={isInvalid}
          color={isInvalid ? "danger" : "default"}
          errorMessage={isInvalid && "Entrez un email valide"}
        />
        <Input
        isRequired
          type="password"
          name="motDePasse"
          className="max-w-xs m-auto z-20"
          label="Mot de passe"
          onChange={gererChangements}
          value={formulaire.motDePasse}
          isInvalid={validerInput(formulaire.motDePasse)}
          errorMessage={isInvalid && "Entrez un mot de passe valide"}
        />
        <Input
          type="date"
          name="date"
          className="max-w-xs m-auto z-20"
          onChange={gererChangements}
          value={formulaire.date}
        />
        <input
          type="submit"
          className="w-48 m-auto bouttonSubmit z-20 h-11 font-bold text-black rounded-full bold"
          value="S'inscrire"
        />
      </Form>

      <Link to="/" className="mt-8 font-bold underline z-20 text-white">
        Vous avez déja un compte?
      </Link>
    </div>
  );
}
