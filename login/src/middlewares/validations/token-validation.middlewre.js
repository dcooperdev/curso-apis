module.exports.tokenValidation = (req, res, next) => {
    try {
      const { token } = req.headers;
      req.token = token;
      return next();
    } catch (error) {
      res.status(500).json({
        error: error.message
      })
    }
}