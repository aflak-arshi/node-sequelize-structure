const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('./user.model');

const login = async (req, res, next) => {
    await User.sync();
    const checkUserExists = await User.find({
        where: {
            user_name: req.body.user_name
        }
    });
    if (checkUserExists) {
        return res.status(401).json({
            success: false,
            error: "User already exists!"
        });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    
    const userModelObject = User.build({
        ...req.body,
        password: hash
    })
    await User.create(userModelObject.dataValues);

    res.status(200).json({
        success: true,
        message: 'User created successfully!'
    });
};

module.exports = {
    login
};