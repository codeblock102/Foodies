const express = require("express");
const auth = require("../controllers/auth");
const router = express.Router();


    router.post("/ouvrirSession",auth.ouvrirSession);
    router.post("/inscription",auth.inscription);
    router.post("/fermerSession",auth.fermerSession);
module.exports = router;