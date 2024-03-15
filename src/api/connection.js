// Initialiser la base de donnée
const { Pool } = require("pg");
//Créer le pool de connexion
const bd = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Foodies",
  password: "",
  port: 5432, // Default PostgreSQL port
});
async function connexionBD() {
  try {
    const client = await bd.connect();
    console.log("Connecté à la bd");
    return client;
  } catch (error) {
    console.error("Erreur de connexion a la base de donnée:", error);
    throw error; // Rethrow the error for the caller to handle
  }
}


module.exports = connexionBD;