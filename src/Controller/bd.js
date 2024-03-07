/** CODE POUR MANIPULER LA BASE DE DONNÉE DIRECTEMENT */

// Initialiser la base de donnée
const { Pool } = require("pg");
//Créer le pool de connexion
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Foodies",
  password: "",
  port: 5432, // Default PostgreSQL port
});

// Créer la fonction qui verifie si l'utilisateur est déja inscrit
async function chercherUtil(nom_util, mot_de_passe) {
  try {
    const client = await pool.connect();
    const valeursInputUtil = [nom_util, mot_de_passe];
    const query =
      "SELECT * FROM utilisateur WHERE nom_util = $1 AND mot_de_passe = $2 ";

    const resultat = await client.query(query, valeursInputUtil);
    client.release();
    return resultat.rows[0];
  } catch (err) {
    console.log("erreur:", err);
  }
}

// Établic la connexion avec la base de donnée
// pool.connect((err,client, release) =>{
//   if(err){
//     return console.error("Erreur de connexion avec la bd:",err);
//   }
//   console.log("Connecté à la base de donnée");
//   client.query(`SELECT * FROM utilisateur`,(err, resultat) =>{
//     release();

//     if(err){
//       console.error("Erreur de connexion avec la table",err.stack);
//     }else{
//       console.log("resultat:",resultat.rows);
//     }
//   })
// })

module.exports = { chercherUtil };
