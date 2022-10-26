module.exports.tokenValidation = (req, res, next) => {
    try {
      const { token } = req.headers;
      if(token) {
        req.token = token;
        return next();
      }else{
        return res.status(400).json({message: "Not token in headers was found"})
      }
    } catch (error) {
      res.status(500).json({
        error: error.message
      })
    }
}