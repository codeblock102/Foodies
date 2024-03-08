const express = require("express");
//const bodyParser = require("body-parser");
const cors = require("cors");
// const bcrypt = require("bcrypt");
const pool = require("./bd");
const app = express();
const port = 3000;

// Middleware for parsing JSON bodies
app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
  //     const testing = await req.body;
  //     //console.log('Received a request:', req.body);
  //    // console.log(testing);
  //   const responseData = { message: "Success" };
  //   // Sending the JSON response
  //

  try {
   const util = await verifierInscription(req);
    res.json({ response: util.nom_util });
  } catch (err) {
    console.log(err.message);
  }
});

app.post("/inscription", async (req, res) => {
  const test = await req.body;
  try{
    console.log('Received a request:', test);
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
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
