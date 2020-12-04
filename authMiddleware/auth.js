const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();


const auth = (req, res, next) => {
            // Pull token from request



        // validate token
            // If no token respond with "Unauthorized"



        // If token but invalid, respond with "Invalid Token"



        
        // If valid Token, modify add
    res.send('PROTECTED ROUTE')

    next();
};

module.exports = auth;
