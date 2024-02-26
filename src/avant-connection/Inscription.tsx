import { Input, Button, ButtonGroup } from "@nextui-org/react";
import "../global.css";
import './OuvrirSession.scss';
import { Link } from "react-router-dom";
import img from '../assets/connectionImg-mobile.jpeg';

export default function Inscription() {
  return (
    <div
      className="Inscription h-screen flex  items-center flex-col  m-auto bg-cover z-0 text-white" style={{ backgroundImage: `url(${img})` }}>
      <div className="overlay h-screen w-screen bg-black z-10 absolute opacity-30"></div>
        <h1 className='mt-44 z-20 logo'>Foodies</h1>
        <h2 className="z-20">Créer un Compte</h2>
        <form action="" method="post" className="flex space-between space-y-6 mt-8 ">
          <Input type="text" className="max-w-xs m-auto z-20" label="Nom" />
          <Input type="text" className="max-w-xs m-auto z-20 "label="Username"/>
          <Input type="email" className="max-w-xs m-auto z-20"label="Courriel"/>
          <Input type="password" className="max-w-xs m-auto z-20" label="Mot de passe"/>
            <input type="submit" className='w-48 m-auto bouttonSubmit z-20 h-11 font-bold text-black rounded-full bold' value="Ouvrir une session" />
        </form>

        <Link to="/inscription" className="mt-8 font-bold underline z-20 text-white">
          Vous avez déja un compte?
        </Link>
    </div>
  );
}
