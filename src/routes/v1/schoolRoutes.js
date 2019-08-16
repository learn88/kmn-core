const Ctrl = require("../../controllers")

module.exports = (app) => {
    app.get('/v1/schools', Ctrl.SchoolController.index)
}