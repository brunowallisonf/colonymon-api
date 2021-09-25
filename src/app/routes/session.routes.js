import { Router } from "express";
const routes = Router();
import SessionController from "../controllers/SessionController";

const sessionController = new SessionController()
routes.post("/", sessionController.store)

export default routes;