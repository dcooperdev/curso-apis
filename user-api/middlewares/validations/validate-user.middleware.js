module.exports.validateUser = (req, res, next) => {
    try {
        const { name, lastName, age } = req.body;
        if (name && lastName && age) {
            req.user = {
                name,
                lastName,
                age
            }

            return next();
        }
    } catch (error) {
        res.status(500).json({
            messaghe: 'Name, Last Name and Age are required fields'
        })
    }
}