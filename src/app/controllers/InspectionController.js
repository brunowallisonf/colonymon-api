import Inspection from "../models/Inspection";
import createInspectionService from "../services/createInspectionService"
class InspectionController {
    async store(req, res) {
        const { userId } = req
        const inspection = await createInspectionService(req.body, userId)
        return res.json({ inspection })
    }

    async list(req, res) {
        const limit = 10
        const page = parseInt(req.query.page || 1)
        const offset = (page - 1) * limit
        const { userId } = req;
        const inspections = await Inspection.findAll({ where: { userId }, order: [["inspectionDate", "DESC"]], limit, offset })
        return res.json({ page, inspections })
    }
}

export default InspectionController;