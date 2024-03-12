const express = require("express");
//const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const pool = require("./bd");
const app = express();
const port = 3000;

// Middleware for parsing JSON bodies
app.use(cors());
app.use(express.json());
app.use(cookieParser());

let util;
app.post("/", async (req, res) => {
  
  try {
    util = await verifierInscription(req);
   res.cookie("utilId", util.id,{expire : 24 * 60 * 60 * 1000 } );
    res.json({ response: util.nom_util , id: util.id});
     
  } catch (err) {
    console.log(err.message);
  }
});

// Requête qui redonne au client la page profile d'un utilisateur
app.get("/profile/:nom_util", async (req, res) => {
  
  try {
   const util = await pool.chercherUtilisateur(req.params.nom_util);
    res.json(util);
     
  } catch (err) {
    console.log(err.message);
  }
});

app.post("/inscription", async (req, res) => {
  try{
    const infoUtil = await req.body;
    // console.log('Received a request:', infoUtil);
    const test = await pool.creerUtil(infoUtil);
    console.log(test);
  }catch(err){
    console.log(err.message);
  }
});


// Verifier si l'utilisateur est inscrit. Si oui, imprimer son nom dans la console, sinon lui demander de s'inscrire

async function verifierInscription(req) {
  const util = await pool.chercherUtil(req.body.nomUtil, req.body.motDePasse);
  if (util) {
   console.log(util);
   return util;
  } else {
    console.log("Cet utilisateur n'a pas été trouvé");
   return 0;
  }
}

// vérifier si 'lutilisateur 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
