import Entete from "./composantes/Entete";
import MenuNav from "./composantes/MenuNav";
import Publimini from "./composantes/Publimini";
import { useEffect, useState } from "react";

import "./style.css";
import "./index.css";
export default function Profile() {

  // Define the type of 'util' object
  interface Util {
    nom_util: string; // Assuming 'nom_util' is a string property
    // Add other properties if needed
    image_data: string; //
  }
  // tracker la variable de l'utilisateur
  const [util, setUtil] = useState<Util | null>(null);
  useEffect(() => {
    async function chercherUtilInfo() {
      try {
        // creer la variable qui contiendra le lien de la page
        const lien = window.location.pathname;
        const reponse = await fetch(`http://localhost:3000${lien}`);
        const reponseJson = await reponse.json();
        setUtil(reponseJson);
        console.log(reponseJson);
      } catch (error) {
        console.error("Erreur de soumission de formulaire:", error);
      }
      //console.log(lien);
    }
    const data = new FileReader();
    //data.readAsDataURL()
    chercherUtilInfo();
    console.log(`data:image/jpeg;base64,${util?.image_data}`)
  }, []);

  return (
    <div className="Profile">
      <Entete />
      <section className="profileInfo">
        <div className="imgMain"></div>
        <div className="profileImg"></div>
        <div className="textFollowing">
          <p>200 Following</p>
          <p>144k Followers</p>
        </div>
        <div className="infoPerso">
          <h2>{util? util.nom_util: 'erreur'}</h2>
          <h3>Titre</h3>
          <p>description</p>
        </div>
      </section>
      <button className="follow">Follow</button>
      <div className="posts flex w-screen mx-auto ml-0.5">
        <img src={`data:image/jpeg;base64,${util?.image_data}`} alt="" />
        <Publimini />
        <Publimini />
        <Publimini />
        <Publimini />
        <Publimini />
        <Publimini />
        <Publimini />
        <Publimini />
        <Publimini />
        <Publimini />
      </div>
      <MenuNav />
    </div>
  );
}
