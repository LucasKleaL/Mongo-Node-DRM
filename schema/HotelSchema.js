const mongoose = require('../util/Mongoose');
const hotelSchema = new mongoose.Schema({
    endereco: {
        type: String
    },
    cidade: {
        type: String
    },
    estado: {
        type: String
    }
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;