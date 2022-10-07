const { createUserWithEmailAndPassword } = require("../controllers/users.controller")

module.exports.createUser = async (req, res, next) => {
    try {
        const user = await createUserWithEmailAndPassword(req.user.email, req.user.password, req.user.name, req.user.lastName, req.user.age);
        req.response = user;
        return next();
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}