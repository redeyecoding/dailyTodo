require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3002;
const connectToDatabase = require('./config/db');

// Init Middleware
app.use(express.json({extended: false}));

// Connect to Database
connectToDatabase();

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/todo-list', require('./routes/api/todo'));


app.listen(port, () => console.log(`DailyTodo API IS NOW RUNNING ON PORT: ${port}`));
