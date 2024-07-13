import jwt from 'jsonwebtoken';

const secret = 'your_very_strong_secret_key';

export const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }

    const token = authHeader.split(' ')[1];
    console.log(authHeader);

    try {
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    } catch (error) {
        if (error.name === 'JsonWebTokenError') { 
            return res.status(403).json({
                message: 'Invalid or expired token'
            });
        } else {
            console.error('Error verifying JWT:', error);
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
    }
}