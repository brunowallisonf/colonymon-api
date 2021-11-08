'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTabe("inspections", {
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
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("inspections")
  }
};
