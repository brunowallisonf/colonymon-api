import createInspectionService from "../services/createInspectionService"
class InspectionController {
    async store(req, res) {
        const { userId } = req
        const inspection = await createInspectionService(req.body, userId)
        return res.json({ inspection })
    }
}

export default InspectionController;