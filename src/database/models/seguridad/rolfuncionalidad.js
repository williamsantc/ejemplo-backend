/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('rolfuncionalidad', {
    rofu_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rol_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'rol',
        key: 'rol_id'
      }
    },
    func_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'funcionalidad',
        key: 'func_id'
      }
    }
  }, {
    tableName: 'rolfuncionalidad'
  })
}
