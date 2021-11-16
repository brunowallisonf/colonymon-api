import Sequelize from "sequelize"
import databaseConfig from "../config/database"
import User from "../app/models/User"
import Inspection from "../app/models/Inspection"
import InspectionItem from "../app/models/InspectionItem"
const models = [User, Inspection, InspectionItem]
class Database {
    constructor() {
        this.init()
    }
    init() {
        this.connection = new Sequelize(databaseConfig[process.env.NODE_ENV || "development"])
        this.connection
            .authenticate()
            .then(() =>
                console.info('Connection to PostgreSQL has been established successfully.')
            )
            .catch(err =>
                console.error('Unable to connect to the MySQL database:', err)
            );
        models.map(value => value.init(this.connection)).map(value => value.associate && value.associate(this.connection.models))
    }
}

export default new Database()