// import express from 'express';
// import { register, login, verifyOTP } from '../controllers/auth.js';
// const router = express.Router();

// router.post('/register', register);
// router.post('/login', login);
// router.post('/verify-otp', verifyOTP);

// export default router;

import express from 'express';
import { register, login } from '../controllers/auth.js';
import authenticateToken from '../middleware/authmiddleware.js'; // Middleware for token authentication

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: "Access granted!", user: req.user });
});

export default router;
