const express = require('express');
const app = express();

const bookRoutes = require('./routes/bookRoutes');

app.get('/books', bookRoutes);

