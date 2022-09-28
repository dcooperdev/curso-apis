const { validateToken } = require("../controllers/validate-token.controller")

module.exports.validateTokenMiddleware = async (req, res, next) => {
    try {
        const response = await validateToken(req.token);
        req.response = response;
        return next();
    } catch (error) {
        res.status(error.status).json({
            message: error.message
        });
    }
}