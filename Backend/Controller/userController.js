const userModel = require('../Model/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.addUser = async (req, res) => {
    const {name, loginname, email, password} = req.body;
    if (!name || !loginname || !email || !password) {
        return res.status(400).json({ message: "All fields are required!" });
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(!passwordRegex.test(password)){
        return res.status(400).json({ message: "Password must be at least 8 characters, including uppercase, lowercase, numbers and special characters"})
    }

    const user = await userModel.findOne({
        $or: [{loginname}, {email}]
    });

    if(user){
        return res.status(400).json({ message: "Username or Email exists!"});
    }
    // hash
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({name, loginname, email, password: hashPassword});
    await newUser.save();
    res.status(201).json({ message: "Add user successful", newUser});
}

exports.checkUser = async (req, res) => {
    console.log("Received data: ", req.body);
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required!" });
    }

    const isEmail = username.includes('@');
    const query = isEmail ? { email: username.toLowerCase() } : { loginname: username.toLowerCase() };

    try {
        const user = await userModel.findOne(query);
        if(!user){
            return res.status(400).json({ message: "Login name or email failed!"});
        }
        const check = bcrypt.compare(password, user.password);
        if(!check){
            return res.status(400).json({ message: "Password failed!"})
        }
        const token = jwt.sign(
            { id: user._id}, // data encrypt
            process.env.JWT_SECRET, // key
            {expiresIn: '1h'} 
        );
        res.cookie('token', token, {
            httpOnly: true,
            sameSite: 'strict', 
            secure: false,
            maxAge: 3600000,
        });
        return res.json({ message: "Login successful"});
    } catch (err) {
        return res.status(500).json({ message: "Internal server error!", error: err.message });
    }
};

exports.profile = async (req, res) => {
    const userId = req.user.id;
    const user = await userModel.findOne({ _id: userId });

    if(!user){
        return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(user);
}

exports.logout = async (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: "Logout successful"});
}


