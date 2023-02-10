'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Amigos', [{
        nome: 'Natal',
        qnt_participantes: 20,
        valor_minimo: 45.0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nome: 'Ano Novo',
        qnt_participantes: 45,
        valor_minimo: 90.0,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        nome: 'Empresa',
        qnt_participantes: 30,
        valor_minimo: 25.0,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        nome: 'Familia',
        qnt_participantes: 15,
        valor_minimo: 50.0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Amigos', null, {});
  }
};
