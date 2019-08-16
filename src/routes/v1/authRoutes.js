const Ctrl = require("../../controllers")

module.exports = (app) => {
    app.get('/', Ctrl.AuthController.index)
}