const mongoose = require('../util/Mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String
    },
    notes: {
        type: Array
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;