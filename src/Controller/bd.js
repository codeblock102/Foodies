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
    // Creer la connexion a la base de donnée
    const client = await pool.connect();
    // Mettre les valeurs du input dans un array qui sera utilisé dans la requête
    const valeursInputUtil = [nom_util, mot_de_passe];
    const query = "SELECT * FROM utilisateur WHERE nom_util = $1 AND mot_de_passe = $2 ";

    // Encrypter les valeurs pour être capable de les trouver dans la base de donnée
    // valeursInputUtil.forEach(async (valeur) =>{
    //   const valeurEncrypter = await bcrypt.hash(valeur,10);
    //   console.log(await valeurEncrypter);
    //   return valeurEncrypter;
    // }); 

    // Faire la requête pour chercher un utilisateur
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
    // infoUtil = {
    //   prenom: await bcrypt.hash(infoUtil.prenom,10),
    //   nom: await bcrypt.hash(infoUtil.nom,10),
    //   nomUtil: await bcrypt.hash(infoUtil.nomUtil,10),
    //   courriel: await bcrypt.hash(infoUtil.courriel,10),
    //   motDePasse :await bcrypt.hash(infoUtil.motDePasse,10),
    //   date: await bcrypt.hash(infoUtil.date,10),
    // }
    // Transformer l'objet "infoUtil" en array car la fonctoin client.query ne prends pas d'objet
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


// Fonction qui cherche un utilisateur pour l'afficher dans la page de profile
async function chercherUtilisateur(nom_util) {
  try {
    // Creer la connexion a la base de donnée
    const client = await pool.connect();
    // Mettre la valeur du input dans un array qui sera utilisé dans la requête
    const valeursInputUtil = [nom_util];
    const query = "SELECT * FROM utilisateur WHERE nom_util = $1";

    // Encrypter les valeurs pour être capable de les trouver dans la base de donnée
    // valeursInputUtil.forEach(async (valeur) =>{
    //   const valeurEncrypter = await bcrypt.hash(valeur,10);
    //   console.log(await valeurEncrypter);
    //   return valeurEncrypter;
    // }); 

    // Faire la requête pour chercher un utilisateur
    const resultat = await client.query(query, valeursInputUtil);

    client.release();
    return resultat.rows[0];
  } catch (err) {
    console.log("erreur:", err);
  }
}


module.exports = { chercherUtil,creerUtil,chercherUtilisateur };
