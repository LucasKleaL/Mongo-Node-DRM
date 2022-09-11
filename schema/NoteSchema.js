const mongoose = require('../util/Mongoose');
const noteSchema = new mongoose.Schema({
    title: {
        type: String
    },
    text: {
        type: String,
        minlength: 5
    },
    created: {
        type: Date,
        default: Date.now
    },
    user: {
        id: {
            type: mongoose.Schema.Types.ObjectId
        },
        username: {
            type: String
        }
    },
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;