import "./style.css";
import "./index.css";
import { useQuery,useMutation, QueryClient } from '@tanstack/react-query'
import {  Form} from "react-router-dom";

import { useState, useEffect } from "react";

import Commentaire from "./composantes/Commentaire";

interface CommentairesProps {
  publi_id: number;
}

interface CommentaireProps {
  id: number,
  description: string,
  datecreer: Date,
  util_id: number,
  publi_id: number,
}
export default function Commentaires({ publi_id }: CommentairesProps) {

  const chercherData = async (route:string) => { 
    const reponse = await fetch(`http://localhost:3000/api${route}`,{
        method: 'GET',
        credentials: 'include'
    });
    const reponseJson = await reponse.json();
    return reponseJson;
}
  const { isPending, error, data, refetch } = useQuery({
    queryKey: ['commentaires'],
    queryFn: () => chercherData('/commentaires?publi_id='+publi_id),
})

    const [formulaireSoumis, setFormulaire] = useState({
        description: "",
      });


    const queryClient = new QueryClient();

    const mutation = useMutation({
      mutationFn: async (formulaire: object) => {
        const reponse = await fetch(
          "http://localhost:3000/api/commentaires",
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
        // @ts-ignore
        refetch();

        setFormulaire({description:""});
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
        // @ts-ignore
        mutation.mutate({
          description: formulaireSoumis.description,
          publi_id: publi_id,
        });
       
        return reponseJson;
      } catch (error) {
        console.error("Erreur de soumission de formulaire:", error);
      }
      
    }
    function gererChangements(e: any) {
      setFormulaire({
        ...formulaireSoumis,
        [e.target.name]: e.target.value,
      });
    }
 


  return (
    <div className='Commentaires'>
        <Form  action="" className="" onSubmit={gererSubmit} method="post">
        <input type="text" name= "description" className="bg-red-400 h-10" onChange={gererChangements} value={formulaireSoumis.description}/>
        </Form>
    {error ? "OUPS Il y a une erreur..." : isPending ? "Attendez..." : data.map((commmentaire:CommentaireProps, index: number) => (
                <Commentaire key={index} {...commmentaire}/>
            ))}
    </div>
  )
}
