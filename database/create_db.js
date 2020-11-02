const connection = require('../database/connection');
const Conta = require('../model/conta');

const createDb = () => {
    connection.authenticate()
        .then(() => {
            console.log('Conexão com o banco de dados foi estabelecida.');
            Conta.sync();
        })
        .catch(function (err) {
            console.log('Não foi possível se conectar ao banco de dados => ' + err);
        })
};

module.exports = createDb;