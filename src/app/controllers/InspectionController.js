import Inspection from "../models/Inspection";
import createInspectionService from "../services/createInspectionService"
class InspectionController {
    async store(req, res) {
        const { userId } = req
        const inspection = await createInspectionService(req.body, userId)
        return res.json({ inspection })
    }

    async list(req, res) {
        const { userId } = req;
        const inspections = await Inspection.findAll({ where: { userId } })
        return res.json(inspections)
    }
}

export default InspectionController;