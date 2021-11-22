import User from "../models/User"
import jwt from "jsonwebtoken"
import authConfig from "../../config/auth"
import HttpError from "http-errors"
class SessionController {
    async store(req, res) {
        const { email, password } = req.body

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ error: "Email not found" })
        }
        const validPass = await user.checkPassword(password);
        if (!validPass) {
            return res.status(401).json({ error: "Email or password are incorect" })
        }

        const token = jwt.sign({ id: user.id },
            authConfig.jwt.secret,
            { expiresIn: authConfig.jwt.expiresIn })
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
            const decodedData = jwt.verify(token, authConfig.jwt.secret);
            return res.json({ ok: true })
        } catch (error) {
            throw new HttpError(400, "Invalid Token");
        }
    }
}


export default SessionController;