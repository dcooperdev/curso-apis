module.exports.userValidation = (req, res, next) => {
    try {
        const { email, password, name, lastName, age } = req.body;
        if (email && password && name && lastName && age) {
            req.user = {
                email,
                password,
                name,
                lastName,
                age,
            }

            return next();
        }
    } catch (error) {
        res.status(500).json({
            messaghe: 'Email and Password are required fields'
        })
    }

}