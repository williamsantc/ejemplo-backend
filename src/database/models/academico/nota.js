/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('nota', {
    nota_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    matr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'matricula',
        key: 'matr_id'
      }
    },
    nota_nota: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    tableName: 'nota'
  })
}
