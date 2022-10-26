module.exports.validateUser = (req, res, next) => {
    try {
        const { name, lastName, age, password } = req.body;
        if (name && lastName && age) {
            req.user = {
                name,
                lastName,
                age,
                password
            }

            return next();
        }
    } catch (error) {
        res.status(500).json({
            messaghe: 'Name, Last Name and Age are required fields'
        })
    }
}