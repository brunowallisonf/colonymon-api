"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
class UserController {
    async store(req, res) {
        const { fullname, email, password } = req.body;
        const userExists = await _User2.default.findOne({ where: { email } });
        if (userExists) {
            return res.status(401).json({ error: "User already exists" })
        }
        const user = await _User2.default.create({ fullname, email, password })
        user.password = undefined;
        return res.json({ user })
    }
}

exports. default = UserController;