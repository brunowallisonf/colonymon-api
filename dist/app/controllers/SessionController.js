"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _auth = require('../../config/auth'); var _auth2 = _interopRequireDefault(_auth);
var _httperrors = require('http-errors'); var _httperrors2 = _interopRequireDefault(_httperrors);
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

        const token = _jsonwebtoken2.default.sign({ id: user.id },
            _auth2.default.jwt.secret,
            { expiresIn: _auth2.default.jwt.expiresIn })
        user.password = undefined;
        return res.json({ user, token })
    }
    async verify(req, res) {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.status(400).json({ error: "Token not found" })
        }
        const [, token] = authorization.split(" ");
        try {
            const decodedData = _jsonwebtoken2.default.verify(token, _auth2.default.jwt.secret);
            return res.json({ ok: true })
        } catch (error) {
            throw new (0, _httperrors2.default)(400, "Invalid Token");
        }
    }
}


exports. default = SessionController;