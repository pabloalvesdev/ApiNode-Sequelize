const Sequelize = require('sequelize')
const banco = require('./db')

const Cliente = banco.define('clientes', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Nao informado'
    },
    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Nao informado'
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Nao informado'
    }
})
module.exports = Cliente