import User from "../models/user.model.js";

export const authController = async (req, res) => {
    try {
        const { fullName, mobile, password, dob } = req.body;
        const newUser = new User({ fullName, mobile, password, dob });
        const userExists = await User.findOne({ mobile });
        if(userExists) {
            return res.status(401).json({ message: "User already exists" });
        }
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};