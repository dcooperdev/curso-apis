const { signInWithEmailAndPassword } = require("../controllers/users.controller")

module.exports.loginUser = async (req, res, next) => {
    try {
        const user = await signInWithEmailAndPassword(req.user.email, req.user.password);
        req.response = user;
        return next();
    } catch (error) {
        res.status(500).json({
            messaghe: error.message
        })
    }
}