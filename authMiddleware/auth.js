const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcrypt');

const auth = (req, res, next) => {
    // Pull password request
    
    const xAuthToken = req.headers['x-auth-token'];
    // If no token respond with "Unauthorized" 
    if (!xAuthToken){
        return res.status(401).json({ msg: 'Access Denied, No Token' });
    };
    
    try {
        const decryptedToken = jwt.verify(xAuthToken, process.env.TOKEN_SECRET);
    
        if (!decryptedToken) {
            return res.status(401).json({ msg: 'Invalid Token' });
        };

        req.user = decryptedToken.user;
        console.log(req.user)
        next();
        

    } catch (err) {
        console.error(err.message);
        res.status(401).send('Access Denied');
    }

};

module.exports = auth;
