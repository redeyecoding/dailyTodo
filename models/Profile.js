const mongoose = require('mongoose');
const Schema = mongoose.Schema();



const ProfileSchema = Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    date: {
        type: String,
        default: Date.now()
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);




