/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('matricula', {
    matr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    estu_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'estudiante',
        key: 'estu_id'
      }
    },
    grup_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'grupo',
        key: 'grup_id'
      }
    }
  }, {
    tableName: 'matricula'
  })
}
