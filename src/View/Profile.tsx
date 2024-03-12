import Entete from './composantes/Entete';
import MenuNav from "./composantes/MenuNav";
import Publimini from './composantes/Publimini';
import { useEffect,useState } from "react";

import '../style.css';
import '../index.css';
export default function Profile() {
    // tracker la variable de l'utilisateur
    const [util,setUtil] =  useState();
      useEffect(() => {
        async function chercherUtilInfo(){
            try{
            // creer la variable qui contiendra le lien de la page
            const lien = window.location.pathname;
            const reponse = await fetch(`http://localhost:3000${lien}`);
            const reponseJson = await reponse.json();
            setUtil(reponseJson);
            console.log(reponseJson);
            }
            catch(error){
                console.error("Erreur de soumission de formulaire:", error);

            }
            //console.log(lien);
        }
        chercherUtilInfo()
      }, [])
      
  return (
    <div className="Profile">
        <Entete/>  
        <section className='profileInfo'>
            <div className="imgMain"></div>
            <div className="profileImg"></div>
            <div className="textFollowing">
                <p>200 Following</p>
                <p>144k Followers</p>
            </div>
            <div className="infoPerso">
                <h2>{util.nom_util}</h2>
                <h3>Titre</h3>
                <p>description</p>
            </div>
        </section>
        <button className='follow'>Follow</button>
        <div className="posts flex w-screen mx-auto ml-0.5">
            <Publimini/>
            <Publimini/>
            <Publimini/>
            <Publimini/>
            <Publimini/>
            <Publimini/>
            <Publimini/>
            <Publimini/>
            <Publimini/>
            <Publimini/>
        </div>
        <MenuNav/>
    </div>
  )
}
