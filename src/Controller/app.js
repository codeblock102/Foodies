const express = require("express");
//const bodyParser = require("body-parser");
const cors = require("cors");
// const bcrypt = require("bcrypt");
// const { Pool } = require("pg");
// Create a PostgreSQL connection pool
// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "Foodies",
//   password: "",
//   port: 5432, // Default PostgreSQL port
// });
const app = express();
const port =  3000;

// Middleware for parsing JSON bodies
app.use(cors());
app.use(express.json());



app.post('/', async (req, res) => {
//     const testing = await req.body;
//     //console.log('Received a request:', req.body);
//    // console.log(testing);
//   const responseData = { message: "Success" };
//   // Sending the JSON response
//  

try{
console.log(req.body);
res.json({response:"yay"});
}catch(err){
console.log(err.message);
}
 
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
