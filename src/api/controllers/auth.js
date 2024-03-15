const connexionBD = require("../connection");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// Fonction qui inscrit l'utilisateur
const inscription = async (req, res) => {
  let client;
  try {
    // Connection a la bd
    client = await connexionBD();
    // Verifier si l'utilisateur est deja inscrit
    const query = "SELECT * FROM utilisateur WHERE nom_util = $1";
    const reponse = await client.query(query, [req.body.nom_util]);
    if (reponse.rows.length) {
      return res.status(409).json("L'utilisateur est déjà inscrit");
    }
    // Créer un nouveau compte
    // Encrypter le mot de passe
    const salt = bcrypt.genSaltSync(10);
    const mdpHash = bcrypt.hashSync(req.body.mdp, salt);

    const query2 =
      "INSERT INTO utilisateur (prenom,nom_famille,nom_util,courriel,mot_de_passe,date_naissance) VALUES($1,$2,$3,$4,$5,$6)";
    const valeurs = [
      req.body.prenom,
      req.body.nom,
      req.body.nom_util,
      req.body.courriel,
      mdpHash,
      req.body.date,
    ];
    await client.query(query2, valeurs);
    return res.status(200).json("Le compte de l'utilisateur a été créé.");
  } catch (erreur) {
    console.error("Error:", erreur);
    return res.status(500).json(erreur);
  } finally {
    if (client) {
      client.release();
    }
  }
};

const ouvrirSession = async (req, res) => {
  let client;
  try {
    // Connection a la bd
    client = await connexionBD();
    // Verifier si l'utilisateur est deja inscrit
    const query = "SELECT * FROM utilisateur WHERE nom_util = $1";
    const reponse = await client.query(query, [req.body.nom_util]);

    // Décrypter le mot de passe
    const verifierMdp = bcrypt.compareSync(
      req.body.mdp,
      reponse.rows[0].mot_de_passe
    );

    // Creer un token pour conserver le id de l'utilisateur
    const token = jwt.sign({ id: reponse.rows[0].id }, "secretkey");
    const { mot_de_passe, ...autres } = reponse.rows[0];
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(autres);
    if (reponse.rows[0] === 0) {
      return res.status(404).json("L'utlisateur n'a pas été retrouvé");
    }
    // Vérifier si c'est le bon mot de passe
    if (!verifierMdp) {
      return res.status(400).json("Mauvais mot de passe ou utlisateur");
    }
  } catch (erreur) {
    console.error("Error:", erreur);
    return res.status(500).json(erreur);
  } finally {
    if (client) {
      client.release();
    }
  }
};

const fermerSession = async (req, res) => {
  res.clearCookie("accessToken", {
    secure: true,
    sameSite: "none",
  }).status(200).json("L'utilisateur a fermé sa session");
};

module.exports = {
  ouvrirSession,
  inscription,
  fermerSession
};
