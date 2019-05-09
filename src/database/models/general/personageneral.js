/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('personageneral', {
    pege_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pege_documento: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tido_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipodocumento',
        key: 'tido_id'
      }
    },
    pege_direccion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pege_telefono: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pege_email: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'personageneral'
  })
}
