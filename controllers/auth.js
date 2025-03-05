<<<<<<< Updated upstream
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User  = require('../models/user');

const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
=======

// // Also try using ES6 isntead of CJS -> Use import instead of require

// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import { User } from '../models/user.js';
// import { generateOTP } from '../utils/otp.js';

// // For functions that you might need repeatedly, make a Utils folder
// // Import them from Utils folder whenever needed
// const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString(); 



// // Try making a better flow for registering
// exports.register = async (req, res) => {
//   const { username, email} = req.body; 
>>>>>>> Stashed changes

//   try {
//     if (!username || !email || !password) {
//       return res.status(400).json({ error: "Username, email, and password are required" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = await User.create({ username, email, password: hashedPassword });

//     res.json({ message: "User registered", userId: user.id });
//   } catch (error) {
//     console.error("Registration failed:", error);
//     res.status(500).json({ error: "Registration failed", details: error.message });
//   }
// };



// // No need for password , if we are doing OTP authentication
// exports.login = async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const user = await User.findOne({ where: { username } });
//     if (!user || !(await bcrypt.compare(password, user.password))) {
//       return res.status(401).json({ error: 'Invalid credentials' });
//     }
//     const otp = generateOTP();
//     await user.update({ otp });
//     console.log(`Generated OTP for ${username}: ${otp}`);
//     res.json({ message: 'OTP generated, verify OTP to proceed', userId: user.id });
//   } catch (error) {
//     res.status(500).json({ error: 'Login failed' });
//   }
// };

// exports.verifyOTP = async (req, res) => {
//   const { username, otp } = req.body;
//   try {
//     const user = await User.findOne({ where: { username } });
//     if (!user || user.otp !== otp) {
//       return res.status(401).json({ error: 'Invalid OTP' });
//     }
//     const token = jwt.sign({ id: user.id }, 'secretkey', { expiresIn: '1h' });
//     await user.update({ otp: null });
//     res.json({ message: 'OTP verified, login successful', token });
//   } catch (error) {
//     res.status(500).json({ error: 'OTP verification failed' });
//   }
// };


// // Use middleware for token authentication 

// // Token needs to be authenticated right ? Until they expire.

// // See how id fields work in general and then specifically also in Sequelize


import  generateOTP  from '../utils/generateOTP.js';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export const register = async (req, res) => {
    const { username } = req.body;

    try {
        let user = await User.findOne({ where: { username } });

        if (!user) {
            user = await User.create({ username });
        }

        const otp = generateOTP();
        await user.update({ otp });

        console.log(`Generated OTP for ${username}: ${otp}`);
        res.json({ message: 'OTP generated, verify OTP to proceed', userId: user.id });
    } catch (error) {
        console.error('Registration failed:', error);
        res.status(500).json({ error: 'Registration failed', details: error.message });
    }
};

export const login = async (req, res) => {
    const { username, otp } = req.body;

    try {
        const user = await User.findOne({ where: { username } });

<<<<<<< Updated upstream

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
=======
        if (!user || user.otp !== otp) {
            return res.status(401).json({ error: 'Invalid OTP' });
        }

        const token = jwt.sign({ id: user.id }, 'secretkey', { expiresIn: '1h' });

        await user.update({ otp: null, token });

        res.json({ message: 'OTP verified, login successful', token });
    } catch (error) {
        console.error('OTP verification failed:', error);
        res.status(500).json({ error: 'OTP verification failed', details: error.message });
>>>>>>> Stashed changes
    }
};
<<<<<<< Updated upstream

exports.verifyOTP = async (req, res) => {
  const { username, otp } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (!user || user.otp !== otp) {
      return res.status(401).json({ error: 'Invalid OTP' });
    }
    const token = jwt.sign({ id: user.id }, 'secretkey', { expiresIn: '1h' });
    await user.update({ otp: null });
    res.json({ message: 'OTP verified, login successful', token });
  } catch (error) {
    res.status(500).json({ error: 'OTP verification failed' });
  }
};
=======
>>>>>>> Stashed changes
