const User = require("../model/user");


module.exports.createUserData = async (name, lastName, age) => {
    const UserData = new User(
        {
            name,
            lastName,
            age
        }
    )
    try {
        await UserData.save();
        return UserData._id;
    } catch (error) {
        throw error;
    }
}


