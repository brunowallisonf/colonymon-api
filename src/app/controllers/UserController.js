
import User from "../models/User"
class UserController {
    async store(req, res) {
        const { fullname, email, password } = req.body;
        const userExists = await User.findOne({ where: { email } });
        if (userExists) {
            return res.status(401).json({ error: "User already exists" })
        }
        const user = await User.create({ fullname, email, password })
        user.password = undefined;
        return res.json({ user })
    }
}

export default UserController;