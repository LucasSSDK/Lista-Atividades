const express = require('express');

const controllerTarefas = require('../controllers/tarefa.controller');

const route = require('express').Router();

route.get('/allTarefas', controllerTarefas.findAllTarefasController);/*rota de todas as tarefas*/

route.get('/tarefa/:id', controllerTarefas.findByIdTarefaController);/*rota de uma tarefa*/

route.post('/createTarefa', controllerTarefas.createTarefa);

route.put('/updateTarefa/:id',
controllerTarefas.updateTarefa);

route.delete('/deleteTarefa/:id',
controllerTarefas.deleteTarefa);

module.exports = route;
