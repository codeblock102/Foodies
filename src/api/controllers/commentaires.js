const connexionBD = require("../connection");
const jwt = require("jsonwebtoken");

const chercherCommentaires = async (req,res) =>{

    try {
        //  // Initialiser la connexion a la bd
          client = await connexionBD();
       
        // // requête pour chercher les publications de l'utilisateur
         const requete = "SELECT commentaire.*,utilisateur.id,nom_util,imgprofile FROM commentaire JOIN utilisateur ON (utilisateur.id = commentaire.util_id) WHERE commentaire.publi_id = $1 ORDER BY datecreer DESC";
         const reponse = await client.query(requete,[req.query.publi_id]);
        if(reponse.rows.length>0){
            return res.status(200).json(reponse.rows);
        }else {
            return res.status(404).json([{}]);
        }
        
    } catch(erreur) {
        console.error("Error:", erreur);
        return res.status(500).json("Une erreur s'est produite lors de la récupération des publications.");
    } finally {
        if(client)
        {
            client.release();
        }
        
    }
}

const ajouterCommentaire = async (req, res) => {
    let client;

    try {
        //  // Initialiser la connexion a la bd
          client = await connexionBD();
        // // Chercher le id de l'util dans le cookie
         const token = req.cookies.accessToken;
        if(!token) {
            return res.status(401).json("Vous n'est pas logger!");
        }
         const idUtilCookie = jwt.verify(token,"secretkey");
       
        // // requête pour chercher les publications de l'utilisateur
        const requete = "INSERT INTO commentaire (description, util_id, publi_id) VALUES ($1, $2, $3)";
        const valeurs = [
            req.body.description,
            idUtilCookie.id,
            req.body.publi_id,
         ]
         const reponse = await client.query(requete,valeurs);
         console.log(valeurs);
        if(reponse.rows.length){
            return res.status(200).json(reponse.rows);
        }else {
            return res.status(404).json("Le commentaire n'a pas pu être soumis");
        }
    } catch(erreur) {
        console.error("Error:", erreur);
        return res.status(500).json("Une erreur s'est produite lors de la récupération des publications.");
    } finally {
        if(client)
        {
            client.release();
        }
        
    }

} 

module.exports = {
    chercherCommentaires,ajouterCommentaire
}