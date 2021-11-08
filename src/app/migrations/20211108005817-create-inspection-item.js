'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTabe("inspectionItem", {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },

      inspectionId: {
        type: Sequelizelize.BIGINT,
      },
      question: {
        type: Sequelize.STRING,
      },
      metConditions: {
        type: Sequelize.BOOLEAN,
      },
      observations: {
        type: Sequelize.STRING
      }

    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("inspectionItem");
  }
};
