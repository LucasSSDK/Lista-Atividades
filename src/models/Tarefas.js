const mongoose = require('mongoose');

const TarefaSchema = new mongoose.Schema ({
    tarefa:{type: String, required: true}, 

    descricao:{type: String, required: true},

    tempo:{type: String, required: true}
    
});

const Tarefa = mongoose.model('tarefas', TarefaSchema);

module.exports = Tarefa;