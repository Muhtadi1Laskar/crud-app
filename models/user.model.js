import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    fullName: {
        type: String, 
        required: [true, "Please Enter the Full Name"]
    },
    mobile: {
        type: Number,
        required: [true, "Please Enter the Mobile Number"]
    },
    dob: {
        type: String,
        required: [true, "Please Enter the Date of Birth"]
    },
    password: {
        type: String,
        required: [true, "Please set a Password"]
    },
    uniqueID: {
        type: String,
        required: false,
        unique: true
    }
}, {
    timestamps: true
});

const User = mongoose.model("User", UserSchema);

export default User;