import img_publi from "../../assets/connectionImg.jpg";
import aime_menuPubli from "../../assets/aime_menuPubli.svg";
import msgs_menuPubli from "../../assets/msgs_menuPubli.svg";
import partager_menuPubli from "../../assets/partager_menuPubli.svg";
import description_menuPubli from "../../assets/description_menuPubli.svg";
import sauvegarder_menuPubli from "../../assets/sauvegarder_menuPubli.svg";
import Commentaires from "../Commentaires";
import { useState } from "react";
import { useQuery,useMutation, QueryClient } from '@tanstack/react-query'
import {Badge} from "@nextui-org/react";

export default function Publication(publi: any) {
  const chercherData = async (route: string) => {
    const reponse = await fetch(`http://localhost:3000/api${route}`, {
      method: 'GET',
      credentials: 'include'
    });
    const reponseJson = await reponse.json();
    console.log(reponseJson);
    return reponseJson;
  }

  const { isPending, error, data } = useQuery({
    queryKey: ['publications',publi.id],
    queryFn: () => chercherData('/likes?publi_id='+publi.id),
  })

  
  const [afficherCommentaires, setAfficherCommentaires] = useState(false);
  console.log(data);

  const queryClient = new QueryClient();


  // const mutation = useMutation({
  //   mutationFn: async (formulaire: number) => {
  //     const reponse = await fetch(
  //       "http://localhost:3000/api/likes",
  //       {
  //         method: "POST",
  //         credentials: "include",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formulaire),
  //       }
  //     );
  //     const reponseJson = await reponse.json();
  //     console.log(reponseJson);
  //     return reponseJson;
  //   },
  //   onSuccess: () => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries({ queryKey: ["likes"] });
  //   },
  //   onError: (error, variables, context) => {
  //     // An error happened!
  //     console.log(error);
  //   },
  // });




  function gererLike(){
    mutation.mutate()
  }
  return (
    <div className="Publication w-full min-h-96 mt-10">
      <div className="entete_publi w-full h-14 bg-white pt-2 flex items-center">
        <div className="img-util h-10 w-10 bg-gray-200 rounded-full ml-1.5 "></div>
        <p className="ml-2">{publi.nom_util}</p>
      </div>
      <img className="img_publi w-full h-4/5" src={'/src/assets/publications_img/' + publi.image_data} alt="" />
      <div className="menu_publi w-full h-14 bg-white pt-1 flex justify-evenly text-center">
        <Badge content={(data && data.length === 0) ? 0 : (data ? data.length : 0)} size="lg" color="primary" isInvisible = {false} > 
          <img className="size-12" src={aime_menuPubli} alt="" onClick={gererLike}/>
        </Badge>
        <img className="size-12" src={msgs_menuPubli} alt="" onClick={(e) => setAfficherCommentaires(!afficherCommentaires)} />
        <img className="size-12" src={partager_menuPubli} alt="" />
        <img className="size-12" src={description_menuPubli} alt="" />
        <img className="size-12" src={sauvegarder_menuPubli} alt="" />
      </div>
      {afficherCommentaires ? <Commentaires publi_id={publi.id} /> : null}
    </div>
  );
}
