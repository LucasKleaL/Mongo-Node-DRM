const mongoose = require('../util/Mongoose');
const quartoSchema = new mongoose.Schema({
    hotel_id: {
        type: mongoose.Schema.Types.ObjectId
    },
    numero: {
        type: Number
    },
    tipo: {
        type: String
    },
    valor: {
        type: Number
    },
    adaptacao_especial: {
        type: Boolean
    },
    ocupado: {
        type: Boolean
    }
});

const Quarto = mongoose.model("Quarto", quartoSchema);

module.exports = Quarto;