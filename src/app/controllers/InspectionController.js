import Inspection from "../models/Inspection";
import createInspectionService from "../services/createInspectionService"
import exportFormats from "../constants/exportFormats";
import exportInspectionsToXML from "../services/exportInspectionsToXML";
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

    async exportAll(req, res) {
        const { format } = req.query
        const { userId } = req
        if (!exportFormats.includes(format)) {
            return res.status(400).json({ error: "Invalid format" })
        }
        const inspections = await Inspection.findAll({ where: { userId } })
        if (format === "xml") {
            const xmlInspections = exportInspectionsToXML(inspections.toObject())
            return res.json({ "ok": "true" })
        }
    }
}

export default InspectionController;