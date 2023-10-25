const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('w8', 'root', 'Poetryclub@1999', {
    host: 'localhost',
    logging:false,
    dialect: 'mysql' 
  });

  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } 

  module.exports=sequelize