const { Router } = require("express")
const AmigosSecretosController = require("../controllers/AmigosSecretosController.js")

const router = Router()

router.get('/amigos-secretos', AmigosSecretosController.getAllAmigosSecretos)

module.exports = router