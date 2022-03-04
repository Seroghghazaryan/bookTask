const Sequelize = require("sequelize")
const sequelize = require("../utils/pgDatabase")


const authorModel = sequelize.define("Author", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    surName: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = authorModel