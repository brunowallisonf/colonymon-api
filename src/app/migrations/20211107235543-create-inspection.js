'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("inspections", {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },

      user_id: {
        type: Sequelize.BIGINT,
      },
      inspection_date: {
        type: Sequelize.DATE
      },
      apiary_id: {
        type: Sequelize.STRING
      },
      recorder_id: {
        type: Sequelize.STRING
      },
      hive_id: {
        type: Sequelize.STRING
      },
      observer: {
        type: Sequelize.STRING
      },
      frames_number_box1: {
        type: Sequelize.INTEGER
      },
      frames_number_box2: {
        type: Sequelize.INTEGER
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("inspections")
  }
};
