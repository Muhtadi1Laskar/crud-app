import bcrypt from 'bcryptjs';
import User from "../models/user.model.js";
import { generatePatientID } from '../Utils/utility.js';

export const authController = async (req, res) => {
    try {
        const {
            fullName,
            mobile,
            password,
            dob
        } = req.body;
        const hashedPassword = bcrypt.hashSync(password, 10);
        const patientID = generatePatientID();
        const userExists = await User.findOne({ mobile });
        const newUser = new User({
            fullName,
            mobile,
            password: hashedPassword,
            dob,
            uniqueID: patientID
        });

        if (userExists) {
            return res.status(401).json({
                message: "User already exists"
            });
        }

        await newUser.save();

        newUser.password = null;
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({
            message: error.message
        });
    }
};