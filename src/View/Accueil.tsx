import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import Entete from './composantes/Entete';
import MenuNav from "./composantes/MenuNav";
import Publication from "./composantes/Publication";
import '../style.css';
import '../index.css';
export default function Accueil() {
    const list = [
        {
          title: "Orange",
          img: "./assets/einstein.jpeg",
          price: "$5.50",
        },
        {
          title: "Tangerine",
          img: "./assets/einstein.jpeg",
          price: "$3.00",
        },
        {
          title: "Raspberry",
          img: "./assets/einstein.jpeg",
          price: "$10.00",
        },
        {
          title: "Lemon",
          img: "./assets/einstein.jpeg",
          price: "$5.30",
        },
        {
          title: "Avocado",
          img: "./assets/einstein.jpeg",
          price: "$15.70",
        },
        {
          title: "Lemon 2",
          img: "./assets/einstein.jpeg",
          price: "$8.00",
        },
        {
          title: "Banana",
          img: "./assets/einstein.jpeg",
          price: "$7.50",
        },
        {
          title: "Watermelon",
          img: "./assets/einstein.jpeg",
          price: "$12.20",
        },
      ];
    
  return (
    <div className='Accueil'>
        <Entete/>        
      <div className="w-full flex flex-col justify-center items-center	">
      {list.map((item, index) => (
      <Publication/>
      ))}
    </div>
        
        <MenuNav/>
    </div>
  )
}
