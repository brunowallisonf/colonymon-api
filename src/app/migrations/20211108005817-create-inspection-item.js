'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("inspection_item", {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },

      inspection_id: {
        type: Sequelize.BIGINT,
      },
      question: {
        type: Sequelize.STRING,
      },
      met_conditions: {
        type: Sequelize.ENUM,
        values: ["yes", "no", "non-applicable"]

      },
      observations: {
        type: Sequelize.STRING
      }

    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("inspection_item");
  }
};
