const mongoose = require('mogoose');
const uri = 'mongodb://localhost:27017/tarefas-db'

function connectToDatabase() {
  mongoose.connect(uri).then(() => {
    mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true, //monitorar banco de dados e apresentar caso err
      })

      .then(() => 
        console.log('MongoDb conectado com sucesso!!')) //quando conectar
      .catch(
        (error) => console.log(`error ao conectar com MongoDb, erro: ${error}`), //erro caso não conectar
      );
  });
};

module.exports = {
  connectToDatabase,
};
