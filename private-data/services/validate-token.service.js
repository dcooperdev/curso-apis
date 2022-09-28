const axios = require('axios').default;

module.exports.validateTokenService = async (token) => {
    try {
        const response = await axios({
            method: 'get',
            url: 'http://localhost:3000/api/login-user',
            headers: { 'token': token }
        });
        return response?.data?.token_status;
    } catch (error) {
        throw (error?.response?.data?.message) ? {
            status: error?.response?.status,
            message: error?.response?.data?.message
        } : error;
    }
}