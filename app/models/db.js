const Sequelize = require('sequelize')

const banco = new Sequelize('sequelize_api', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})
banco.sync().then(()=>{console.log('Banco conectado')}).catch((erro)=>{console.log('Banco não conectado: ' + erro)})
module.exports = banco