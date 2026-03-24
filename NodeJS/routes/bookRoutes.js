const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get all books.');
})

router.post('/', (req, res) => {
    res.send('Create a new book.')
})

modules.export =router;