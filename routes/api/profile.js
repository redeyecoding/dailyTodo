const express = require('express');
const router = express.Router();
const auth = require('../../authMiddleware/auth');
const { check, validationResult } = require('express-validator');
const { TokenExpiredError } = require('jsonwebtoken');
const Profile = require('../../models/Profile');
const User = require('../../models/Users');

// GET /api/profile
// get all user profies
// @access Public
router.get('/', (req, res) => {


    res.send('PROFILE ROUTE')
});





// GET /api/profile/user/:id
// Get user profile via ID
// @access Private
router.get('/user/:id', auth, async(req, res) => {
    try {    // Validate user's ID
    const profile = await Profile.findOne({ id: req.params.id });
    
    if (!profile) {
        return res.status(400).json({ msg: 'No profile for that user'});
    };


} catch(err) {
    if (err.kind === 'ObjectId') {
        console.error(err.message);
        res.status(500).send('Server Error');
    };
}

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
        let profile = await Profile.findOne({ user: req.params.id });
        const user = await User.findById(req.user.id).select('-password');

        const {
            name,
            bio
        } = req.body;

        // update existing profile
        if (profile) {
            profile = await Profile.findOneAndUpdate(
                req.user.id, 
                { $set: { 
                    name: name, 
                    bio: bio, 
                    avatar: user.avatar, 
                    date: Date.now() } },
                {new: true})
            return res.json(profile);
        };

        // Create new Profile
        profile = new Profile({
            name: name,
            bio: bio,
            user: req.user.id,
            avatar: user.avatar
        });

        

        profile.save();
        res.json(profile);

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