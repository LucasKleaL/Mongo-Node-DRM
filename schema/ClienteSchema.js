const mongoose = require('../util/Mongoose');
const clienteSchema = new mongoose.Schema({
    dados_pessoais: {
        nome: {
            type: String
        },
        endereco: {
            type: String
        },
        nacionalidade: {
            type: String
        },
        email: {
            type: String
        },
        telefone: {
            type: String
        }
    },
    reservas: {
        type: mongoose.Schema.Types.Array
    },
});

const Cliente = mongoose.model("Cliente", clienteSchema);

module.exports = Cliente;