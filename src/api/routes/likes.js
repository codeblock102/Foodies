const express = require("express");
const likes = require("../controllers/likes");
const router = express.Router();

router.get('/',likes.chercherLikes);
router.post('/',likes.ajouterLike);
router.delete('/',likes.enleverLike);


module.exports = router;