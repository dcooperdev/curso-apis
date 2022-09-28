const { validateToken } = require("../controllers/users.controller")

module.exports.validateTokenMiddleware = async (req, res, next) => {
    try {
        const token = await validateToken(req.token);
        req.response = token;
        return next();
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}