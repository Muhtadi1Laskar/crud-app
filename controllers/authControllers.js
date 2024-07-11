export const authController = async (req, res) => {
    const { username, mobile, dob } = req.body;
    res.status(201).json({ 
        username: username,
        mobile: mobile,
        dob: dob
     });
};