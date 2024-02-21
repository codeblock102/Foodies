import React from 'react'
import  './Inscription.scss';
import './style.css'
import {Input, Button, ButtonGroup} from "@nextui-org/react";

export default function OuvrirSession() {
  return (
   <div className='OuvrirSession h-screen flex justify-center items-center flex-col w-5/6 m-auto'>
        <h1>Foodies</h1>
        <h2>Ouvrir une session</h2>
        <form action="" method="post" className='flex space-between space-y-4 mt-4 '>
            <Input type = "text" className="max-w-xs " label='Username' />
            <Input type = "password" className="max-w-xs" label='Mot de passe'/>
            <button type="submit">Ouvrir une session</button>
            <Button  className='w-48 m-auto'>Ouvrir une session</Button>
        </form>
      
        <p>Pas de compte?</p>
    </div>
  )
  
}
