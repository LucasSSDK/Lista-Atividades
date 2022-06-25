const tarefasService = require('../services/tarefa.service');

const findAllTarefasController = (req, res) => {
  const tarefa = tarefasService.findAllTarefasService();
  res.send(tarefa);
};

const findByIdTarefaController = (req, res) => {
  const id = parseInt(req.params.id);
  const tarefaEscolhida = tarefasService.findByIdTarefaService(id);
  if(tarefaEscolhida === undefined) {
    res.status(204).send ({message: 'Nenhuma tarefa encontrada'});
  } else {
    res.send({ message: 'Tarefa encontrada com sucesso', tarefaEscolhida });
  }
};

const createTarefa = (req, res)=> {
  const tarefa = req.body;
  const response = tarefasService.createTarefa(tarefa);
  res.send(response);
};

const updateTarefa = 
(req, res) => {
  const id = parseInt(req.params.id);
  const updatedTarefa = req.body;
  res.send(tarefasService.updateTarefa(id, updatedTarefa));
};

const deleteTarefa = (req, res) => {
  const id = parseInt(req.params.id);
  const response = tarefasService.deleteTarefa(id);
  res.send(response);
};

module.exports = {
  findAllTarefasController,
  findByIdTarefaController,
  createTarefa,
  updateTarefa,
  deleteTarefa,
};
