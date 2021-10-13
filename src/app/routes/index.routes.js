import { Router } from "express";
import sessionRouter from "./session.routes"
import userRouter from "./user.routes"
const routes = Router();
routes.get("/", (_, res) => {
    return res.json({ status: "up" })
})
routes.use("/sessions", sessionRouter)
routes.use("/users", userRouter)

export default routes;