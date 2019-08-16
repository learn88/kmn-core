const app = require("../app")

// Register Routes
require("./v1/authRoutes")(app)
require("./v1/schoolRoutes")(app)
