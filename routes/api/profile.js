const express = require('express');
const router = express.Router();
const auth = require('../../authMiddleware/auth');
const { check, validationResult } = require('express-validator');


// GET /api/profile
// get all user profies
// @access Public
router.get('/', (req, res) => {


    res.send('PROFILE ROUTE')
});





// GET /api/profile/user/:id
// Get user profile via ID
// @access Private
router.get('/user/:id', (req, res) => {
    res.json(req)
});




// POST /api/profile/user/:id 
// Create user profile
// @access Private
router.post('/user/:id',auth, (req, res) => {

    res.send(req.params.id)
});





// DELETE /api/profile/user/id
// Delete user profile
// @access Private
router.post('/', (req, res) => {
    res.send('PROFILE ROUTE')
});




module.exports = router;