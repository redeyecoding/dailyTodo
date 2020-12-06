const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);




