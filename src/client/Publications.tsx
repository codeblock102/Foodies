import { useQuery } from '@tanstack/react-query'
import Publication from "./composantes/Publication";
import './style.css';
import './index.css';
interface PublicationProps {
    id: number,
    titre: string,
    descriptions: string,
    image_data: string,
    util_id: number,
    date_publi: Date,
    nom_util:string,
    img_profile: Buffer,
  }
export default function Publications() {

     const chercherData = async (route:string) => { 
        const reponse = await fetch(`http://localhost:3000${route}`,{
            method: 'GET',
            credentials: 'include'
        });
        const reponseJson = await reponse.json();
        console.log(reponseJson);
        return reponseJson;
    }
    
    const { isPending, error, data } = useQuery({
        queryKey: ['publications'],
        queryFn: () => chercherData('/api/publications/accueil'),
    })
    console.log(data);

    return (
        <div className=" Publications w-full flex flex-col justify-center items-center	">
            {error ? "OUPS Il y a une erreur..." : isPending ? "Attendez..." : data.map((publi: PublicationProps, index: number) => (
                <Publication key={index} {...publi}/>
            ))}
        </div> 
    )
}
