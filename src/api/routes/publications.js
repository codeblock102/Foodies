const express = require("express");
const publications = require("../controllers/publications");
const router = express.Router();

router.get('/accueil',publications.chercherPubli);
router.post('/ajouterPubli',publications.ajouterPubli);
module.exports = router;