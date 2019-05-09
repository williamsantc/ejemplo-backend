/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('asignatura', {
    asig_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    asig_descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    asig_abreviatura: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'asignatura'
  })
}
