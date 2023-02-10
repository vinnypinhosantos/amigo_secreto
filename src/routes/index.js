const bodyParser = require('body-parser')
const amigosSecretos = require('./amigosSecretosRoutes.js')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(amigosSecretos)
}