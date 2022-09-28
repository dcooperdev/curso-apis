module.exports.userValidation = (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (email && password) {
            req.user = {
                email,
                password
            }
    
            return next();
        }
    } catch (error) {
        res.status(500).json({
            messaghe: 'Email and Password are required fields'
        })
    }

} 