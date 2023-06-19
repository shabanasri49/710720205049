//token has to be validated
//userid should be automatically added to the request.

const jwt = require('jsonwebtoken');
const jwtSecret = require("../config/data.config")

module.exports = (req, res, next) => {
    const token = req.header('x-auth-token');//customized header
    //if token exists or not.401-unauthorized access
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }
    try {
        jwt.verify(token, jwtSecret, (error, decoded) => {
            if (error) {
                return res.status(401).json({ msg: "token not valid" });
            }
            else {//for security reasons ,creating user object on request on the fly
                req.user = decoded.user;//updated req
                next();//req,res

            }

        });

    } catch (err) {
        res.status(500).json({ msg: "server error:" + err.message });
    }
};


