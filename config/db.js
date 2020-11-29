const mongoose = require('mongoose');
const config = require('config');

const connectToDatabase = async () => {
    try {
        await mongoose.connect(config.get('mongoURL'), {
           useNewUrlParser: true,
           useUnifiedTopology: true 
        });
        console.log('CONNECTION TO DATABASE SUCCESSFULL!')

    } catch (err) {
        console.error(err.message);
    }
};


module.exports = connectToDatabase;