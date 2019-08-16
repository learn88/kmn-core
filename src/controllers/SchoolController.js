const { School } = require("../models")

module.exports = {
    async index (req, res) {
        try {
            var school = await School.find()
            res.send({
                school: school,
                message: {
                    'success': true
                }
            })
        } catch (err) {
            res.status(500).send({
                error: "This is SchoolController.index error"
            })
        }
    }
}