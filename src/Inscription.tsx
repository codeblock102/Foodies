import React from 'react'
import  './Inscription.css';
export default function Inscription() {
  return (
    <div className='Inscription'>
        <h1>Foodies</h1>
        <h2>Créer un Compte</h2>
        <form action="" method="post">
            <label htmlFor="nom-util">Nom</label>
            <input type="text" id='nom-util' placeholder='Nom' />
            <label htmlFor="username-util">Username</label>
            <input type="text" placeholder='username' id='username-util'/>
            <label htmlFor="courriel-util">Courriel</label>
            <input type="text" placeholder='courriel'  id='courriel-util'/>
            <label htmlFor="mdp-util">Mot de passe</label>
            <input type="text" placeholder='mot de passe' id='mdp-util'/>
            <button type="submit">S'inscrire</button>
        </form>
        <p>Deja un compte?</p>
    </div>
  )
}
