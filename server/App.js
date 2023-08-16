const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db/connection');
const productRoutes = require('./routes/productRoutes');

app.use(express.json());

app.use(cors());

app.use('/api', productRoutes);


const PORT = 2000;

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`)
});

db
 .authenticate()
 .then(() => {
    console.log('Conectou ao banco de dados!')
 })
 .catch(err => {
    console.log('Ocorreu um erro ao conectar' + err);
 });