import { Router } from "express";
import sessionRouter from "./session.routes"
import userRouter from "./user.routes"
import inspectionRouter from "./inspection.routes"
import authMiddleware from "../middlewares/auth"
const routes = Router();
routes.get("/", (_, res) => {
    return res.json({ status: "up" })
})


routes.use("/sessions", sessionRouter)
routes.use("/users", userRouter)

routes.use(authMiddleware)
routes.use("/inspections", inspectionRouter)
export default routes;