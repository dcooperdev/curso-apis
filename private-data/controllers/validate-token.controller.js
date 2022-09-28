const { validateTokenService } = require("../services/validate-token.service");

module.exports.validateToken = async (token) => {
  try {
    const response = await validateTokenService(token);
    return response;
  } catch (error) {
    throw error;
  }
}