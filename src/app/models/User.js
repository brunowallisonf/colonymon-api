import Sequelize, { Model } from "sequelize"
import { v4 as uuid } from "uuid"

class User extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: Sequelize.UUID,
                defaultValue: uuid(),
                primaryKey: true,
            },
            fullname: {
                type: Sequelize.STRING,
                allowNull: false,

            },
            email: {
                type: Sequelize.STRING,
                allowNull: false
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
            }

        }, { sequelize })
        return this
    }
}

export default User