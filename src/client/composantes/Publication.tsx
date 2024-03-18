import img_publi from "../../assets/connectionImg.jpg";
import aime_menuPubli from "../../assets/aime_menuPubli.svg";
import msgs_menuPubli from "../../assets/msgs_menuPubli.svg";
import partager_menuPubli from "../../assets/partager_menuPubli.svg";
import description_menuPubli from "../../assets/description_menuPubli.svg";
import sauvegarder_menuPubli from "../../assets/sauvegarder_menuPubli.svg";
import Commentaires from "../Commentaires";
import { useState, useEffect } from "react";

export default function Publication(publi:any) {
  const [afficherCommentaires, setAfficherCommentaires] = useState(false);
  console.log(publi.image_data);
  return (
    <div className="Publication w-full h-96 mt-10">
      <div className="entete_publi w-full h-14 bg-white pt-2 flex items-center">
        <div className="img-util h-10 w-10 bg-gray-200 rounded-full ml-1.5 "></div>
        <p className="ml-2">{publi.nom_util}</p>
      </div>
      <img className="img_publi w-full h-4/5" src={'/src/assets/publications_img/'+publi.image_data} alt="" />
      <div className="menu_publi w-full h-14 bg-white pt-1 flex justify-evenly text-center">
        <img className="size-12" src={aime_menuPubli} alt="" />
        <img className="size-12" src={msgs_menuPubli} alt="" onClick = {(e)=> setAfficherCommentaires(!afficherCommentaires)}/>
        <img className="size-12" src={partager_menuPubli} alt="" />
        <img className="size-12" src={description_menuPubli} alt="" />
        <img className="size-12" src={sauvegarder_menuPubli} alt="" />
      </div>
      {afficherCommentaires?<Commentaires/>: null}
    </div>
  );
}
