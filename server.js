const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const config = require('config');
const mongoose = require('mongoose');
const connectToDatabase = require('./config/db');

// Connect to Database
connectToDatabase();

app.use('/api/users', require('./routes/api/users'));


app.listen(port, () => console.log(`DailyTodo API IS NOW RUNNING ON PORT: ${port}`));