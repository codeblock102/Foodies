// Déclaration du cadriciel express;
const express = require("express");

const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const multer  = require('multer');

const app = express();
const port = 3000;

const routesAuth = require('./routes/auth');
const routesPubli = require('./routes/publications');
const routesUtil = require('./routes/utilisateurs');
const routesLikes = require('./routes/likes');
const routesCommentaires = require('./routes/commentaires');

 //app.use("api/utilisateurs", routesUtil);
// app.use("api/likes", routesLikes);

// Middlewares
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Credentials", "true");
  next();
})
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(cookieParser());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../assets/publications_img');
  },
  filename: function (req, fichier, cb) {
    
    cb(null, Date.now() + fichier.originalname)
  }
})

const telecharger = multer({ storage: storage })
app.post("/api/telecharger",telecharger.single("file"),(req,res)=>{
  const fichier = req.file;
  console.log(fichier)
res.status(200).send(fichier.filename);
})

// app.post("/api/telecharger", telecharger.single("file"),(req,res) => {
//   const fichier = req.file;

//   // Access text data sent in the form
//   const textData = req.body.textData;
//   res.status(200).json(fichier.filename);
// })



app.use(bodyParser.json());
app.use(express.json());



 app.use("/api/auth", routesAuth);
 app.use("/api/publications", routesPubli);
 app.use("/api/commentaires", routesCommentaires);


// vérifier si 'lutilisateur 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
