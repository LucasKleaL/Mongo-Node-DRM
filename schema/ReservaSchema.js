const mongoose = require('../util/Mongoose');
const reservaSchema = new mongoose.Schema({
    quarto_id: {
        type: mongoose.Schema.Types.ObjectId
    },
    cliente_id: {
        type: mongoose.Schema.Types.ObjectId
    },
    funcionario_id: {
        type: mongoose.Schema.Types.ObjectId
    },
    tipo_quarto: {
        type: String
    },
    data_entrada: {
        type: Date,
    },
    data_saida: {
        type: Date,
    },
    cancelada: {
        type: Boolean,
        default: false
    },
    checkin: {
        type: Boolean,
        default: false
    },
    checkout: {
        type: Boolean,
        default: false
    }
});

const Reserva = mongoose.model("Reserva", reservaSchema);

module.exports = Reserva;