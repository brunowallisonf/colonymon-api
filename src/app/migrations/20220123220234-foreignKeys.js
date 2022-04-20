'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addConstraint('inspections', {
      type: 'FOREIGN KEY',
      name: 'FK_INSPECTION_USER_ID',
      fields: ['user_id'],
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    })
    queryInterface.addConstraint('inspection_item', {
      fields: ['inspection_id'],
      type: 'FOREIGN KEY',
      name: 'FK_INSPECTION_ID_INSPECTION',
      references: {
        table: 'inspections',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("inspections", "FK_INSPECTION_USER_ID")
    await queryInterface.removeConstraint("inspection_item", "FK_INSPECTION_ID_INSPECTION")
  }
};
