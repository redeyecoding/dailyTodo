const express = require('express');
const router = express.Router();
const auth = require('../../authMiddleware/auth');
const { check, validationResult } = require('express-validator');
const User = require('../../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const tokenSecret = process.env.TOKEN_SECRET;
const jwtExpress = require('express-jwt');
const { jwtConfig } = require('./utils');


router.get('/prodata',jwtExpress(jwtConfig), function(req, res){
    res.send('your protect3ed data!!'); //Sets name = express
 });


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
            return res.status(403).json({ errors: ['Invalid Credentials'] })
        };

        // Check password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(403).json({ errors: ['Invalid Credentials'] })
        };

        // setup Token
        // Assemble Token
        const payload = {
            user : {
                id: user.id
            }
        };

        const token = jwt.sign({ data: payload }, tokenSecret);
        res.cookie('token',token , { maxAge:3600,httpOnly:true });
        res.send('LOGGED IN')

    } catch(err) {
        console.error(err.message);
        console.log('TSTing123')
        res.status(500).send('Server Error')

    };

});
module.exports = router;