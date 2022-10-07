const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createUserService } = require('../services/create-user.service');


const createUserWithEmailAndPassword = async (email, password, name, lastName, age) => {
  const response = createUserService(name, lastName, age)
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  const userData = new User({
    email,
    password: hash,
    profileId : response.id
  });
  
  try {
    await userData.save();
    return userData;
  } catch (error) {
    throw error;
  }
}

const signInWithEmailAndPassword = async (email, password) => {
  try {
    const user = await User.findOne({ email }).lean();
    
    if (bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ email }, process.env.PRIVATE_KEY, { expiresIn: "1h" });
      return { token };
    } else {
      throw new Error('Username or password don\'t match!');
    }
  } catch (error) {
    throw error;
  }
}

const validateToken = async (token) => {
  try {
    const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
    return { token_status: (decoded) ? 'valid' : 'expirated' };
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  validateToken
}