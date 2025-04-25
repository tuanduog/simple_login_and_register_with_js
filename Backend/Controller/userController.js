const userModel = require('../Model/userModel');

exports.addUser = async (req, res) => {
    const {name, loginname, email, password} = req.body;
    const user = await userModel.findOne({
        $or: [{loginname}, {email}]
    });

    if(user){
        return res.status(400).json({ message: "Username or Email exists!"});
    }

    const newUser = new userModel({name, loginname, email, password});
    await newUser.save();
    res.status(201).json({ message: "Add user successful", newUser});
}


