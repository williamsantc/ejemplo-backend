/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('usuario', {
    usua_id: {
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
    usua_cuenta: {
      type: DataTypes.STRING,
      allowNull: true
    },
    usua_password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    usua_salt: {
      type: DataTypes.STRING,
      allowNull: true
    },
    usua_bloqueado: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    usua_email: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'usuario'
  })
}
