/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('estudiante', {
    estu_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pege_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'personageneral',
        key: 'pege_id'
      }
    },
    estu_data: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    tableName: 'estudiante'
  })
}
