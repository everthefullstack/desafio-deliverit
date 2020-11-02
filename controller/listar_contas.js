const Conta = require('../model/conta');

module.exports = {

    get: async (req, res) => {
        const lista = await Conta.findAll();
        res.render('listar_contas', {lista});
    }
}