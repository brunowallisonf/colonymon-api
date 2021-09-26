"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

class SessionController {
    async store(req, res) {
        const { email, password } = req.body
        const user = await _User2.default.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ error: "Email not found" })
        }
        const validPass = await user.checkPassword(password);
        if (!validPass) {
            return res.status(401).json({ error: "Email or password are incorect" })
        }

        const token = _jsonwebtoken2.default.sign({ id: user.id }, process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES })
        user.password = undefined;
        return res.json({ user, token })
    }
}


exports. default = SessionController;