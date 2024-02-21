import React from 'react'
import {Input, Button, ButtonGroup} from "@nextui-org/react";
import './global.css';
export default function Inscription() {
  return (
    <div className='Inscription h-screen flex justify-center items-center flex-col w-5/6 m-auto'>
    <h1>Foodies</h1>
    <h2>Créer un Compte</h2>
    <form action="" method="post" className='flex space-between space-y-4 mt-4 '>
    <Input type = "text" className="max-w-xs " label='Nom' />
        <Input type = "text" className="max-w-xs " label='Username' />
        <Input type = "email" className="max-w-xs" label='Courriel'/>
        <Input type = "password" className="max-w-xs" label='Mot de passe'/>
        <Button  className='w-48 m-auto'>Créer un Compte</Button>
    </form>
  
    <p>Vous avez déjà un compte?</p>
</div>
  )
}
