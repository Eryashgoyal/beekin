const {Sequelize, DataTypes } = require('sequelize');
const sequelize=require('./index')
//const sequelize = new Sequelize('sqlite::memory:');

const jobs = sequelize.define('jobs', {
  // Model attributes are defined here
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Description: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(jobs === sequelize.models.jobs); // true



module.exports=jobs