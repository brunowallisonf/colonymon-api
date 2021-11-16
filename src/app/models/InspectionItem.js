import Sequelize, { Model } from "sequelize";

class InspectionItem extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },

            inspectionId: {
                type: Sequelize.BIGINT,

            },
            question: {
                type: Sequelize.ENUM,
                values: ["yes", "no", "non-applicable"]

            },
            metConditions: {
                type: Sequelize.STRING,
            },
            observations: {
                type: Sequelize.STRING
            }
        }, { sequelize, tableName: "inspection_item" })
        return this
    }

    static associate(models) {
        this.belongsTo(models.Inspection, { foreignKey: "inspectionId" });

    }
}

export default InspectionItem