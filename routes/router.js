const express = require('express');
const router = express.Router();
const incluirContaController = require('../controller/incluir_conta');
const listarContasController = require('../controller/listar_contas');
const indexController = require('../controller/index');

router.get('/', indexController.get);
router.get('/incluir_conta', incluirContaController.get);
router.post('/incluir_conta', incluirContaController.post);
router.get('/listar_contas', listarContasController.get);

module.exports = router;
