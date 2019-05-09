/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('grupo', {
    grup_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    grup_descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    asig_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'asignatura',
        key: 'asig_id'
      }
    },
    doce_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'docente',
        key: 'doce_id'
      }
    }
  }, {
    tableName: 'grupo'
  })
}
