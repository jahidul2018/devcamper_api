const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({path: "./config/config.env"});
// app-express-connection
//load environment variables from environment file


const port = process.env.PORT ||5000;

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}`));
