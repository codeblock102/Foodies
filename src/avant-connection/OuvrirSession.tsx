import '../global.css';
import './OuvrirSession.scss';
import {Input, Button} from "@nextui-org/react";
import {Link} from 'react-router-dom';
import img from '../assets/connectionImg-mobile.jpeg';
import '../fonts.scss';

export default function OuvrirSession() {
  return (
   <div className='OuvrirSession h-screen flex  items-center flex-col  m-auto bg-cover z-0 text-white' style={{backgroundImage: `url(${img})`}}>
    <div className="overlay h-screen w-screen bg-black z-10 absolute opacity-30"></div>
        <h1 className='mt-44 z-20 logo'>Foodies</h1>
        <form action="" method="post" className='flex space-between space-y-6 mt-8 '>
            <Input type = "text" className="max-w-xs m-auto z-20" label='Username' />
            <Input type = "password" className="max-w-xs m-auto z-20" label='Mot de passe'/>
            <input type="submit" className='w-48 m-auto bouttonSubmit z-20 h-11 font-bold text-black rounded-full bold' value="Ouvrir une session" />
        </form>
      
        <Link to= "/inscription" className='mt-8 font-bold underline z-20 text-white'>Inscrivez-Vous</Link>
    </div>
  )
  
}
