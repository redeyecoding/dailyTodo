const express = require('express');
const router = express.Router();


// GET 
// desc Register user
// @access Public
router.get('/', (req, res) => {
    // Registering the user will return a unique token.
    // If information user enters already exists,
    // tell them error and say login
    // ELSE you create a user account for them

    
    // check for user in database

    
    // Validate user information

    
    // build user Object from request

    
    // hash their password 


    // Assemble Token


    res.send('users api is working');
});



module.exports = router;