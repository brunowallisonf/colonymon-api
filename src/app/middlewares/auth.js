import { verify } from "jsonwebtoken"
import HttpError from "http-errors";
import authConfig from "../../config/auth"

export default async function (req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(400).json({ error: "Token not found" })
    }
    const [, token] = authorization.split(" ");
    try {
        const decodedData = verify(token, authConfig.jwt.secret);
        req.userId = decodedData.id;
        return next()
    } catch (error) {
        throw HttpError(400, "Invalid Token");
    }

}