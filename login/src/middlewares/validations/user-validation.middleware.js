module.exports.userValidation = (req, res, next) => {
    try {
        const { email, password} = req.body;
        if (email && password ) {
            req.user = {
                email: email,
                password:password
            }
            return next();
        }
        else {
            return res.status(400).json({message: "Faltan campos: email - password "})
        }
    } catch (error) {
        res.status(500).json({
            messaghe: 'Email and Password are required fields'
        })
    }

}