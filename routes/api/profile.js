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
router.get('/', async (req, res) => {
    try {
        const allProfiles = await Profile.find({});
        if (!allProfiles) {
            return res.status(400).json({ msg: 'Not profiles exists' });
        };

        res.json(allProfiles)
    } catch (err) {
        console.err(err.message);
        res.status(500).send('Server Error');
    }
});


// GET /api/profile/user/:id
// Get user profile via ID
// @access Private
router.get('/user/:id', auth, async(req, res) => {
    try {    // Validate user's ID
    const profile = await Profile.findOne({ user: req.params.id });
    
    if (!profile) {
        return res.status(400).json({ msg: 'No profile for that user'});
    };

    res.json(profile);
    } catch(err) {
        if (err.kind === 'ObjectId') {
            console.error(err.message);
            res.status(500).send('Server Error');
        };
    };

});




// POST /api/profile/user/my-profile/:id
// Create User profile
// @access Private
router.post('/user/my-profile/:id', [auth,
check('name', 'Your name is required')
    .not()
    .isEmpty()
], async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    };

    try {    // Validate user's ID
        const user = await User.findById(req.user.id).select('-password');
        let profile = await Profile.findOne({ user: req.params.id });

        if (profile) {
            return res.status(400).json({ msg: 'There is already a profile for this user' });
        };

        const {
            name,
            bio
        } = req.body;

        // Create new Profile
        profile = new Profile({
            name: name,
            bio: bio,
            user: req.user.id,
            avatar: user.avatar
        });

        await profile.save();
        res.json(profile);

    } catch(err) {
        if (err.kind === 'ObjectId') {
            console.error(err.message);
            res.status(500).send('Server Error');
        };
    }
});



// PUT /api/profile/user/my-profile/:id
// Update user profile
// @access Private
router.put('/user/my-profile/:id', [auth,
    check('name', 'Your name is required')
        .not()
        .isEmpty()
    ], async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        };
    
        try {    // Validate user's ID
            const user = await User.findById(req.user.id).select('-password');
            let profile = await Profile.findOne({ user: req.params.id });

            if (!profile) {
                return res.status(400).json({ msg: 'There is no profile for this user, one must be created' });
            };

            const {
                name,
                bio
            } = req.body;
    
            // Deny updating other user profiles.
            if (req.params.id.toString() !== req.user.id.toString() ) {
                return res.status(401).json({ msg: 'Unauthorized' });
            };
           
    
            // Update existing profile
            if (profile && ( req.params.id === req.user.id.toString() )) {
                profile = await Profile.findOneAndUpdate(
                    { user: req.user.id.toString() }, 
                    { $set: { 
                        name: name, 
                        bio: bio, 
                        avatar: user.avatar, 
                        date: Date.now() } },
                    {new: true}, (err, response) => {
                        if (err) throw err;
                        res.json(response);
                    });                
            };
        } catch(err) {
            if (err.kind === 'ObjectId') {
                console.error(err.message);
                res.status(500).send('Server Error');
            };
        }
    });



// DELETE /api/profile/user/my-profile/:id
// Delete user profile
// @access Private
router.delete('/user/my-profile/:id', auth, async(req, res) => {
    try {
        let profile = await Profile.findOne({ user: req.params.id });
        if (!profile) {
            return res.status(400).json({ msg: 'There is no profile for this user, one must be created' });
        };

        if ( req.user.id.toString() !== req.params.id.toString() ) {
            return res.status(401).json({ msg: 'Unauthorized' });
        };

        await profile.deleteOne({ user: req.user.id.toString() },
             (err, response) => {
                 if (err) throw err;
                 res.json({ msg: 'Profile deleted' });
             });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;