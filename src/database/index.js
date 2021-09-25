import Sequelize from "sequelize"
import databaseConfig from "../config/database"
import User from "../app/models/User"


const models = [User]

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
        models.map(value => value.init(this.connection))
    }
}

export default new Database()