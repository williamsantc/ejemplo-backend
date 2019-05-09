/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('rol', {
    rol_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rol_nombre: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'rol'
  })
}
