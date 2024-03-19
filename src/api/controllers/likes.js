const connexionBD = require("../connection");
const jwt = require("jsonwebtoken");

const chercherLikes = async (req,res) =>{
    let client;
    try {
        //  // Initialiser la connexion a la bd
          client = await connexionBD();
       
        // // requête pour chercher les likes de la publication
         const requete = "SELECT util_id FROM likes WHERE publi_id = $1";
         const reponse = await client.query(requete,[req.query.publi_id]);
        if(reponse.rows.length>0){
            return res.status(200).json(reponse.rows);
        }else {
            return res.status(404).json([]);
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

const ajouterLike = async (req, res) => {
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
        const requete = "INSERT INTO likes (util_id, publi_id) VALUES ($1, $2)";
        const valeurs = [
            idUtilCookie.id,
            req.body.publi_id,
         ]
         const reponse = await client.query(requete,valeurs);
         console.log(valeurs);
        if(reponse.rows.length){
            return res.status(200).json(reponse.rows);
        }else {
            return res.status(404).json("La publi n'a pas pu être aimée");
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

const enleverLike = async (req, res) => {
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
        const requete = "DELETE FROM likes WHERE  `util_id` = $1 AND `publi_id` = $2)";
        const valeurs = [
            idUtilCookie.id,
            req.body.publi_id,
         ]
         const reponse = await client.query(requete,valeurs);
         console.log(valeurs);
        if(reponse.rows.length){
            return res.status(200).json(reponse.rows);
        }else {
            return res.status(404).json("La publication n'a pas pu être désaime");
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
    chercherLikes,ajouterLike,enleverLike
}