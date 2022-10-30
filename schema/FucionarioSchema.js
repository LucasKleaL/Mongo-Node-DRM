const mongoose = require('../util/Mongoose');
const funcionarioSchema = new mongoose.Schema({
    nome: {
        type: String
    },
    funcao: {
        type: String
    }
});

const Funcionario = mongoose.model("Funcionario", funcionarioSchema);

module.exports = Funcionario;