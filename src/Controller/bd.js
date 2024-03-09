/** CODE POUR MANIPULER LA BASE DE DONNÉE DIRECTEMENT */
 const bcrypt = require("bcrypt");
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

// Fonction qui verifie si l'utilisateur est déja inscrit
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

// Fonction qui ajoute un nouvel utilisateur dans la base de donnée
async function creerUtil(infoUtil){
  try {
    // Creer la connexion a la base de donnée
    const client = await pool.connect();
    // Créer la requête SQL pour inscrire l'utilisateur
    const sql = "INSERT INTO utilisateur (prenom,nom_famille,nom_util,courriel,mot_de_passe,date_naissance) VALUES($1,$2,$3,$4,$5,$6)"; 
    // Encrypter les données de l'utilisateur
    infoUtil = {
      prenom: await bcrypt.hash(infoUtil.prenom,10),
      nom: await bcrypt.hash(infoUtil.nom,10),
      nomUtil: await bcrypt.hash(infoUtil.nomUtil,10),
      courriel: await bcrypt.hash(infoUtil.courriel,10),
      motDePasse :await bcrypt.hash(infoUtil.motDePasse,10),
      date: await bcrypt.hash(infoUtil.date,10),
    }
    const valeursUtilArray = Object.values(infoUtil);
    // Faire la requête 
    const resultat = await client.query(sql,valeursUtilArray);
    client.release();
    // 
     return infoUtil;
    
  }catch(err) {
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

module.exports = { chercherUtil,creerUtil };
