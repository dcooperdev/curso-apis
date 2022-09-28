const { fakeData } = require("../controllers/fake-data.controller");

module.exports.fakeDataMiddleware = (req, res, next) => {
    try {
        const response = fakeData();
        req.response = response;
        return next();
    } catch (error) {
        res.status(error.status).json({
            message: error.message
        });
    }
}