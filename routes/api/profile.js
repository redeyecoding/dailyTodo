const express = require('express');
const router = express.Router();
const auth = require('../../authMiddleware/auth');
const { check, validationResult } = require('express-validator');
const { TokenExpiredError } = require('jsonwebtoken');
const User = require('../../models/Profile');
const { findById } = require('../../models/Profile');


// GET /api/profile
// get all user profies
// @access Public
router.get('/', (req, res) => {


    res.send('PROFILE ROUTE')
});





// GET /api/profile/user/:id
// Get user profile via ID
// @access Private
router.get('/user/:id', auth, (req, res) => {
    res.json(req.user)
});




// POST /api/profile/user/:id 
// Create user profile
// @access Private
router.post('/user/:id', [auth,
check('name', 'Your name is required')
    .not()
    .isEmpty()
], async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    };

    try {    // Validate user's ID
        const user = await User.findOne({ _id: req.params.id });
        console.log(user)
        if (!user) {
            return res.status(400).json({ msg: 'Unauthorized'})
        };

        console.log(user)
        res.send(req.user)

    } catch(err) {
        if (err.kind === 'ObjectId') {
            console.error(err.message);
            res.status(500).send('Server Error');
        };
    }
});





// DELETE /api/profile/user/id
// Delete user profile
// @access Private
router.post('/', (req, res) => {
    res.send('PROFILE ROUTE')
});




module.exports = router;