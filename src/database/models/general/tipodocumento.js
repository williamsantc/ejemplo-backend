/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('tipodocumento', {
    tido_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tido_descripcion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tido_abreviatura: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tipodocumento'
  })
}
