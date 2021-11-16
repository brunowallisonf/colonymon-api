import InspectionItem from "../models/InspectionItem";
import Inspection from "../models/Inspection"
export default async ({ items, inspectionDate, apiaryId, recorderId, hiveId, framesNumberBox1, framesNumberBox2, observer }, userId) => {

    const inspection = await Inspection.create({ inspectionDate, apiaryId, recorderId, hiveId, userId, framesNumberBox1, framesNumberBox2, observer });
    const inspectionItems = items.map(value => ({ ...value, inspectionId: inspection.id }))
    const savedItems = await InspectionItem.bulkCreate(inspectionItems)
    return { ...inspection.toJSON(), savedItems }
}