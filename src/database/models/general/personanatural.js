/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('personanatural', {
    pena_id: {
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
    pege_primernombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pege_segundonombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pege_primerapellido: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pege_segundoapellido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pege_fechanacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'personanatural'
  })
}
