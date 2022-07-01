const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();
const routes = require('./src/routes/tarefa.route');

const connectToDatabase = require('./src/database/mongodb');

app.use(express.json());

app.use(cors());

app.use('/tarefas', routes);

connectToDatabase();

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
