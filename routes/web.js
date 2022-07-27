const express = require('express');
const router = express.Router();
const { 
    getBootcamps, 
    getBootcamp, 
    createBootcamp, 
    updateBootcamp, 
    deleteBootcamp 
    } = require('../controllers/bootcamps'); 

// bootcamps Routes list;
    router.route('/').get(getBootcamps).post(createBootcamp);
    router.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp);

// others


// route to app
module.exports = router;