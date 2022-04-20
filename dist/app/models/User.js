"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);
class User extends _sequelize.Model {
    static init(sequelize) {
        super.init({
            id: {
                type: _sequelize2.default.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            fullname: {
                type: _sequelize2.default.STRING,
                allowNull: false,
            },
            email: {
                type: _sequelize2.default.STRING,
                allowNull: false
            },
            password: {
                type: _sequelize2.default.STRING,
                allowNull: false,
            }

        }, { sequelize })
        this.addHook('beforeCreate', async user => {
            if (user.password) {
                user.password = await _bcryptjs2.default.hash(user.password, 8);
            }
        });
        return this
    }
    async checkPassword(password) {
        return _bcryptjs2.default.compare(`${password}`, `${this.password}`);
    }


}

exports. default = User