const express = require("express");
const cors = require("cors");
const mongoose = require("./util/Mongoose");
const HotelSchema = require("./schema/HotelSchema");
const ClienteSchema = require("./schema/ClienteSchema");
const QuartoSchema = require("./schema/QuartoSchema");
const ReservaSchema = require("./schema/ReservaSchema");
const HospedagemSchema = require("./schema/HospedagemSchema");
const FuncionarioSchema = require("./schema/FucionarioSchema");

let hotel = new HotelSchema({endereco: `Rua rua, Centro, 80`, estado: "PR", cidade: "Curitiba"});
let quarto = new QuartoSchema({hotel_id: "6335e1aef3c816c094d94326", numero: 1, tipo: "Solteiro", valor: 150, adaptacao_especial: false, ocupado: false});
let date = new Date();
let tomorrow = new Date();
tomorrow.setDate(date.getDate() + 1)
let reserva = new ReservaSchema({quarto_id: "6335e1d3918d7ae18fb2ac5b", cliente_id: "6335e23c09fb6bbcb4804788", funcionario_id: "6335e23c09fb6bbcb4804787", tipo_quarto: "Solteiro", data_entrada: date.getDate(), data_saida: tomorrow});
let hospedagem = new HospedagemSchema({reserva_id: "6335e349cd3d5949417d685a", cliente_id: "6335e23c09fb6bbcb4804788", consumo: [], valor_total: 50.99, nota_fiscal: "420545", meio_pagamento: "cartao_debito"});
let funcionario = new FuncionarioSchema({nome: "Funcionario", funcao: "Atendente"});
let cliente = new ClienteSchema({
    dados_pessoais: {
        nome: "Cliente",
        endereco: "Rua cliente 555, Portão, Curitiba",
        nacionalidade: "Brasileiro",
        email: "cliente@email.com",
        telefone: "8888-9999"
    },
    reservas: {

    }
})


//hotel.save(); v
//quarto.save();
//reserva.save();
hospedagem.save();
//funcionario.save();
//cliente.save();

/*
for (let i = 0; i < 5; i++) {
    let hotel = new HotelSchema({endereco: `Rua ${i}, Centro, 80${i}`, estado: "PR", cidade: "Curitiba"});
    let cliente = new ClienteSchema({
        dados_pessoais: {
            nome: "Cliente",
            endereco: "Rua cliente 555, Portão, Curitiba",
            nacionalidade: "Brasileiro",
            email: "cliente@email.com",
            telefone: "8888-9999"
        },
        reservas: {

        }
    })
    let quarto = new QuartoSchema({});
    hotel.save();
}
*/

/*
const User = require("./model/User");
const UserController = require("./controller/UserController");
const NoteController = require("./controller/NoteController");

const PORT = process.env.PORT || 3001;

let app  = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello World Mongo-Node-DRM");
});

app.listen(PORT, function() {
    console.log(`Mongo-Node-DRM listening at: localhost:${PORT}`);
});

const userController = new UserController(app);
const noteController = new NoteController(app);
*/