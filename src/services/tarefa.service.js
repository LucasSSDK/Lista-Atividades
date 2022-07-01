/*banco de dados atual*/
const tarefas = [
  {
    id: 1,
    tarefa: 'exercicios',
    descricao: 'somente braços',
    tempo: '30min',
  },
  {
    id: 2,
    tarefa: 'Lavar a louça',
    descricao: 'Lavar, secar e guardar',
    tempo: '30min',
  },
  {
    id: 3,
    tarefa: 'limpar o chão',
    descricao: 'passar pano umido',
    tempo: '30min',
  },
];

const findAllTarefasService = () => tarefas;

const findByIdTarefaService = (id) => {
  const tarefaById = tarefas.find((tarefa) => {
    if (tarefa.id === id) {
      return tarefa;
    }
  });
  console.log(tarefaById);
  return tarefaById[0];
};

const createTarefa = (tarefa) => { const newId = tarefas.length + 1;
  tarefa.id = newId;
  tarefas.push(tarefa);
  return tarefa;
};

const updateTarefasService = (id, updateTarefa) => {
  updateTarefa['id'] = id;
  tarefas.findIndex((tarefa) => tarefa.id == id);
  tarefas.forEach((tarefa) => {
    if (tarefa.id === id) {
      tarefa = updateTarefa;
    }
  });
  return updateTarefa;
};

const deleteTarefa = (id) => {
  tarefas.forEach((tarefa, index) => {
    if (tarefa.id === id) {
      tarefas.splice(index, 1);
    }
  });
};

module.exports = {
  findAllTarefasService,
  findByIdTarefaService,
  createTarefa,
  deleteTarefa,
  updateTarefasService,
};
