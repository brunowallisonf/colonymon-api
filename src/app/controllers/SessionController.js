import User from "../models/User"
import jwt from "jsonwebtoken"

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

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES })
        user.password = undefined;
        return res.json({ user, token })
    }
}


export default SessionController;