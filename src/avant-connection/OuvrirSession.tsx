import '../global.css';
import './OuvrirSession.scss';
import {Input, Button} from "@nextui-org/react";
import {Link, Form} from 'react-router-dom';
import img from '../assets/connectionImg-mobile.jpeg';
import '../fonts.scss';
import { useState } from 'react';

export default function OuvrirSession() {

  async function gererSubmit(e: React.FormEvent<HTMLFormElement>) {
   
    e.preventDefault();
    try{
      const reponse = await fetch('http://localhost:3000/',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({formulaire})
      });
      const data = await reponse.text();
      console.log(data);
    }   
    catch (error) {
      console.error('Error submitting form:', error);
    }
    
  }
  const [formulaire,setFormulaire] = useState({
    'nomUtil': '',
    'motDePasse': '',
  });

  function gererChangements(e: any) {
    setFormulaire({
      ...formulaire,
      [e.target.name]: e.target.value,
    });
  }
  return (
   <div className='OuvrirSession h-screen flex  items-center flex-col  m-auto bg-cover z-0 text-white' style={{backgroundImage: `url(${img})`}}>
    <div className="overlay h-screen w-screen bg-black z-10 absolute opacity-30"></div>
        <h1 className='mt-44 z-20 logo'>Foodies</h1>
        <Form  onSubmit = {gererSubmit} method="post" className='flex space-between space-y-6 mt-8 '>
            <Input type = "text" name = 'nomUtil' className="max-w-xs m-auto z-20" label='Username' onChange={gererChangements} value={formulaire.nomUtil}/>
            <Input type = "password" name = 'motDePasse' className="max-w-xs m-auto z-20" label='Mot de passe'  onChange={gererChangements}value={formulaire.motDePasse}/>
            <input type="submit" className='w-48 m-auto bouttonSubmit z-20 h-11 font-bold text-black rounded-full bold' value="Ouvrir une session" />
        </Form>
      
        <Link to= "/inscription" className='mt-8 font-bold underline z-20 text-white'>Inscrivez-Vous</Link>
    </div>
  )
  
}
