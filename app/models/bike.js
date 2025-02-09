const { DataTypes } = require('sequelize')
const sequelize = require('../database/database')
 
const Bike = sequelize.define('bike', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: { type: DataTypes.STRING,  allowNull: false  },
    wheel: { type: DataTypes.INTEGER,  allowNull: true  },
    usage: { type: DataTypes.STRING , allowNull: true },
    price: { type: DataTypes.DOUBLE , allowNull: true }
})


sequelize.sync({
    force: false
})
module.exports = Bike
