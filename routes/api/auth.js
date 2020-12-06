const express = require('express');
const router = express.Router();
const auth = require('../../authMiddleware/auth');
const { check, validationResult } = require('express-validator');
const User = require('../../models/Users');
const { restart } = require('nodemon');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const tokenSecret = process.env.TOKEN_SECRET;


// POST /api/auth
// Login User
// @ACcess 
router.post('/',[
    check('email', 'Email address is required')
        .isEmail(),
    check('password', 'Password is required')
        .not()
        .isEmpty()
], async (req, res) => {

    const errors = validationResult(req);    
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    };

    const { email, password } = req.body;

    try {
        // Check email
        const user = await User.findOne({ email: email })
        if (!user) {
            return res.status(401).json({ msg: 'Invalid Credentials' })
        };

        // Check password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ msg: 'Invalid Credentials' })
        };

        // setup Token
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

    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    };
});


module.exports = router;