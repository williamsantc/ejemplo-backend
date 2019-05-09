/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('usuariorol', {
    usro_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rol_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'rol',
        key: 'rol_id'
      }
    },
    usua_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'usua_id'
      }
    }
  }, {
    tableName: 'usuariorol'
  })
}
