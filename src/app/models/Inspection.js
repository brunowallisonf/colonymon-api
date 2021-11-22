import Sequelize, { Model } from "sequelize";

class Inspection extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },

            userId: {
                type: Sequelize.BIGINT,
            },
            inspectionDate: {
                type: Sequelize.DATE
            },
            apiaryId: {
                type: Sequelize.STRING
            },
            recorderId: {
                type: Sequelize.STRING
            },
            hiveId: {
                type: Sequelize.STRING
            },
            observer: {
                type: Sequelize.STRING
            },
            framesNumberBox1: {
                type: Sequelize.INTEGER
            },
            framesNumberBox2: {
                type: Sequelize.INTEGER
            },

        }, { sequelize, tableName: "inspections" })
        return this
    }
    static associate(models) {
        this.belongsTo(models.User, { foreignKey: "userId" });
    }
}

export default Inspection