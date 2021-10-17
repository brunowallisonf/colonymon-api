import Sequelize, { Model } from "sequelize"
import { v4 as uuid } from "uuid"
import bCrypt from "bcrypt"
class User extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                autoIncrement: true,
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
        this.addHook('beforeCreate', async user => {
            if (user.password) {
                user.password = await bCrypt.hash(user.password, 8);
            }
        });
        return this
    }
    async checkPassword(password) {
        return bCrypt.compare(`${password}`, `${this.password}`);
    }


}

export default User