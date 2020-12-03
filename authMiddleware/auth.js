const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

const auth = (req, res, next) => {
    console.log(req.body)
    res.send('PROTECTED ROUTE')

    next();
};

module.exports = auth;
