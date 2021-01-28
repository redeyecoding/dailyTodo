require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3002;
const connectToDatabase = require('./config/db');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const jwtExpress = require('express-jwt');
const tokenSecret = process.env.TOKEN_SECRET;

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cookieParser());
app.use(cors());

// Connect to Database
connectToDatabase();
app.use(
    jwtExpress({
      secret: tokenSecret,
      getToken: req => req.cookies.token
    })
  );

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/todo-list', require('./routes/api/todo'));


app.listen(port, () => console.log(`DailyTodo API IS NOW RUNNING ON PORT: ${port}`));
