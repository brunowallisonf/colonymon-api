"use strict";'use strict';
const { v4: uuid } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
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

    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users")
  }
};
