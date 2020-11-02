//nome 
//valor 
//data vencimento
//data pagamento

const sequelize = require('../database/connection');
const Sequelize = require('sequelize');

const Conta = sequelize.define(
    'tbconta', {
        pkcodConta: {
            type: Sequelize.INTEGER,
            field: 'pkcodConta',
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome: {
            type: Sequelize.STRING(50),
            field: 'nome',
            allowNull: false
        },
        valor: {
            type: Sequelize.NUMBER,
            field: 'valor',
            allowNull: false
        },
        datavenc: {
            type: Sequelize.DATEONLY,
            field: 'dataVencimento',
            allowNull: false
        },
        datapag: {
            type: Sequelize.DATEONLY,
            field: 'dataPagamento',
            allowNull: false
        },
        valorCorrigido: {
            type: Sequelize.NUMBER,
            field: 'valorCorrigido'
        },
        qtdDiasEmAtraso: {
            type: Sequelize.INTEGER,
            field: 'qtdDiasEmAtraso'
        },
        regra: {
            type: Sequelize.INTEGER,
            field: 'regra'
        }
    },
    {
        timestamps: true,
        freezeTableName: true
    }
);

module.exports = Conta;