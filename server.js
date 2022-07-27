const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config({path: "./config/config.env"});

// const logger = require('./middleware/logger');
const morgan =require('morgan');

// app.use(logger);

if(process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}

// Route configuration
const bootcamps = require('./routes/web');

app.use('/api/v1/bootcamps', bootcamps);


// app-express-connection
// load environment variables from environment file

const port = process.env.PORT ||5000;

// listen on port number 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}`));
