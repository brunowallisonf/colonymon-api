import { Router } from "express";
const routes = Router();
import InspectionController from "../controllers/InspectionController"
const inspectionController = new InspectionController()
routes.post("/", inspectionController.store)


export default routes;