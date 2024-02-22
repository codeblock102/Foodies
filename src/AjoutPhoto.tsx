import React from 'react'

export default function AjoutPhoto() {
  return (
    <div className='AjoutPhoto'>
        <div className="navBar"><button className='backButton'>{"<-"}</button><h2>Ajouter une photo</h2></div>
        <div className="ajouterImg"></div>
        <form action="">
            <input type="text"  placeholder='Titre'/>
            <input type="text"  placeholder='Description'/>
            <button type="submit">Publier</button>
        </form>
    </div>
  )
}
