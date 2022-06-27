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

const createTarefa = (tarefa) => {
  tarefas.push(tarefa);
  return tarefas;
};

const updateTarefa = (id, updateTarefa) => {
  tarefas.forEach((tarefa) => {
    if (tarefa.id === id) {
      tarefa = updateTarefa;
    }
  });
  return tarefas;
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
  updateTarefa,
};
