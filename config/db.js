const mongoose = require('mongoose');
const url = process.env.TODO_DB_URL;

const connectToDatabase = async () => {
    try {
        await mongoose.connect(url, {
           useNewUrlParser: true,
           useUnifiedTopology: true 
        });
        console.log('CONNECTION TO DATABASE SUCCESSFULL!');

    } catch (err) {
        console.error(err.message);
    };
};


module.exports = connectToDatabase;