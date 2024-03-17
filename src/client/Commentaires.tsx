import "./style.css";
import "./index.css";
import { useQuery } from '@tanstack/react-query'
import Commentaire from "./composantes/Commentaire";
export default function Commentaires() {
  
//   const chercherData = async (route:string) => { 
//     const reponse = await fetch(`http://localhost:3000${route}`,{
//         method: 'GET',
//         credentials: 'include'
//     });
//     const reponseJson = await reponse.json();
//     return reponseJson;
// }

// const { isPending, error, data } = useQuery({
//     queryKey: ['publications'],
//     queryFn: () => chercherData('/api/publications/accueil'),
// })
// console.log(data);


  return (
    <div className='Commentaires'>
        
    <Commentaire/>
    <Commentaire/>
    <Commentaire/>
        
    </div>
  )
}
