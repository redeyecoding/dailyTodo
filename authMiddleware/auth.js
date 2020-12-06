const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcrypt');

const auth = (req, res, next) => {
    const xAuthToken = req.headers['x-auth-token'];
    // If no token respond with "Unauthorized" 
    if (!xAuthToken){
        return res.status(401).json({ msg: 'Access Denied, No Token' });
    };
    
    try {
        const decryptedToken = jwt.verify(xAuthToken, process.env.TOKEN_SECRET);
        req.user = decryptedToken.data.user;
        next();        
    } catch (err) {
        if (err) {
            res.status(401).send(`${err.message}`);
        };
    }
};

module.exports = auth;
