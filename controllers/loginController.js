import bcrypt from "bcryptjs/dist/bcrypt.js";
import jwt from 'jsonwebtoken'
import User from "../models/user.model.js";

const secret = 'your_very_strong_secret_key';

export const loginController = async (req, res) => {
    const { mobile, password } = req.body;

    try {
        const user = await User.findOne({ mobile });

        if(!user) {
            return res.status(401).send('Invalid username or password');
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(isMatch) {
            const payload = {
                userID: user._id
            };
            const token = jwt.sign(payload, secret, { expiresIn: '30m' });
            return res.json({ token });
        } 
        else {
            return res.status(401).send('Invalid Mobile or password');
        } 
    } catch(error) {
        res.status(500).send('Internal Server Error');
    }
}
