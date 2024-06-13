// src/routes/clientes.js
const express = require('express');
const router = express.Router();
const Cliente = require('../models/Cliente');

// Criar cliente
router.post('/', async (req, res) => {
    try {
        const newCliente = new Cliente(req.body);
        await newCliente.save();
        res.status(201).json(newCliente);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Ler clientes
router.get('/', async (req, res) => {
    try {
        const clientes = await Cliente.find().sort('nome');
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Atualizar cliente
router.put('/:id', async (req, res) => {
    try {
        const updatedCliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedCliente);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Deletar cliente
router.delete('/:id', async (req, res) => {
    try {
        await Cliente.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Cliente deletado' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Buscar clientes por nome
router.get('/search', async (req, res) => {
    try {
        const nome = req.query.nome;
        const clientes = await Cliente.find({ nome: new RegExp(nome, 'i') }).sort('nome');
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
