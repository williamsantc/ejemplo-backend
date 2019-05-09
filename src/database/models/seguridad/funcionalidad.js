/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('funcionalidad', {
    func_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    func_nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    func_url: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'funcionalidad'
  })
}
