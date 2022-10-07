module.exports.createUserService = async (name, lastName, age) => {
    try {
        const response = await axios({
            method: 'Post',
            url: 'http://localhost:3002/v1/create-user',
        });
        return response
    } catch (error) {
        throw (error?.response?.data?.message) ? {
            status: error?.response?.status,
            message: error?.response?.data?.message
        } : error;
    }
}