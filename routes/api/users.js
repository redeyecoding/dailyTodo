const express = require('express');
const router = express.Router();
const User = require('../../models/users');

const { check, validationResult } = require('express-validator');


// POST /api/users
// desc Register user
// @access Public

    // Registering the user will return a unique token.
    // If information user enters already exists,
    // tell them error and say login
    // ELSE you create a user account for them
router.post('/', [
    check('email', 'Email Address is required')
        .isEmail(),
    check('name','Your name is required')
        .not()
        .isEmpty(),
    check('password', 'Password must be 6 characters or more')
        .isLength({ min: 6 })
    ], async (req, res) => {

        // Validate user information
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        };

        const {
            email,
            name,
            password
        } = req.body;        
        
        try {
            // check for user in database ( via email )
            let user = await User.findOne({ email: email });
            if (user) {
                res.status(400).json('That user already exists')
            };

            // build user Object from request
            user = new User({
                name: name,
                password: password,
                email: email
            });

            
            console.log(user)


            // hash their password 

            res.json('SUCCESS')
            // Assemble Token
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: 'Server Error' });
        };

});



module.exports = router;