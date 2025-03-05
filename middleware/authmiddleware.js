import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ error: "Access denied. No token provided." });
        }

        const decoded = jwt.verify(token, 'secretkey'); // Secret should be in environment variables
        const user = await User.findByPk(decoded.id);

        if (!user || user.token !== token) {
            return res.status(401).json({ error: "Invalid token" });
        }

        req.user = user; // Attach user to request for later use
        next();
    } catch (error) {
        res.status(403).json({ error: "Invalid or expired token" });
    }
};

export default authMiddleware;
