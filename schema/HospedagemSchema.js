const mongoose = require('../util/Mongoose');
const hospedagemSchema = new mongoose.Schema({
    reserva_id: {
        type: mongoose.Schema.Types.ObjectId
    },
    cliente_id: {
        type: mongoose.Schema.Types.ObjectId
    },
    consumo: {
        type: mongoose.Schema.Types.Array
    },
    valor_total: {
        type: Number
    },
    nota_fiscal: {
        type: String
    },
    meio_pagamento: {
        type: String
    }
});

const Hospedagem = mongoose.model("Hospedagem", hospedagemSchema);

module.exports = Hospedagem;