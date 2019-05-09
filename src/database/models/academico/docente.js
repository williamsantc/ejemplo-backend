/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('docente', {
    doce_id: {
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
    doce_data: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    tableName: 'docente'
  })
}
