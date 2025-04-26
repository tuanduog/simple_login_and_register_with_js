const jwt = require('jsonwebtoken');

function verifyUser (req, res, next) {
    const token = req.cookies.token;
    if(!token){
        return res.status(400).json({message: "Login failed"});
    }
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (err){
        return res.status(400).json({ message: "Token is failed or missing!"});
    }
}

module.exports = verifyUser;