const { createUserData } = require("../controllers/users.controller");

module.exports.CreateUser = async (req, res, next) => {
    try {
        const user = await createUserData(req.user.name, req.user.lastName, req.user.age)
        req.response = user;
        return next();
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
