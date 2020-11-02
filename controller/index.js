const createDb = require('../database/create_db');

module.exports = {

    get: (req, res) => {
        createDb();
        res.status(200).send("Funcionando get index")
    }
}