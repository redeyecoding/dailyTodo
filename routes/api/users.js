const express = require('express');
const router = express.Router();
const User = require('../../models/Users');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const tokenSecret = process.env.TOKEN_SECRET;
gravatar = require('gravatar');

// POST /api/users
// desc Register user
// @access Public
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
                return res.status(400).json('That user already exists')
            };

            // build user Object from request
            user = new User({
                name: name,
                password: password,
                email: email
            });

            // hash their password
            const salt = 10;
            const hash = await bcrypt.hash(password, salt);

            user.password = hash;

            // Setup User Avatar
            const avatar = gravatar.url(
                email,
                 {s: '100', r: 'pg', d: 'retro'});13
            
            user.avatar = avatar;
           
            // Assemble Token
            const payload = {
                user : {
                    id: user.id
                }
            };
            jwt.sign({ 
                data: payload }, 
                tokenSecret,
                { expiresIn: '3hr' },
                (err, token) => {
                    if (err) throw err ;
                    res.json({ token });
                });

            await user.save();       

        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: 'Server Error' });
        };

});



module.exports = router;