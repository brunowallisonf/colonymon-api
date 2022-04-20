import { Router } from "express";
const routes = Router();
import InspectionController from "../controllers/InspectionController"
const inspectionController = new InspectionController()
routes.post("/", inspectionController.store)
routes.get("/", inspectionController.list)
routes.get("/export", inspectionController.exportAll)

export default routes;