const express = require("express");
const commentaires = require("../controllers/commentaires");
const router = express.Router();

router.get('/',commentaires.chercherCommentaires);
router.post('/',commentaires.ajouterCommentaire);

module.exports = router;