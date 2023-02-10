'use strict';
module.exports = (sequelize, DataTypes) => {
  const Amigo = sequelize.define('Amigo', {
    nome: DataTypes.STRING,
    qnt_participantes: DataTypes.INTEGER,
    valor_minimo: DataTypes.FLOAT
  }, {});
  Amigo.associate = function(models) {
    // associations can be defined here
  };
  return Amigo;
};