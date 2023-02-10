const database = require("../models/index.js")

class AmigosSecretosController {
    static async getAllAmigosSecretos(req, res) {
        try {
            const AllAmigosSecretos = await database.Amigo.findAll()
            return res.status(200).json(AllAmigosSecretos)
        } 
        catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = AmigosSecretosController