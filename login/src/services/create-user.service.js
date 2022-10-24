const axios = require('axios');



module.exports.createUserService = async (name, lastName, age) => {
    // try {
        const response = await axios.post('http://localhost:3002/v1/create-user',
            {
                name: name,
                lastName: lastName,
                age: age
            })
            return response.data;

        // } catch (error) {
        //     throw (error?.response?.data?.message) ? {
        //         status: error?.response?.status,
        //         message: error?.response?.data?.message
        //     } : error;
        // }
    }