import { useState, useEffect } from "react";
import { Link, Form, useNavigate, Navigate } from "react-router-dom";
import { useMutation, QueryClient } from "@tanstack/react-query";
import EnteteParam from "./composantes/EnteteParam";
import televerserImg from "../assets/televerser.svg";
import Bouton from "./composantes/Bouton";
export default function AjoutPubli() {
  const [fichierSoumis, setFichier] = useState(null);

  const [formulaire, setFormulaire] = useState({
    titre: "",
    description: "",
  });

  const telechargerFichier = async () => {
    try {
      const formData = new FormData();
      // @ts-ignore
      formData.append("file", fichierSoumis);
      const reponse  =
        await fetch("http://localhost:3000/api/telecharger", {
          method: "POST",
          credentials: "include",
         
          body: formData,
        });
     
      // const reponseJson = await reponse.json();
       console.log(reponseJson);
      return reponse.text(); 

    } catch (erreur) {
      console.log(erreur);
    }
  };

  const queryClient = new QueryClient();

  const mutation = useMutation({
    mutationFn: async (formulaire: object) => {
      const reponse = await fetch(
        "http://localhost:3000/api/publications/ajouterPubli",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formulaire),
        }
      );
      const reponseJson = await reponse.json();
      return reponseJson;
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["publications"] });
    },
    onError: (error, variables, context) => {
      // An error happened!
      console.log(error);
    },
  });
  let reponseJson: any;

  async function gererSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      let imgUrl = "";
      if (fichierSoumis) {
        // @ts-ignore
        imgUrl = await telechargerFichier();
        console.log(imgUrl);
      } else {
        console.log("pas fichier");
      }
      // @ts-ignore
      mutation.mutate({
        titre: formulaire.titre,
        description: formulaire.description,
        image_data: imgUrl,
      });

      return reponseJson;
    } catch (error) {
      console.error("Erreur de soumission de formulaire:", error);
    }
  }
 
  function gererChangements(e: any) {
    setFormulaire({
      ...formulaire,
      [e.target.name]: e.target.value,
    });
  }


  function gererFichier(e: any) {
    const fichier = e.target.files[0];
    if (fichier) {
      setFichier(fichier);
      console.log(fichier);
    }
  }
  return (
    <div className="AjoutPubli h-screen w-screen">
      <EnteteParam />
      <Form action="" className="mt-12" onSubmit={gererSubmit} method="post">
        <div className="conteneur-img bg-white w-72 h-72 mx-auto mb-12 border-3 flex ">
          <label
            htmlFor="imageUtil"
            className="w-full h-full flex flex-col	items-center justify-center"
          >
           { fichierSoumis?<img className="object-cover" src={URL.createObjectURL(fichierSoumis)}/>:<div><img src={televerserImg} alt="" className="max-h-16 w-16 mx-auto" />
            <h4 className="h-fit text-center mt-4">
              Appuyez sur la flèche pour mettre l’image que vous voulez
            </h4> </div>}
            <input
              type="file"
              name="image_data"
              id="imageUtil"
              className="hidden"
              onChange={gererFichier}
            />
          </label>
        </div>
        <input
          type="text"
          placeholder="Titre"
          name="titre"
          className="text-2xl"
          onChange={gererChangements}
          value={formulaire.titre}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          className="text-2xl"
          onChange={gererChangements}
          value={formulaire.description}
        />
        <input type="text" placeholder="Ingredients" className="text-2xl" />
        <Bouton />
      </Form>
    </div>
  );
}
