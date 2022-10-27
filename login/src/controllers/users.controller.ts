import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { IUser } from '../configurations/MiddlewaresInterfaces';
import User from '../models/User';
import { TEmail, TPassword, TToken } from "../Types";


export const createUserWithEmailAndPassword = async (email: TEmail, password: TPassword) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  const userData = new User({
    email,
    password: hash
  });
  
  try {
    await userData.save();
    return userData;
  } catch (error) {
    throw error;
  }
}

export const signInWithEmailAndPassword = async (email: TEmail, password: TPassword) => {
  try {
    const { password: storedPassword }: IUser = await User.findOne({ email }).lean();
    
    if (bcrypt.compareSync(password, storedPassword as string)) {
      const token = jwt.sign({ email }, process.env.PRIVATE_KEY as string, { expiresIn: "1h" });
      return { token };
    } else {
      throw new Error('Username or password don\'t match!');
    }
  } catch (error) {
    throw error;
  }
}

export const validateToken = async (token: TToken) => {
  try {
    const decoded = jwt.verify(token, process.env.PRIVATE_KEY as string);
    return { token_status: (decoded) ? 'valid' : 'expirated' };
  } catch (error) {
    throw error;
  }
}