import { useQuery } from '@tanstack/react-query'
import Publication from "./composantes/Publication";
import './style.css';
import './index.css';
export default function Publications() {

     const chercherData = async (route:string) => { 
        const reponse = await fetch(`http://localhost:3000${route}`,{
            method: 'GET',
            credentials: 'include'
        });
        const reponseJson = await reponse.json();
        return reponseJson;
    }
    
    const { isPending, error, data } = useQuery({
        queryKey: ['publications'],
        queryFn: () => chercherData('/api/publications/accueil'),
    })
    console.log(data);

    return (
        <div className=" Publications w-full flex flex-col justify-center items-center	">
            {error ? "OUPS Il y a une erreur..." : isPending ? "Attendez..." : data.map((publi: object, index: number) => (
                <Publication key={index} />
            ))}
        </div>
    )
}
