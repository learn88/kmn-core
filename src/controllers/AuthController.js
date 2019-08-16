module.exports = {
    async index (req, res) {
        try {
            var user = await req.headers
            res.send ({
                user: user
            })
        } catch (err) {
            res.status(500).send({
                error: "This is AuthController.index error"
            })
        }
    }
}