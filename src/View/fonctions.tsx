// Fonction pour fetch les données au serveur

export const chercherData = async (route:string) => { 
    const reponse = await fetch(`http://localhost:3000${route}`,{
        method: 'GET',
        credentials: 'include'
    });
    const reponseJson = await reponse.json();
    return reponseJson;
}
