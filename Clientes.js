// src/models/Cliente.js
const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    nomeGato: {
        type: String,
        required: true
    },
    dataNascimento: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Cliente', ClienteSchema);
