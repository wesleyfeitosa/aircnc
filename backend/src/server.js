const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

const app = express();

mongoose.connect('mongodb+srv://wesley:wesley@cluster0-ezhaw.mongodb.net/base_dados?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// request.query = acessar o query params (para filtros)
// request.params = acessar o route params (para edição, delete)
// request.body = acessar corpo da requisição (para criação e edição)

// configuração para permitir requisições de domínios diferentes ao do meu servidor
app.use(cors());

// por padrão o express não entende corpo de requisições no formato json
// para retornar isso é necessário a seguinte configuração
app.use(express.json());

// configuração para a utilização de arquivocs estáticos na aplicação
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

// Usa as rotas definidas no arquivo routes.js
app.use(routes);

app.listen(3333);