const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/UserNotes", {useNewUrlParser : true})
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error(error));

module.exports = mongoose;