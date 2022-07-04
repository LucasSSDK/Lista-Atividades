const Tarefa = require('../models/Tarefas');
const Tarefas = require('../models/Tarefas')
const findAllTarefasService = async (req, res) =>{
const tarefas = await Tarefas.find();
return tarefas;
} ;

const findByIdTarefaService = async (id) => {
  return await Tarefa.findById (id);
};

const createTarefa = async (newTarefa) => await Tarefa.create (newTarefa);

const updateTarefasService = async (id, editTarefa) => await Tarefa.find(id, editTarefa).setOptions({
  returnOriginal: false
});

const deleteTarefa = async (id) => await Tarefa.findByIdAndDelete(id);

module.exports = {
  findAllTarefasService,
  findByIdTarefaService,
  createTarefa,
  deleteTarefa,
  updateTarefasService,
};
