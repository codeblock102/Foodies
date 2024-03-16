const express = require("express");
const publications = require("../controllers/publications");
const router = express.Router();

router.get('/accueil',publications.chercherPubli);
module.exports = router;