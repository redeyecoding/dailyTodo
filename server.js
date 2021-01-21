require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3002;
const connectToDatabase = require('./config/db');
const cookieParser = require('cookie-parser')
const userSessionSecret = process.env.USER_SESSION_SECRET;
const session =  require('express-session');

// Init Middleware
app.use(express.json({extended: false}));
app.use(cookieParser())

// Connect to Database
connectToDatabase();

const userSession = {
    secret: userSessionSecret,
    cookie: { secure: true }
}

app.use(session(userSessionSecret));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/todo-list', require('./routes/api/todo'));


app.listen(port, () => console.log(`DailyTodo API IS NOW RUNNING ON PORT: ${port}`));
