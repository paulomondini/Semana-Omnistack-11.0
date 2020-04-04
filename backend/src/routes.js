const express = require('express');

const incidentControler = require('./controlers/incidentControler')
const ongControler = require('./controlers/ongControler')
const profileControler = require('./controlers/profileControler')
const sessionControler = require('./controlers/sessionControler')

const routes = express.Router();

routes.post('/session', sessionControler.create);

routes.get('/ongs', ongControler.index);

routes.post('/ongs', ongControler.create);

routes.post('/incidents', incidentControler.create);

routes.get('/incidents', incidentControler.index);

routes.delete('/incidents/:id', incidentControler.delete);

routes.get('/profile', profileControler.index);

module.exports = routes;