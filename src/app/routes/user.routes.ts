import {Router} from "express";
const routes = Router();
import UserController from "../controllers/UserController"
const userController = new UserController()
routes.post("/",userController.store)


export default routes;