"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _User = require('../app/models/User'); var _User2 = _interopRequireDefault(_User);

const models = [_User2.default]
class Database {
    constructor() {
        this.init()
    }
    init() {
        this.connection = new (0, _sequelize2.default)(_database2.default[process.env.NODE_ENV || "development"])
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

exports. default = new Database()