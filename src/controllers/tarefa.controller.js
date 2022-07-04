const tarefasService = require('../services/tarefa.service');
const mongoose = require('mongoose');



const findAllTarefasController = async (req, res) => {
  const allTarefa = await tarefasService.findAllTarefasService();
  if (allTarefa.length == 0) {
    return res.status(404).send({message: 'não existe essa tarefa cadastrada'})
  }
  res.send(allTarefa);
};

const findByIdTarefaController = async (req, res) => {
  const id = parseInt(req.params.id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID invalido' });
  }

  const tarefa = await tarefasService.findByIdTarefaService(id);

  if (!tarefa) {
    return res.status(206)
  }

  res.send(tarefa);
};

const createTarefa = async (req, res) => {
  const tarefa = req.body;

  if (
    !tarefa ||
    !tarefa.descricao ||
    !tarefa.tempo
  ) {
    return res.status(400).send({
      message: 'Você não preencheu todos os dados para editar a tarefa!',
    });
  }

  const newTarefa = await tarefasService.createTarefa(tarefa);

  res.send(newTarefa);
};

const updateTarefa = async (req, res) => {
  const id = parseInt(req.params.id);
  const updatedTarefa = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID invalido' });
  }

  const upTarefa = await(tarefasService.updateTarefasService(id, updatedTarefa)); 
  res.send (upTarefa);
};

const deleteTarefa = async (req, res) => {
  const id = parseInt(req.params.id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID invalido' });
  }

  const tarefa = await tarefasService.findByIdTarefaService(id);

    if (!tarefa) {
    return res.status(206);
  }
};

module.exports = {
  findAllTarefasController,
  findByIdTarefaController,
  createTarefa,
  updateTarefa,
  deleteTarefa,
};
