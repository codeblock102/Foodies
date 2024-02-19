import React from 'react'
import  './Inscription.scss';
import './global.scss'
export default function OuvrirSession() {
  return (
   <div className='Inscription'>
        <h1>Foodies</h1>
        <h2>Ouvrir une session</h2>
        <form action="" method="post">
            <label htmlFor="username-util">Username</label>
            <input type="text" placeholder='username' id='username-util'/>
            <label htmlFor="mdp-util">Mot de passe</label>
            <input type="text" placeholder='mot de passe' id='mdp-util'/>
            <button type="submit">Ouvrir une session</button>
        </form>
        <p>Pas de compte?</p>
    </div>
  )
  
}
