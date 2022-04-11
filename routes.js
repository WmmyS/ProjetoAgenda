const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// O next serve para o middleware prosseguir para o próximo middleware
function meuMiddleware(req, res, next) {
    console.log();
    console.log('Passei no seu middleware');
    console.log();
    next();
}

// Rotas do home
route.get('/', meuMiddleware, homeController.paginaInicial);
route.post('/', homeController.trataPost);

//Rotas de contato
route.get('/contato', contatoController.paginaInicial);

module.exports = route;