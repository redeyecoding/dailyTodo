const mongoose = require('mongoose');


const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.TODO_DB_URL), {
           useNewUrlParser: true,
           useUnifiedTopology: true 
        };
        console.log('CONNECTION TO DATABASE SUCCESSFULL!');

    } catch (err) {
        console.error(err.message);
    }
};


module.exports = connectToDatabase;