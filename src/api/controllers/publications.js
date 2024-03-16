const connexionBD = require("../connection");
const jwt = require("jsonwebtoken");

const chercherPubli = async (req, res) => {
    let client;

    try {
        //  // Initialiser la connexion a la bd
          client = await connexionBD();
        // // Chercher le id de l'util dans le cookie
         const token = req.cookies.accessToken;
         console.log(token);
        if(!token) {
            return res.status(401).json("Vous n'est pas logger!");
        }
         const idUtilCookie = jwt.verify(token,"secretkey");
       
        // // requête pour chercher les publications de l'utilisateur
         const requete = "SELECT publication.*,utilisateur.id,nom_util,imgprofile FROM publication JOIN utilisateur ON (utilisateur.id = publication.util_id) JOIN relations ON (publication.util_id = relations.followed_id AND relations.follower_id = $1) ORDER BY datepubli DESC";
         const reponse = await client.query(requete,[idUtilCookie.id]);
        if(reponse.rows.length){
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

module.exports = {
    chercherPubli
}