const express = require('express');
const app = express();
require('dotenv').config();
const { routes } = require('./routes/routes');

const PORT = process.env.PORT;

app.use(express.json());

app.use('/books', routes);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));