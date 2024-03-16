import Entete from './composantes/Entete';
import MenuNav from "./composantes/MenuNav";
import Publications from './Publications';
import Publication from "./composantes/Publication";
import '../style.css';
import '../index.css';
export default function Accueil() {



  
    
  return (
    <div className='Accueil'>
        <Entete/>        
     <Publications/>
        <MenuNav/>
    </div>
  )
}
