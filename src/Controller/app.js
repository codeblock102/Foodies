const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const {Pool} = require('pg');

const app = express();
const port = 5173;

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// Create a PostgreSQL connection pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Foodies',
    password: '',
    port: 5432, // Default PostgreSQL port
});

app.post('/ouvrirSession', async (req,res) =>{
    const { username, password } = req.body;
   
    try{
        const queery = `SELECT password FROM users WHERE username =  ${username}`;

        if(rows.length ===0){
            return res.status(401).send('Invalid username or password');
        }
        else{
            return res.status(200).send('Found username and password');
        }
    } catch(err){
        console.error("Erreur du server:"+err);
        res.status(500).send('Internal server error');
    }
    throw err;
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});